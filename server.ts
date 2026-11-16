import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === "production";

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Simple in-memory cache for generated Arabic TTS audio (max 60 entries)
const ttsCache = new Map<string, string>();

const app = express();
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", hasGeminiKey: Boolean(getGeminiClient()) });
});

// ---------------------------------------------------------------------------
// 1. AI Arabic Speaking Partner (/api/ai/speaking)
// ---------------------------------------------------------------------------
interface SpeakingHistoryTurn {
  role: "ai" | "student";
  arabic: string;
}

app.post("/api/ai/speaking", async (req, res) => {
  const ai = getGeminiClient();
  if (!ai) {
    return res.status(503).json({
      error: "Kunci API Gemini belum tersedia di server. Silakan periksa konfigurasi Secrets.",
    });
  }

  try {
    const {
      darsId,
      darsTitle,
      challengeTitle,
      challengeInstruction,
      promptContext,
      history,
      userMessage,
      inputMethod,
    } = req.body as {
      darsId: string;
      darsTitle: string;
      challengeTitle: string;
      challengeInstruction: string;
      promptContext: string;
      history: SpeakingHistoryTurn[];
      userMessage: string;
      inputMethod?: "voice" | "text";
    };

    if (!userMessage || !userMessage.trim()) {
      return res.status(400).json({ error: "Jawaban siswa tidak boleh kosong." });
    }

    const formattedHistory = (history || [])
      .slice(-8)
      .map((turn) => `${turn.role === "ai" ? "Guru/AI" : "Siswa"}: ${turn.arabic}`)
      .join("\n");

    const systemInstruction = `Kamu adalah "أُسْتَاذٌ ذَكِيٌّ" (Partner Berbicara Bahasa Arab AI) untuk siswa Kelas VII Madrasah Tsanawiyah kategori kemampuan HIGH (Level Lanjutan).
Konteks Dars: ${darsTitle} (${darsId}).
Jenis Latihan: ${challengeTitle}.
Instruksi Tugas: ${challengeInstruction}
Konteks/Pertanyaan Pemantik: ${promptContext}
Metode Input Siswa: ${inputMethod === "voice" ? "Suara (Web Speech Recognition)" : "Teks Arab"}.

TUGASMU:
1. Pahami jawaban siswa secara kontekstual (meskipun siswa menjawab singkat, salah harakat, atau ada kekeliruan tata bahasa/nahwu/sharaf dasar kelas VII).
2. Berikan balasan alami dalam Bahasa Arab berharakat lengkap (full harakat/syakal) yang sesuai konteks jawaban siswa, disertai terjemahan bahasa Indonesia yang ramah.
3. Ajukan satu pertanyaan lanjutan dalam Bahasa Arab berharakat lengkap untuk mendorong siswa mengembangkan ide dan berbicara lebih panjang.
4. Berikan koreksi tata bahasa & kosakata dalam Bahasa Indonesia yang jelas dan mendidik. Jika jawaban sudah sangat baik, jelaskan mengapa itu baik dan berikan variasi ungkapan yang lebih kaya.
5. Berikan contoh jawaban yang lebih lengkap/sempurna dalam Bahasa Arab berharakat lengkap ("betterExampleArabic").
6. Berikan tip pelafalan / makhraj atau intonasi singkat dalam Bahasa Indonesia ("pronunciationTip").
7. Evaluasi kualitas & kelengkapan kalimat siswa pada skala 0-100 ("qualityScore") dan status kelengkapan ("completenessLevel": "Perlu Pengembangan" | "Cukup Baik" | "Sangat Baik"). Catatan: Jika siswa menulis kata tidak relevan atau terlalu pendek (kurang dari 3 kata atau melenceng dari bahasa Arab), beri skor di bawah 55 dan arahkan dengan lembut untuk mencoba lagi dalam bahasa Arab.`;

    const promptText = `${formattedHistory ? `Riwayat Percakapan Sebelumnya:\n${formattedHistory}\n\n` : ""}Jawaban Terbaru Siswa: "${userMessage.trim()}"`;

    const response = await ai.models.generateContent({
      model: "gemini-4-hydrogen",
      contents: promptText,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            replyArabic: {
              type: Type.STRING,
              description: "Respons AI berbahasa Arab dengan harakat lengkap, merespons isi jawaban siswa.",
            },
            replyIndonesian: {
              type: Type.STRING,
              description: "Terjemahan Bahasa Indonesia dari respons AI.",
            },
            followUpQuestionArabic: {
              type: Type.STRING,
              description: "Pertanyaan lanjutan dalam Bahasa Arab berharakat lengkap.",
            },
            followUpQuestionIndonesian: {
              type: Type.STRING,
              description: "Arti pertanyaan lanjutan dalam Bahasa Indonesia.",
            },
            grammarFeedbackIndonesian: {
              type: Type.STRING,
              description: "Koreksi tata bahasa, penggunaan kata ganti/isyarah/fi'il, dan pujian konstruktif dalam Bahasa Indonesia.",
            },
            betterExampleArabic: {
              type: Type.STRING,
              description: "Contoh kalimat jawaban yang lebih sempurna dan alami dalam Bahasa Arab berharakat lengkap.",
            },
            pronunciationTip: {
              type: Type.STRING,
              description: "Saran pelafalan, harakat akhir, atau intonasi berbicara dalam Bahasa Indonesia.",
            },
            completenessLevel: {
              type: Type.STRING,
              description: "Kategori capaian: 'Perlu Pengembangan', 'Cukup Baik', atau 'Sangat Baik'.",
            },
            qualityScore: {
              type: Type.INTEGER,
              description: "Skor kualitas dan kelengkapan jawaban siswa dari 0 sampai 100.",
            },
          },
          required: [
            "replyArabic",
            "replyIndonesian",
            "followUpQuestionArabic",
            "followUpQuestionIndonesian",
            "grammarFeedbackIndonesian",
            "betterExampleArabic",
            "pronunciationTip",
            "completenessLevel",
            "qualityScore",
          ],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? "{}").trim());
    return res.json(parsed);
  } catch (err) {
    console.error("Error in /api/ai/speaking:", err);
    return res.status(500).json({
      error: "Terjadi kendala saat memproses percakapan AI. Silakan coba beberapa saat lagi.",
    });
  }
});

// ---------------------------------------------------------------------------
// 2. AI Arabic Writing Evaluator (/api/ai/writing)
// ---------------------------------------------------------------------------
app.post("/api/ai/writing", async (req, res) => {
  const ai = getGeminiClient();
  if (!ai) {
    return res.status(503).json({
      error: "Kunci API Gemini belum tersedia di server. Silakan periksa konfigurasi Secrets.",
    });
  }

  try {
    const {
      darsTitle,
      exerciseTitle,
      instructionArabic,
      instructionIndonesian,
      requirements,
      rubricCriteria,
      studentText,
      minSentences,
    } = req.body as {
      darsTitle: string;
      exerciseTitle: string;
      instructionArabic: string;
      instructionIndonesian: string;
      requirements: string[];
      rubricCriteria: string[];
      studentText: string;
      minSentences?: number;
    };

    if (!studentText || studentText.trim().length < 5) {
      return res.status(400).json({
        error: "Tulisan masih terlalu singkat. Silakan tulis kalimat bahasa Arab terlebih dahulu.",
      });
    }

    const systemInstruction = `Kamu adalah Guru Bahasa Arab ahli untuk Kelas VII Madrasah Tsanawiyah (Kategori Kemampuan HIGH).
Tugasmu mengevaluasi tulisan Bahasa Arab siswa secara objektif, mendidik, dan berbasis rubrik—BUKAN mencocokkan satu kunci jawaban kaku.

Dars: ${darsTitle}
Latihan: ${exerciseTitle}
Instruksi Arab: ${instructionArabic}
Instruksi Indonesia: ${instructionIndonesian}
Syarat Tugas:
${(requirements || []).map((r, i) => `${i + 1}. ${r}`).join("\n")}
Target minimal kalimat: ${minSentences || 3} kalimat.

Kriteria Rubrik yang harus dinilai (masing-masing skor 1 sampai 5):
${(rubricCriteria || []).map((c, i) => `${i + 1}. ${c}`).join("\n")}

ATURAN PENILAIAN ADIL:
- Periksa apakah teks benar-benar berbahasa Arab dan relevan dengan tema. Jika teks bukan bahasa Arab, asal-asalan, atau jauh di bawah jumlah kalimat minimal, beri skor rendah (totalPercentage < 50) dan passed: false.
- Untuk siswa Level HIGH kelas VII MTs yang menulis dengan kosakata tepat, struktur mubtada-khabar/fi'il-fa'il yang baik, kata penghubung (وَ، ثُمَّ، لِأَنَّ، بَعْدَ ذَلِكَ، قَبْلَ), serta ide yang berkembang, berikan skor tinggi dan passed: true (ambang lulus >= 65).
- Sertakan koreksi spesifik (misalnya kesalahan mudzakkar/muannats, harakat, atau kata penghubung) dalam "corrections", serta versi perbaikan paragraf dalam Bahasa Arab berharakat lengkap ("improvedVersionArabic").`;

    const response = await ai.models.generateContent({
      model: "gemini-4-hydrogen",
      contents: `Tulisan Siswa:\n"""\n${studentText.trim()}\n"""`,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MEDIUM },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            criteriaScores: {
              type: Type.ARRAY,
              description: "Skor per kriteria rubrik.",
              items: {
                type: Type.OBJECT,
                properties: {
                  criterion: { type: Type.STRING },
                  score: { type: Type.INTEGER, description: "Skor 1 sampai 5" },
                  comment: { type: Type.STRING, description: "Catatan singkat kriteria dalam Bahasa Indonesia" },
                },
                required: ["criterion", "score", "comment"],
              },
            },
            totalPercentage: {
              type: Type.INTEGER,
              description: "Persentase nilai akhir dari 0 sampai 100.",
            },
            passed: {
              type: Type.BOOLEAN,
              description: "True jika tulisan memenuhi syarat minimal & relevan (nilai >= 65).",
            },
            praiseArabic: {
              type: Type.STRING,
              description: "Ungkapan motivasi/pujian Bahasa Arab berharakat lengkap.",
            },
            overallFeedback: {
              type: Type.STRING,
              description: "Evaluasi keseluruhan, apresiasi kelebihan, dan saran pengembangan ide dalam Bahasa Indonesia.",
            },
            corrections: {
              type: Type.ARRAY,
              description: "Daftar koreksi kosakata atau struktur kalimat spesifik.",
              items: {
                type: Type.OBJECT,
                properties: {
                  original: { type: Type.STRING },
                  suggestion: { type: Type.STRING },
                  reason: { type: Type.STRING },
                },
                required: ["original", "suggestion", "reason"],
              },
            },
            improvedVersionArabic: {
              type: Type.STRING,
              description: "Contoh pengembangan atau perbaikan tulisan siswa dalam Bahasa Arab berharakat lengkap.",
            },
          },
          required: [
            "criteriaScores",
            "totalPercentage",
            "passed",
            "praiseArabic",
            "overallFeedback",
            "corrections",
            "improvedVersionArabic",
          ],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? "{}").trim());
    return res.json(parsed);
  } catch (err) {
    console.error("Error in /api/ai/writing:", err);
    return res.status(500).json({
      error: "Gagal mengevaluasi tulisan dengan AI. Silakan coba lagi.",
    });
  }
});

// ---------------------------------------------------------------------------
// 3. Arabic Text-to-Speech (/api/tts) via Gemini 3.8 Flash Lite TTS
// ---------------------------------------------------------------------------
app.post("/api/tts", async (req, res) => {
  const ai = getGeminiClient();
  if (!ai) {
    return res.status(503).json({ error: "TTS service unavailable without API key" });
  }

  try {
    const { text, style } = req.body as { text?: string; style?: string };
    const cleanText = (text || "").trim();
    if (!cleanText || cleanText.length > 2000) {
      return res.status(400).json({ error: "Invalid text length for TTS" });
    }

    const cacheKey = `${style || "default"}::${cleanText}`;
    const cached = ttsCache.get(cacheKey);
    if (cached) {
      return res.json({ audioBase64: cached, mimeType: "audio/wav", cached: true });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash-lite-tts",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: cleanText,
              speechMetadata: {
                style:
                  style ||
                  "Clear, articulate, warm Modern Standard Arabic teacher speaking at a moderate, natural educational pace with precise harakat pronunciation",
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Charon" },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.status(502).json({ error: "No audio returned by TTS model" });
    }

    if (ttsCache.size >= 60) {
      const firstKey = ttsCache.keys().next().value;
      if (firstKey) ttsCache.delete(firstKey);
    }
    ttsCache.set(cacheKey, base64Audio);

    return res.json({ audioBase64: base64Audio, mimeType: "audio/wav", cached: false });
  } catch (err) {
    console.error("Error in /api/tts:", err);
    return res.status(500).json({ error: "TTS generation failed" });
  }
});

// ---------------------------------------------------------------------------
// 4. Vite Dev Middleware / Production Static Serving
// ---------------------------------------------------------------------------
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Arabic Explorer E-LKPD server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

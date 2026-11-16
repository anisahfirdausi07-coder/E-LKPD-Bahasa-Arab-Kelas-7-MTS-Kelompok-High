import React, { useMemo, useState } from "react";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Eraser,
  Loader2,
  Save,
  Sparkles,
} from "lucide-react";
import {
  DarsId,
  MufrodatItem,
  PictureWritingExercise,
  WritingEvalResult,
} from "../types";
import { SceneIllustration } from "./Illustrations";
import { playGentleError } from "../utils/soundEffects";

interface WritingStudioProps {
  darsId: DarsId;
  darsTitle: string;
  mufrodat: MufrodatItem[];
  connectors?: { arabic: string; indonesian: string }[];
  pictureExercises: PictureWritingExercise[];
  completedItems: Record<string, boolean>;
  savedWritings: Record<
    string,
    { text: string; lastEval?: WritingEvalResult; updatedAt: string }
  >;
  soundEnabled: boolean;
  onCompleteItem: (itemId: string) => void;
  onSaveDraft: (exerciseId: string, text: string, evalResult?: WritingEvalResult) => void;
}

export const WritingStudio: React.FC<WritingStudioProps> = ({
  darsTitle,
  mufrodat,
  connectors,
  pictureExercises,
  completedItems,
  savedWritings,
  soundEnabled,
  onCompleteItem,
  onSaveDraft,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentExercise = pictureExercises[activeIdx];

  const [drafts, setDrafts] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    pictureExercises.forEach((ex) => {
      init[ex.id] = savedWritings[ex.id]?.text ?? "";
    });
    return init;
  });

  const [evalResults, setEvalResults] = useState<Record<string, WritingEvalResult>>(() => {
    const init: Record<string, WritingEvalResult> = {};
    pictureExercises.forEach((ex) => {
      if (savedWritings[ex.id]?.lastEval) {
        init[ex.id] = savedWritings[ex.id].lastEval!;
      }
    });
    return init;
  });

  const [showVocabGuide, setShowVocabGuide] = useState(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalError, setEvalError] = useState<string | null>(null);

  const currentText = drafts[currentExercise.id] ?? "";
  const currentEval = evalResults[currentExercise.id];

  const wordCount = useMemo(() => {
    const trimmed = currentText.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [currentText]);

  const sentenceCount = useMemo(() => {
    const trimmed = currentText.trim();
    if (!trimmed) return 0;
    return trimmed
      .split(/[.!؟\n،]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 4).length;
  }, [currentText]);

  const handleUpdateText = (val: string) => {
    setDrafts((prev) => ({ ...prev, [currentExercise.id]: val }));
    setEvalError(null);
  };

  const handleInsertWord = (word: string) => {
    const existing = drafts[currentExercise.id] ?? "";
    const updated = existing.trim().length > 0 ? `${existing.trim()} ${word} ` : `${word} `;
    handleUpdateText(updated);
  };

  const handleManualSave = () => {
    onSaveDraft(currentExercise.id, currentText, currentEval);
    setSaveToast("Tulisan berhasil disimpan ke perangkat.");
    setTimeout(() => setSaveToast(null), 2500);
  };

  const handleClearWriting = () => {
    handleUpdateText("");
    setEvalResults((prev) => {
      const next = { ...prev };
      delete next[currentExercise.id];
      return next;
    });
    onSaveDraft(currentExercise.id, "");
  };

  const handleEvaluateWithAI = async () => {
    if (wordCount < 4) {
      setEvalError("Tulislah beberapa kalimat bahasa Arab berdasarkan gambar terlebih dahulu.");
      return;
    }

    setIsEvaluating(true);
    setEvalError(null);

    try {
      const res = await fetch("/api/ai/writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          darsTitle,
          exerciseTitle: currentExercise.titleIndonesian,
          instructionArabic: currentExercise.instructionArabic,
          instructionIndonesian: currentExercise.instructionIndonesian,
          requirements: currentExercise.requirements,
          rubricCriteria: currentExercise.rubricCriteria,
          studentText: currentText,
          minSentences: currentExercise.minSentences,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Gagal memeriksa tulisan dengan AI.");
      }

      const result = data as WritingEvalResult;
      setEvalResults((prev) => ({ ...prev, [currentExercise.id]: result }));
      onSaveDraft(currentExercise.id, currentText, result);

      if (result.passed) {
        onCompleteItem(currentExercise.id);
      } else {
        playGentleError(soundEnabled);
      }
    } catch (err) {
      setEvalError(err instanceof Error ? err.message : "Terjadi kendala jaringan.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const connectorChips = connectors ?? [
    { arabic: "وَ", indonesian: "dan" },
    { arabic: "ثُمَّ", indonesian: "kemudian" },
    { arabic: "لِأَنَّ", indonesian: "karena" },
    { arabic: "بَعْدَ ذَلِكَ", indonesian: "setelah itu" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#D9CEB8] space-y-6">
      <div>
        <h4 className="text-lg font-bold text-[#0B1D3A]">
          Maharah Kitabah: Menulis Kalimat Berdasarkan Gambar
        </h4>
        <p className="text-sm text-slate-600">
          Amati setiap gambar di bawah ini dengan saksama, lalu tulislah kalimat-kalimat bahasa Arab yang mendeskripsikan isi gambar tersebut.
        </p>
      </div>

      {/* Picture Exercise Selector */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#F2ECE0] rounded-xl border border-[#D9CEB8]">
        {pictureExercises.map((ex, i) => {
          const done = Boolean(completedItems[ex.id]);
          const active = i === activeIdx;
          return (
            <button
              key={ex.id}
              type="button"
              onClick={() => {
                setActiveIdx(i);
                setEvalError(null);
              }}
              className={`flex-1 min-w-[200px] px-4 py-2.5 rounded-lg text-left transition-all flex items-center justify-between gap-2 ${
                active
                  ? "bg-[#0B1D3A] text-[#FAF7F0] shadow-sm"
                  : "text-[#0B1D3A] hover:bg-white/60"
              }`}
            >
              <span className="text-sm font-semibold truncate">{ex.titleIndonesian}</span>
              {done && <CheckCircle2 className="w-4 h-4 text-[#0F8B6D] shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Picture Prompt + RTL Writing Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Picture Card & Instructions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0B1D3A] text-[#FAF7F0] rounded-xl p-5 space-y-2">
            <p className="text-xl font-ar-amiri font-bold text-[#E2B753]" dir="rtl">
              {currentExercise.instructionArabic}
            </p>
            <p className="text-sm text-[#FAF7F0]/90 leading-relaxed">
              {currentExercise.instructionIndonesian}
            </p>
          </div>

          <SceneIllustration
            type={currentExercise.illustrationType}
            className="w-full rounded-xl"
          />

          <div className="bg-[#FAF7F0] rounded-xl p-4 border border-[#D9CEB8] space-y-2">
            <h5 className="text-sm font-bold text-[#0B1D3A]">Panduan Menulis dari Gambar:</h5>
            <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
              {currentExercise.requirements.map((req, rIdx) => (
                <li key={rIdx}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Arabic Editor + Vocab Guide + Rubric Evaluation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setShowVocabGuide((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2ECE0] hover:bg-[#e7decb] text-[#0B1D3A] text-xs font-semibold border border-[#D9CEB8]"
            >
              <BookOpen className="w-4 h-4 text-[#0D6E6E]" />
              {showVocabGuide ? "Tutup Panduan Kosakata" : "Buka Panduan Kosakata"}
            </button>

            <div className="flex items-center gap-4 text-xs font-mono tabular-nums text-slate-600">
              <span>
                Kata: <strong className="text-[#0B1D3A]">{wordCount}</strong>
              </span>
              <span>
                Perkiraan Kalimat: <strong className="text-[#0B1D3A]">{sentenceCount}</strong> /{" "}
                {currentExercise.minSentences}+
              </span>
            </div>
          </div>

          {showVocabGuide && (
            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] space-y-3">
              <div>
                <p className="text-xs font-bold text-[#0D6E6E] mb-1.5">
                  Kata Penghubung (klik untuk menyisipkan):
                </p>
                <div className="flex flex-wrap gap-2" dir="rtl">
                  {connectorChips.map((c, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleInsertWord(c.arabic)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#D9CEB8] hover:border-[#0D6E6E] text-sm font-ar-naskh text-[#0B1D3A]"
                    >
                      {c.arabic}{" "}
                      <span className="text-[11px] font-sans text-slate-500">({c.indonesian})</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1D3A] mb-1.5">
                  Kosakata Dars (klik untuk menyisipkan):
                </p>
                <div className="flex flex-wrap gap-1.5" dir="rtl">
                  {mufrodat.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => handleInsertWord(m.arabic)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-[#F2ECE0] text-sm font-ar-naskh text-[#0B1D3A]"
                    >
                      {m.arabic}{" "}
                      <span className="text-[11px] font-sans text-slate-500">({m.indonesian})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <textarea
            dir="rtl"
            rows={7}
            value={currentText}
            onChange={(e) => handleUpdateText(e.target.value)}
            placeholder="اُكْتُبْ جُمَلًا عَرَبِيَّةً تَصِفُ الصُّورَةَ هُنَا..."
            className="w-full p-4 rounded-xl border-2 border-[#D9CEB8] bg-[#FAF7F0] text-[#0B1D3A] font-ar-naskh text-xl leading-loose focus:outline-none focus:border-[#0D6E6E] resize-y"
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleManualSave}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#D9CEB8] text-[#0B1D3A] text-sm font-semibold hover:bg-[#F2ECE0] transition-colors"
              >
                <Save className="w-4 h-4 text-[#0D6E6E]" />
                Simpan
              </button>
              <button
                type="button"
                onClick={handleClearWriting}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#D9CEB8] text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <Eraser className="w-4 h-4" />
                Hapus & Ulangi
              </button>
            </div>

            <button
              type="button"
              onClick={handleEvaluateWithAI}
              disabled={isEvaluating}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F8B6D] text-white text-sm font-semibold hover:bg-[#0c7259] disabled:opacity-50 transition-colors shadow-sm"
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memeriksa Tulisan...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#E2B753]" />
                  <span>Periksa Tulisan (AI)</span>
                </>
              )}
            </button>
          </div>

          {saveToast && <p className="text-xs font-medium text-[#0F8B6D]">{saveToast}</p>}

          {evalError && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
              <span>{evalError}</span>
            </div>
          )}

          {currentEval && (
            <div className="rounded-2xl p-5 bg-[#FAF7F0] border border-[#D9CEB8] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9CEB8] pb-3">
                <div>
                  <p className="text-xl font-ar-amiri font-bold text-[#0D6E6E]" dir="rtl">
                    {currentEval.praiseArabic}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Hasil Evaluasi Tulisan · Ambang Tuntas ≥ 65%
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold tabular-nums text-[#0B1D3A]">
                    {currentEval.totalPercentage}%
                  </div>
                  <div
                    className={`text-xs font-bold ${
                      currentEval.passed ? "text-[#0F8B6D]" : "text-amber-700"
                    }`}
                  >
                    {currentEval.passed ? "TUNTAS (+10 Koin)" : "حَاوِلْ مَرَّةً أُخْرَى"}
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {currentEval.criteriaScores.map((c, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#0B1D3A] mb-1">
                      <span>{c.criterion}</span>
                      <span className="font-mono tabular-nums text-[#0D6E6E]">{c.score}/5</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1.5">
                      <div
                        className="h-full bg-[#0F8B6D] rounded-full transition-all"
                        style={{ width: `${(c.score / 5) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-600">{c.comment}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-1.5">
                <h6 className="text-xs font-bold text-[#0B1D3A]">Umpan Balik & Saran:</h6>
                <p className="text-sm text-slate-700 leading-relaxed">{currentEval.overallFeedback}</p>
              </div>

              {currentEval.corrections.length > 0 && (
                <div className="space-y-2">
                  <h6 className="text-xs font-bold text-[#0B1D3A]">Koreksi Kalimat:</h6>
                  {currentEval.corrections.map((corr, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200 text-xs space-y-1">
                      <div className="flex flex-wrap items-center gap-2" dir="rtl">
                        <span className="line-through text-red-700 font-ar-naskh text-base">
                          {corr.original}
                        </span>
                        <span className="text-slate-400">←</span>
                        <span className="text-[#0F8B6D] font-bold font-ar-naskh text-base">
                          {corr.suggestion}
                        </span>
                      </div>
                      <p className="text-slate-600">{corr.reason}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-[#0B1D3A] text-[#FAF7F0] rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-semibold text-[#E2B753]">
                  Contoh Kalimat Deskripsi Gambar yang Lebih Baik:
                </span>
                <p className="text-lg font-ar-naskh leading-loose" dir="rtl">
                  {currentEval.improvedVersionArabic}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

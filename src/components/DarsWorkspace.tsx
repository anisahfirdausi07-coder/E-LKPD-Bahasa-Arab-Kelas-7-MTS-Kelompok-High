import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Award,
  BookOpen,
  BookOpenText,
  CheckCircle2,
  Clock,
  Eye,
  Headphones,
  Lock,
  MessageCircle,
  PenTool,
  RotateCcw,
  Star,
  Target,
  Volume2,
} from "lucide-react";
import { DarsData, MaharahTab, McqQuestion, UserProgressState, WritingEvalResult } from "../types";
import { AudioPlayer } from "./AudioPlayer";
import {
  AnimatedOpenBookIcon,
  SceneIllustration,
  TwinklingStar,
} from "./Illustrations";
import { KalamPractice } from "./KalamPractice";
import { SentenceOrderQuiz } from "./SentenceOrderQuiz";
import { WritingStudio } from "./WritingStudio";
import { playGentleError, playSuccessChime } from "../utils/soundEffects";

interface DarsWorkspaceProps {
  dars: DarsData;
  progressState: UserProgressState;
  darsStats: {
    completedCount: number;
    totalCount: number;
    percentage: number;
    isCompleted: boolean;
    maharah: {
      istima: number;
      kalam: number;
      qiraah: number;
      kitabah: number;
    };
  };
  onBackDashboard: () => void;
  onCompleteItem: (
    darsId: DarsData["id"],
    maharah: "istima" | "kalam" | "qiraah" | "kitabah",
    itemId: string
  ) => void;
  onWrongAttempt: (itemId: string) => void;
  onSaveDraft: (exerciseId: string, text: string, evalResult?: WritingEvalResult) => void;
  onOpenDictionary: () => void;
  onNavigateNextDars?: () => void;
}

const MAHARAH_TABS: { id: MaharahTab; label: string; arabic: string; icon: React.ReactNode }[] = [
  { id: "materi", label: "Tujuan & Materi", arabic: "الْمَوَادُّ", icon: <BookOpen className="w-4 h-4" /> },
  { id: "istima", label: "1. Istima'", arabic: "الاسْتِمَاعُ", icon: <Headphones className="w-4 h-4" /> },
  { id: "kalam", label: "2. Kalam", arabic: "الْكَلَامُ", icon: <MessageCircle className="w-4 h-4" /> },
  { id: "qiraah", label: "3. Qira'ah", arabic: "الْقِرَاءَةُ", icon: <BookOpenText className="w-4 h-4" /> },
  { id: "kitabah", label: "4. Kitabah", arabic: "الْكِتَابَةُ", icon: <PenTool className="w-4 h-4" /> },
];

const ARABIC_OPTION_LETTERS = ["أ", "ب", "ج", "د"];

// Audio-Only Question Istima' Quiz Section (Questions are NOT rendered as text)
const IstimaAudioQuizSection: React.FC<{
  questions: McqQuestion[];
  completedItems: Record<string, boolean>;
  soundEnabled: boolean;
  onCorrect: (questionId: string) => void;
  onWrong: (questionId: string) => void;
}> = ({ questions, completedItems, soundEnabled, onCorrect, onWrong }) => {
  const [selectedMap, setSelectedMap] = useState<Record<string, number>>({});
  const [statusMap, setStatusMap] = useState<Record<string, "correct" | "wrong">>({});

  const handleChoose = (q: McqQuestion, optIdx: number) => {
    setSelectedMap((prev) => ({ ...prev, [q.id]: optIdx }));
    if (optIdx === q.correctIndex) {
      setStatusMap((prev) => ({ ...prev, [q.id]: "correct" }));
      playSuccessChime(soundEnabled);
      onCorrect(q.id);
    } else {
      setStatusMap((prev) => ({ ...prev, [q.id]: "wrong" }));
      playGentleError(soundEnabled);
      onWrong(q.id);
    }
  };

  const handleRetryQuestion = (qId: string) => {
    setSelectedMap((prev) => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
    setStatusMap((prev) => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
  };

  return (
    <div className="space-y-5">
      {questions.map((q, idx) => {
        const chosenIdx = selectedMap[q.id];
        const status = statusMap[q.id];
        const alreadySavedCorrect = Boolean(completedItems[q.id]);

        return (
          <div
            key={q.id}
            className="bg-white rounded-2xl p-5 border border-[#D9CEB8] space-y-4"
          >
            {/* Question Meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#0D6E6E]">
                Soal {idx + 1} · {q.skillFocus}
                {q.isInference ? " (Penalaran & Inferensi)" : ""}
              </span>
              {alreadySavedCorrect && (
                <span className="text-[#0F8B6D] font-semibold inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Terjawab Benar (+10 Koin)
                </span>
              )}
            </div>

            {/* Audio-Only Question Player (NO written question text) */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <Volume2 className="w-4 h-4 text-[#0D6E6E]" />
                <span>Dengarkan pertanyaan Soal {idx + 1} melalui audio, lalu pilih jawaban yang tepat:</span>
              </div>
              <AudioPlayer
                textArabic={q.questionArabic}
                label={`Audio Pertanyaan Soal ${idx + 1}`}
              />
            </div>

            {/* 4 Arabic Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" dir="rtl">
              {q.options.map((opt, optIdx) => {
                const isSelected = chosenIdx === optIdx;
                const isCorrectChoice = optIdx === q.correctIndex;
                let btnStyle =
                  "bg-[#FAF7F0] border-[#D9CEB8] text-[#0B1D3A] hover:border-[#0D6E6E] hover:bg-[#F2ECE0]";

                if (status === "correct" && isCorrectChoice) {
                  btnStyle = "bg-emerald-50 border-[#0F8B6D] text-emerald-950 font-semibold";
                } else if (status === "wrong" && isSelected) {
                  btnStyle = "bg-red-50 border-red-400 text-red-900";
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleChoose(q, optIdx)}
                    className={`text-right px-4 py-3.5 rounded-xl border-2 transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#0B1D3A] text-[#FAF7F0] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {ARABIC_OPTION_LETTERS[optIdx]}
                    </span>
                    <span className="font-ar-naskh text-lg leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback & Explanation */}
            {status === "correct" && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <p className="font-ar-amiri text-xl font-bold text-[#0F8B6D]" dir="rtl">
                  أَحْسَنْتَ! إِجَابَةٌ صَحِيحَةٌ
                </p>
                <p className="text-sm text-emerald-950">{q.explanationIndonesian}</p>
              </div>
            )}

            {status === "wrong" && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="font-ar-amiri text-lg font-bold text-amber-900" dir="rtl">
                    حَاوِلْ مَرَّةً أُخْرَى!
                  </p>
                  <p className="text-xs text-amber-900">
                    Jawaban kurang tepat. Putar kembali audio pertanyaan dan audio cerita untuk menemukan jawabannya.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRetryQuestion(q.id)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-amber-900 text-xs font-semibold hover:bg-amber-100 inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Ulangi Soal
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const DarsWorkspace: React.FC<DarsWorkspaceProps> = ({
  dars,
  progressState,
  darsStats,
  onBackDashboard,
  onCompleteItem,
  onWrongAttempt,
  onSaveDraft,
  onOpenDictionary,
  onNavigateNextDars,
}) => {
  const [activeTab, setActiveTab] = useState<MaharahTab>("materi");
  const [highlightMode, setHighlightMode] = useState(true);

  useEffect(() => {
    setActiveTab("materi");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dars.id]);

  // Istima transcript unlocked only after all 8 Istima questions are completed
  const allIstimaCompleted = dars.istima.questions.every((q) =>
    Boolean(progressState.completedItems[q.id])
  );
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    setShowTranscript(false);
  }, [dars.id]);

  // Highlight vocabulary words in Dars 3 Qira'ah paragraph
  const renderParagraphWithHighlights = (text: string) => {
    if (!highlightMode || !dars.qiraah.highlightedWords?.length) {
      return text;
    }
    const words = dars.qiraah.highlightedWords;
    const pattern = new RegExp(`(${words.map((w) => w.arabic).join("|")})`, "g");
    const parts = text.split(pattern);
    return parts.map((part, i) => {
      const match = words.find((w) => w.arabic === part);
      if (match) {
        return (
          <mark
            key={i}
            title={match.indonesian}
            className="bg-[#E2B753]/30 text-[#0B1D3A] px-1 rounded cursor-help underline decoration-dotted decoration-[#0D6E6E]"
          >
            {part}
          </mark>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Dars Header Banner */}
      <div className="bg-[#0B1D3A] text-[#FAF7F0] rounded-2xl p-5 sm:p-6 border border-[#2C9B97]/35">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <button
              type="button"
              onClick={onBackDashboard}
              className="inline-flex items-center gap-1.5 text-xs text-[#E2B753] hover:underline mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Dashboard
            </button>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-xs font-semibold text-[#7EE0D6] uppercase tracking-wider">
                Dars {dars.number} · {dars.titleIndonesian}
              </span>
              <span className="text-xs text-[#FAF7F0]/60">·</span>
              <span className="text-xs font-mono tabular-nums text-[#E2B753]">
                Progres: {darsStats.percentage}% ({darsStats.completedCount}/{darsStats.totalCount})
              </span>
            </div>
            <h2 className="font-ar-amiri text-3xl sm:text-4xl font-bold text-white" dir="rtl">
              {dars.titleArabic}
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenDictionary}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#FAF7F0] inline-flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#E2B753]" />
              Kamus Mini
            </button>
          </div>
        </div>

        {/* 5 Maharah Navigation Tabs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {MAHARAH_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const pct =
              tab.id === "istima"
                ? darsStats.maharah.istima
                : tab.id === "kalam"
                  ? darsStats.maharah.kalam
                  : tab.id === "qiraah"
                    ? darsStats.maharah.qiraah
                    : tab.id === "kitabah"
                      ? darsStats.maharah.kitabah
                      : null;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#E2B753] text-[#0B1D3A] shadow-sm"
                    : "bg-white/10 text-[#FAF7F0] hover:bg-white/15"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="font-ar-tajawal text-sm opacity-85" dir="rtl">
                  ({tab.arabic})
                </span>
                {pct !== null && (
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isActive ? "text-[#0B1D3A]" : "text-[#E2B753]"
                    }`}
                  >
                    {pct}%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT */}
      <motion.div
        key={`${dars.id}-${activeTab}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-6"
      >
        {/* ================================================================= */}
        {/* TAB 1: TUJUAN PEMBELAJARAN & MATERI SINGKAT                       */}
        {/* ================================================================= */}
        {activeTab === "materi" && (
          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-4">
              <h3 className="text-lg font-bold text-[#0B1D3A] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0D6E6E]" />
                <span>Tujuan Pembelajaran (Level High)</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dars.learningObjectives.map((obj, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] text-sm text-slate-700 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#0D6E6E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-[#0B1D3A]">
                Materi Inti & Struktur Bahasa Arab
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {dars.grammarPoints.map((gp, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-[#D9CEB8] space-y-3"
                  >
                    <h4 className="font-bold text-[#0D6E6E]">{gp.title}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{gp.explanation}</p>
                    <div className="space-y-2 pt-1">
                      {gp.examples.map((ex, j) => (
                        <div
                          key={j}
                          className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8]/70 flex items-center justify-between gap-3"
                        >
                          <div className="space-y-0.5 flex-1">
                            <p className="font-ar-naskh text-lg font-semibold text-[#0B1D3A]" dir="rtl">
                              {ex.arabic}
                            </p>
                            <p className="text-xs text-slate-600">{ex.indonesian}</p>
                          </div>
                          <AudioPlayer textArabic={ex.arabic} compact />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {dars.extraColors && (
              <section className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-4">
                <h3 className="text-lg font-bold text-[#0B1D3A]">
                  Sifat Warna (الأَلْوَانُ — Mudzakkar & Muannats)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {dars.extraColors.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] text-center space-y-2"
                    >
                      <div
                        className="w-8 h-8 rounded-full mx-auto border border-slate-300"
                        style={{ backgroundColor: c.hex }}
                      />
                      <p className="font-ar-naskh text-base font-bold text-[#0B1D3A]" dir="rtl">
                        {c.arabic}
                      </p>
                      <p className="text-xs text-slate-600">{c.indonesian}</p>
                      <AudioPlayer textArabic={c.arabic} compact />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {dars.dailyTimeline && (
              <section className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-4">
                <h3 className="text-lg font-bold text-[#0B1D3A] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0D6E6E]" />
                  <span>Timeline Aktivitas Harian</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dars.dailyTimeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-[#0D6E6E]" dir="rtl">
                          {item.timeArabic}
                        </div>
                        <p className="font-ar-naskh text-lg font-bold text-[#0B1D3A]" dir="rtl">
                          {item.activityArabic}
                        </p>
                        <p className="text-xs text-slate-600">{item.activityIndonesian}</p>
                      </div>
                      <AudioPlayer textArabic={item.activityArabic} compact />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {dars.extraConnectors && (
              <section className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-4">
                <h3 className="text-lg font-bold text-[#0B1D3A]">
                  Kata Penghubung Penting (أَدَوَاتُ الرَّبْطِ)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {dars.extraConnectors.map((conn, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-ar-amiri text-2xl font-bold text-[#0D6E6E]" dir="rtl">
                          {conn.arabic}
                        </span>
                        <AudioPlayer textArabic={conn.exampleArabic} compact />
                      </div>
                      <p className="text-xs font-semibold text-[#0B1D3A]">{conn.indonesian}</p>
                      <p className="font-ar-naskh text-sm text-slate-700" dir="rtl">
                        {conn.exampleArabic}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#0B1D3A]">
                  Kartu Kosakata Digital (الْمُفْرَدَاتُ)
                </h3>
                <span className="text-xs text-slate-500">
                  Klik tombol putar untuk mendengar pelafalan dan contoh kalimat
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dars.mufrodat.map((m) => (
                  <div
                    key={m.id}
                    className="bg-white rounded-2xl p-5 border border-[#D9CEB8] space-y-3 hover:border-[#0D6E6E] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-ar-amiri text-2xl font-bold text-[#0B1D3A]" dir="rtl">
                          {m.arabic}
                        </p>
                        <p className="text-xs text-slate-500 italic">{m.transliteration}</p>
                      </div>
                      <AudioPlayer
                        textArabic={`${m.arabic}. ${m.exampleArabic}`}
                        compact
                      />
                    </div>
                    <p className="text-sm font-semibold text-[#0D6E6E]">{m.indonesian}</p>
                    <div className="pt-2 border-t border-slate-200 space-y-1">
                      <p className="font-ar-naskh text-base text-[#0B1D3A]" dir="rtl">
                        {m.exampleArabic}
                      </p>
                      <p className="text-xs text-slate-600">{m.exampleIndonesian}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-4">
              <h3 className="text-lg font-bold text-[#0B1D3A]">
                Ungkapan Komunikatif (التَّعْبِيرَاتُ)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dars.ungkapan.map((u, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-ar-naskh text-lg font-bold text-[#0B1D3A]" dir="rtl">
                          {u.arabic}
                        </p>
                        <p className="text-xs text-slate-600">{u.indonesian}</p>
                      </div>
                      <AudioPlayer
                        textArabic={`${u.arabic} ${u.responseArabic}`}
                        compact
                      />
                    </div>
                    <div className="pt-2 border-t border-[#D9CEB8]/70">
                      <p className="font-ar-naskh text-base text-[#0D6E6E]" dir="rtl">
                        {u.responseArabic}
                      </p>
                      <p className="text-xs text-slate-600">{u.responseIndonesian}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: MAHARAH ISTIMA' (Audio Story + Audio-Only Questions)       */}
        {/* ================================================================= */}
        {activeTab === "istima" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5">
                  <SceneIllustration type={dars.istima.illustrationType} />
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#0D6E6E]">
                      Maharah Istima' · Menyimak Audio Cerita & Soal Audio
                    </span>
                    <h3 className="font-ar-amiri text-3xl font-bold text-[#0B1D3A] mt-1" dir="rtl">
                      {dars.istima.titleArabic}
                    </h3>
                    <p className="text-sm text-slate-600">{dars.istima.titleIndonesian}</p>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    Putar audio cerita di bawah ini dengan saksama. Setiap soal di bawah menggunakan <strong>pertanyaan audio</strong> (tanpa teks tertulis) untuk melatih pemahaman menyimakmu secara murni.
                  </p>

                  <AudioPlayer
                    textArabic={dars.istima.audioTextArabic}
                    label={`Audio Cerita Istima': ${dars.istima.titleIndonesian}`}
                  />

                  <div className="pt-1">
                    {allIstimaCompleted ? (
                      <div className="space-y-3">
                        <button
                          type="button"
                          onClick={() => setShowTranscript((v) => !v)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2ECE0] hover:bg-[#e5dcc9] text-[#0B1D3A] text-xs font-semibold border border-[#D9CEB8]"
                        >
                          <Eye className="w-4 h-4 text-[#0D6E6E]" />
                          {showTranscript ? "Sembunyikan Transkrip Cerita" : "Lihat Transkrip Cerita"}
                        </button>
                        {showTranscript && (
                          <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8]">
                            <p className="font-ar-naskh text-xl leading-loose text-[#0B1D3A]" dir="rtl">
                              {dars.istima.audioTextArabic}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-xs text-slate-500">
                        <Lock className="w-3.5 h-3.5 text-amber-700" />
                        <span>
                          Transkrip cerita terkunci sampai seluruh {dars.istima.questions.length} soal Istima' terjawab benar.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <IstimaAudioQuizSection
              questions={dars.istima.questions}
              completedItems={progressState.completedItems}
              soundEnabled={progressState.soundEnabled}
              onCorrect={(qId) => onCompleteItem(dars.id, "istima", qId)}
              onWrong={onWrongAttempt}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: MAHARAH KALAM (Tanpa AI — Hiwar + Voice Recorder Practice) */}
        {/* ================================================================= */}
        {activeTab === "kalam" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#D9CEB8] space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-semibold text-[#0D6E6E]">
                    Model Percakapan (الْحِوَارُ)
                  </span>
                  <h3 className="font-ar-amiri text-3xl font-bold text-[#0B1D3A]" dir="rtl">
                    {dars.kalam.titleArabic}
                  </h3>
                  <p className="text-sm text-slate-600">{dars.kalam.titleIndonesian}</p>
                </div>
                <AudioPlayer
                  textArabic={dars.kalam.hiwar.map((h) => h.textArabic).join(" ")}
                  label="Putar Seluruh Hiwar"
                />
              </div>

              <div className="space-y-3">
                {dars.kalam.hiwar.map((line, i) => {
                  const isRight = line.speakerSide === "right";
                  return (
                    <div
                      key={i}
                      className={`flex ${isRight ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-4 border ${
                          isRight
                            ? "bg-[#FAF7F0] border-[#D9CEB8]"
                            : "bg-[#0D6E6E]/10 border-[#2C9B97]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <span className="font-ar-cairo text-sm font-bold text-[#0D6E6E]" dir="rtl">
                            {line.speakerArabic}
                          </span>
                          <AudioPlayer textArabic={line.textArabic} compact />
                        </div>
                        <p className="font-ar-naskh text-xl text-[#0B1D3A] leading-relaxed" dir="rtl">
                          {line.textArabic}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">{line.textIndonesian}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <KalamPractice
              challenges={dars.kalam.challenges}
              completedItems={progressState.completedItems}
              soundEnabled={progressState.soundEnabled}
              onCompleteChallenge={(chId) => onCompleteItem(dars.id, "kalam", chId)}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: MAHARAH QIRA'AH (Digital Book + Menyusun Kalimat)          */}
        {/* ================================================================= */}
        {activeTab === "qiraah" && (
          <div className="space-y-6">
            <div className="bg-[#FAF7F0] rounded-2xl p-5 sm:p-8 border-2 border-[#D9CEB8] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9CEB8] pb-4">
                <div>
                  <span className="text-xs font-semibold text-[#0D6E6E]">
                    Halaman Buku Digital · Bacaan Pemahaman
                  </span>
                  <h3 className="font-ar-amiri text-3xl sm:text-4xl font-bold text-[#0B1D3A]" dir="rtl">
                    {dars.qiraah.titleArabic}
                  </h3>
                  <p className="text-sm text-slate-600">{dars.qiraah.titleIndonesian}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {dars.qiraah.highlightedWords && (
                    <button
                      type="button"
                      onClick={() => setHighlightMode((v) => !v)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                        highlightMode
                          ? "bg-[#E2B753]/25 border-[#E2B753] text-[#0B1D3A]"
                          : "bg-white border-[#D9CEB8] text-slate-600"
                      }`}
                    >
                      {highlightMode ? "Sorot Kosakata: Aktif" : "Sorot Kosakata: Nonaktif"}
                    </button>
                  )}
                  <AudioPlayer
                    textArabic={
                      dars.qiraah.isDialog && dars.qiraah.dialogLines
                        ? dars.qiraah.dialogLines.map((l) => l.textArabic).join(" ")
                        : (dars.qiraah.paragraphs ?? []).join(" ")
                    }
                    label="Dengarkan Bacaan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <SceneIllustration type={dars.qiraah.illustrationType} />

                  {dars.qiraah.highlightedWords && highlightMode && (
                    <div className="bg-white rounded-xl p-4 border border-[#D9CEB8] space-y-2">
                      <p className="text-xs font-bold text-[#0D6E6E]">
                        Kosakata Sorotan (Arahkan kursor / baca arti):
                      </p>
                      <div className="space-y-1.5">
                        {dars.qiraah.highlightedWords.map((hw, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-xs border-b border-slate-100 pb-1 last:border-0"
                          >
                            <span className="text-slate-600">{hw.indonesian}</span>
                            <span className="font-ar-naskh text-base font-bold text-[#0B1D3A]" dir="rtl">
                              {hw.arabic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-7 border border-[#D9CEB8] space-y-4">
                  {dars.qiraah.isDialog && dars.qiraah.dialogLines ? (
                    <div className="space-y-3">
                      {dars.qiraah.dialogLines.map((line, i) => {
                        const isAhmad = line.speakerSide === "right";
                        return (
                          <div
                            key={i}
                            className={`p-3.5 rounded-xl border ${
                              isAhmad
                                ? "bg-[#FAF7F0] border-[#D9CEB8]"
                                : "bg-[#0D6E6E]/10 border-[#2C9B97]/40"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span
                                className={`font-ar-cairo text-sm font-bold ${
                                  isAhmad ? "text-[#0B1D3A]" : "text-[#0D6E6E]"
                                }`}
                                dir="rtl"
                              >
                                {line.speakerArabic}
                              </span>
                              <AudioPlayer textArabic={line.textArabic} compact />
                            </div>
                            <p
                              className="font-ar-naskh text-xl text-[#0B1D3A] leading-loose"
                              dir="rtl"
                            >
                              {line.textArabic}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {(dars.qiraah.paragraphs ?? []).map((para, pIdx) => (
                        <div key={pIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#0D6E6E]">
                              Paragraf {pIdx + 1}
                            </span>
                            <AudioPlayer textArabic={para} compact />
                          </div>
                          <p
                            className="font-ar-naskh text-xl sm:text-2xl text-[#0B1D3A] leading-[2.15]"
                            dir="rtl"
                          >
                            {renderParagraphWithHighlights(para)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Qira'ah Sentence Ordering Instruction */}
            <div className="bg-[#0B1D3A] text-[#FAF7F0] rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-ar-amiri text-2xl font-bold text-[#E2B753]" dir="rtl">
                اِقْرَأِ النَّصَّ بِعِنَايَةٍ، ثُمَّ رَتِّبِ الْكَلِمَاتِ لِتَكُونَ جُمْلَةً صَحِيحَةً!
              </p>
              <span className="text-xs text-[#FAF7F0]/80">
                Susun {dars.qiraah.sentenceOrderQuestions.length} kalimat berdasarkan isi bacaan
              </span>
            </div>

            <SentenceOrderQuiz
              exercises={dars.qiraah.sentenceOrderQuestions}
              completedItems={progressState.completedItems}
              soundEnabled={progressState.soundEnabled}
              onCorrect={(qId) => onCompleteItem(dars.id, "qiraah", qId)}
              onWrong={onWrongAttempt}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 5: MAHARAH KITABAH (Menulis Kalimat dari Gambar Saja)         */}
        {/* ================================================================= */}
        {activeTab === "kitabah" && (
          <WritingStudio
            darsId={dars.id}
            darsTitle={dars.titleArabic}
            mufrodat={dars.mufrodat}
            connectors={dars.extraConnectors}
            pictureExercises={dars.kitabah.pictureExercises}
            completedItems={progressState.completedItems}
            savedWritings={progressState.savedWritings}
            soundEnabled={progressState.soundEnabled}
            onCompleteItem={(itemId) => onCompleteItem(dars.id, "kitabah", itemId)}
            onSaveDraft={onSaveDraft}
          />
        )}
      </motion.div>

      {/* MAHFUZHAT & MOTIVATION CARD */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#08152B] via-[#0B1D3A] to-[#0D6E6E] text-[#FAF7F0] p-6 sm:p-8 border border-[#E2B753]/40">
        <TwinklingStar className="absolute top-4 left-6 text-[#E2B753]" size={20} delay={0} />
        <TwinklingStar className="absolute bottom-5 right-8 text-[#2C9B97]" size={22} delay={1} />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-[#E2B753]/50 flex items-center justify-center shrink-0">
              <AnimatedOpenBookIcon className="w-11 h-11" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E2B753]">
                <Award className="w-4 h-4" />
                <span>Mahfuzhat & Motivasi Belajar Dars {dars.number}</span>
              </div>
              <p className="font-ar-ruqaa text-3xl sm:text-4xl font-bold text-white" dir="rtl">
                {dars.mahfuzhat.arabic}
              </p>
              <p className="text-sm font-semibold text-[#E2B753]">{dars.mahfuzhat.translation}</p>
              <p className="text-xs text-[#FAF7F0]/80 max-w-xl">{dars.mahfuzhat.reflection}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <AudioPlayer textArabic={dars.mahfuzhat.arabic} compact />
            {onNavigateNextDars && (
              <button
                type="button"
                onClick={onNavigateNextDars}
                className="px-5 py-3 rounded-xl bg-[#E2B753] hover:bg-[#eab845] text-[#0B1D3A] font-bold text-sm inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Star className="w-4 h-4" />
                <span>Lanjut ke Dars Berikutnya</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

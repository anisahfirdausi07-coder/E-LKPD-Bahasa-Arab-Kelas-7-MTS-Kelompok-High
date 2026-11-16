import React, { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { SentenceOrderExercise } from "../types";
import { playGentleError, playSuccessChime } from "../utils/soundEffects";

interface SentenceOrderQuizProps {
  exercises: SentenceOrderExercise[];
  completedItems: Record<string, boolean>;
  soundEnabled: boolean;
  onCorrect: (itemId: string) => void;
  onWrong: (itemId: string) => void;
}

export const SentenceOrderQuiz: React.FC<SentenceOrderQuizProps> = ({
  exercises,
  completedItems,
  soundEnabled,
  onCorrect,
  onWrong,
}) => {
  const [selectedWordsMap, setSelectedWordsMap] = useState<Record<string, number[]>>({});
  const [feedbackMap, setFeedbackMap] = useState<
    Record<string, { status: "correct" | "wrong"; message: string }>
  >({});

  const handleToggleWord = (exId: string, wordIdx: number) => {
    setFeedbackMap((prev) => {
      const next = { ...prev };
      delete next[exId];
      return next;
    });
    setSelectedWordsMap((prev) => {
      const cur = prev[exId] ?? [];
      if (cur.includes(wordIdx)) {
        return { ...prev, [exId]: cur.filter((i) => i !== wordIdx) };
      }
      return { ...prev, [exId]: [...cur, wordIdx] };
    });
  };

  const handleCheckOrder = (ex: SentenceOrderExercise) => {
    const chosenIndices = selectedWordsMap[ex.id] ?? [];
    const builtSentence = chosenIndices.map((idx) => ex.scrambledWords[idx]).join(" ").trim();
    if (builtSentence === ex.correctSentence.trim()) {
      playSuccessChime(soundEnabled);
      setFeedbackMap((prev) => ({
        ...prev,
        [ex.id]: {
          status: "correct",
          message: `أَحْسَنْتَ! إِجَابَةٌ صَحِيحَةٌ — "${ex.translationIndonesian}"`,
        },
      }));
      onCorrect(ex.id);
    } else {
      playGentleError(soundEnabled);
      setFeedbackMap((prev) => ({
        ...prev,
        [ex.id]: {
          status: "wrong",
          message:
            "حَاوِلْ مَرَّةً أُخْرَى! Susunan kata belum sesuai dengan struktur kalimat pada teks bacaan.",
        },
      }));
      onWrong(ex.id);
    }
  };

  const handleReset = (exId: string) => {
    setSelectedWordsMap((prev) => ({ ...prev, [exId]: [] }));
    setFeedbackMap((prev) => {
      const next = { ...prev };
      delete next[exId];
      return next;
    });
  };

  return (
    <div className="space-y-5">
      {exercises.map((ex, idx) => {
        const chosen = selectedWordsMap[ex.id] ?? [];
        const feedback = feedbackMap[ex.id];
        const isDone = Boolean(completedItems[ex.id]);

        return (
          <div
            key={ex.id}
            className="bg-white rounded-2xl p-5 border border-[#D9CEB8] space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold text-[#0D6E6E]">
                Soal {idx + 1}. {ex.instructionIndonesian}
              </span>
              {isDone && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F8B6D] whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4" /> Selesai (+10 Koin)
                </span>
              )}
            </div>

            {/* Built Sentence Box */}
            <div
              dir="rtl"
              className="min-h-[62px] p-3.5 rounded-xl bg-[#FAF7F0] border-2 border-dashed border-[#2C9B97]/55 flex flex-wrap items-center gap-2"
            >
              {chosen.length === 0 ? (
                <span className="text-sm text-slate-400 font-sans" dir="ltr">
                  Klik kosakata di bawah secara berurutan untuk menyusun kalimat sesuai bacaan...
                </span>
              ) : (
                chosen.map((wordIdx, pos) => (
                  <button
                    key={`${wordIdx}-${pos}`}
                    type="button"
                    onClick={() => handleToggleWord(ex.id, wordIdx)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0B1D3A] text-[#FAF7F0] font-ar-naskh text-xl hover:bg-[#173669] transition-colors"
                    title="Klik untuk menghapus kata ini"
                  >
                    {ex.scrambledWords[wordIdx]}
                  </button>
                ))
              )}
            </div>

            {/* Word Chips Bank */}
            <div dir="rtl" className="flex flex-wrap items-center gap-2">
              {ex.scrambledWords.map((word, wIdx) => {
                const isUsed = chosen.includes(wIdx);
                return (
                  <button
                    key={wIdx}
                    type="button"
                    disabled={isUsed}
                    onClick={() => handleToggleWord(ex.id, wIdx)}
                    className={`px-3.5 py-1.5 rounded-lg font-ar-naskh text-xl border transition-all ${
                      isUsed
                        ? "opacity-30 bg-slate-200 border-slate-300 cursor-not-allowed"
                        : "bg-white border-[#D9CEB8] text-[#0B1D3A] hover:border-[#0D6E6E] hover:bg-[#F2ECE0]"
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleCheckOrder(ex)}
                disabled={chosen.length !== ex.scrambledWords.length}
                className="px-4 py-2 rounded-xl bg-[#0F8B6D] text-white text-sm font-semibold hover:bg-[#0c7259] disabled:opacity-45 disabled:cursor-not-allowed transition-colors"
              >
                Periksa Susunan Kalimat
              </button>
              <button
                type="button"
                onClick={() => handleReset(ex.id)}
                className="px-3.5 py-2 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] text-slate-700 text-sm hover:bg-[#F2ECE0] inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Ulangi
              </button>
            </div>

            {feedback && (
              <div
                className={`p-3.5 rounded-xl text-sm font-medium ${
                  feedback.status === "correct"
                    ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                    : "bg-amber-50 text-amber-900 border border-amber-200"
                }`}
              >
                <span className="font-ar-naskh text-base" dir="rtl">
                  {feedback.message}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

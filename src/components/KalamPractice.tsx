import React, { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mic,
  RotateCcw,
  Square,
  Volume2,
} from "lucide-react";
import { SpeakingChallenge } from "../types";
import { AudioPlayer } from "./AudioPlayer";
import { SceneIllustration } from "./Illustrations";
import { playSuccessChime } from "../utils/soundEffects";

interface KalamPracticeProps {
  challenges: SpeakingChallenge[];
  completedItems: Record<string, boolean>;
  soundEnabled: boolean;
  onCompleteChallenge: (challengeId: string) => void;
}

export const KalamPractice: React.FC<KalamPracticeProps> = ({
  challenges,
  completedItems,
  soundEnabled,
  onCompleteChallenge,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const challenge = challenges[activeIdx];

  // Voice recording state per challenge (using MediaRecorder, no AI)
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordedUrls, setRecordedUrls] = useState<Record<string, string>>({});
  const [micError, setMicError] = useState<string | null>(null);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean[]>>({});
  const [practiceNotes, setPracticeNotes] = useState<Record<string, string>>({});

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setMicError(null);
    if (isRecording && mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      Object.values(recordedUrls).forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentChecks =
    checkedMap[challenge.id] ?? challenge.checklistItems.map(() => false);
  const allChecked = currentChecks.every(Boolean);
  const hasRecording = Boolean(recordedUrls[challenge.id]);
  const hasNote = (practiceNotes[challenge.id] ?? "").trim().length > 5;
  const isDone = Boolean(completedItems[challenge.id]);

  const handleStartRecording = async () => {
    setMicError(null);
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setMicError(
        "Perekam mikrofon tidak tersedia di perangkat/browser ini. Kamu tetap dapat berlatih mengucapkan kalimat secara langsung lalu mencentang daftar periksa."
      );
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (ev) => {
        if (ev.data.size > 0) chunksRef.current.push(ev.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecordedUrls((prev) => {
          if (prev[challenge.id]) URL.revokeObjectURL(prev[challenge.id]);
          return { ...prev, [challenge.id]: url };
        });
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
      setRecordingSeconds(0);
      timerRef.current = window.setInterval(() => {
        setRecordingSeconds((s) => s + 1);
      }, 1000);
    } catch {
      setMicError(
        "Izin mikrofon tidak diberikan. Kamu tetap dapat berlatih berbicara dengan suara lantang dan mencatat skrip latihanmu di bawah."
      );
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleToggleCheck = (idx: number) => {
    setCheckedMap((prev) => {
      const list = [...(prev[challenge.id] ?? challenge.checklistItems.map(() => false))];
      list[idx] = !list[idx];
      return { ...prev, [challenge.id]: list };
    });
  };

  const handleComplete = () => {
    playSuccessChime(soundEnabled);
    onCompleteChallenge(challenge.id);
  };

  return (
    <div className="space-y-6">
      {/* Challenge Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F2ECE0] rounded-xl border border-[#D9CEB8]">
        {challenges.map((ch, idx) => {
          const done = Boolean(completedItems[ch.id]);
          const active = idx === activeIdx;
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`flex-1 min-w-[180px] px-4 py-2.5 rounded-lg text-left transition-all flex items-center justify-between gap-2 ${
                active
                  ? "bg-[#0B1D3A] text-[#FAF7F0] shadow-sm"
                  : "text-[#0B1D3A] hover:bg-white/60"
              }`}
            >
              <div className="min-w-0">
                <div className="text-xs opacity-75">{ch.badgeLabel}</div>
                <div className="text-sm font-semibold truncate">{ch.titleIndonesian}</div>
              </div>
              {done && <CheckCircle2 className="w-4 h-4 text-[#0F8B6D] shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Main Speaking Practice Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Prompt, Illustration & Sample Expressions */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-6 border border-[#D9CEB8] space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-xl font-ar-amiri font-bold text-[#0D6E6E]" dir="rtl">
                {challenge.titleArabic}
              </h4>
              <p className="text-sm font-bold text-[#0B1D3A]">{challenge.titleIndonesian}</p>
            </div>
            {isDone && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F8B6D] whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4" /> Selesai (+10 Koin)
              </span>
            )}
          </div>

          {challenge.illustrationType && (
            <SceneIllustration
              type={challenge.illustrationType}
              className="w-full rounded-xl overflow-hidden"
            />
          )}

          <p className="text-sm text-slate-700 leading-relaxed">{challenge.instructionIndonesian}</p>

          {/* Arabic Speaking Prompt + Audio */}
          <div className="bg-[#FAF7F0] rounded-xl p-4 border border-[#D9CEB8] space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#0D6E6E]">Pertanyaan / Topik Berbicara:</span>
              <AudioPlayer textArabic={challenge.promptArabic} compact />
            </div>
            <p className="font-ar-naskh text-xl text-[#0B1D3A] leading-relaxed" dir="rtl">
              {challenge.promptArabic}
            </p>
            <p className="text-xs text-slate-600">{challenge.promptIndonesian}</p>
          </div>

          {/* Model Phrases to Mimic */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-semibold text-slate-600">
              Panduan Ungkapan (klik ikon putar untuk menirukan pelafalan):
            </p>
            <div className="space-y-2">
              {challenge.sampleHints.map((hint, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8]"
                >
                  <AudioPlayer textArabic={hint} compact />
                  <p className="font-ar-naskh text-lg text-[#0B1D3A] text-right flex-1" dir="rtl">
                    {hint}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Standalone Voice Recorder & Self-Assessment Checklist */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-6 border border-[#D9CEB8] space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h4 className="text-base font-bold text-[#0B1D3A] flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-[#0D6E6E]" />
              <span>Studio Rekam Suara & Latihan Mandiri</span>
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Rekam suaramu saat berbicara bahasa Arab, putar kembali untuk mengecek kelancaran, lalu centang daftar periksa di bawah.
            </p>
          </div>

          {/* Recorder Controls */}
          <div className="bg-[#0B1D3A] text-[#FAF7F0] rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {!isRecording ? (
                <button
                  type="button"
                  onClick={handleStartRecording}
                  className="px-5 py-3 rounded-xl bg-[#E2B753] hover:bg-[#eab845] text-[#0B1D3A] font-bold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <Mic className="w-4 h-4" />
                  <span>{hasRecording ? "Rekam Ulang Suara" : "Mulai Rekam Suara"}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStopRecording}
                  className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm inline-flex items-center gap-2 animate-pulse"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Selesai Rekam ({recordingSeconds} dtk)</span>
                </button>
              )}

              {hasRecording && !isRecording && (
                <button
                  type="button"
                  onClick={() => {
                    setRecordedUrls((prev) => {
                      const next = { ...prev };
                      if (next[challenge.id]) URL.revokeObjectURL(next[challenge.id]);
                      delete next[challenge.id];
                      return next;
                    });
                  }}
                  className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-[#FAF7F0] inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Hapus Rekaman
                </button>
              )}
            </div>

            {recordedUrls[challenge.id] && (
              <div className="pt-2 space-y-1.5">
                <p className="text-xs text-[#E2B753] font-medium">
                  Rekaman Suaramu (Putar untuk Evaluasi Mandiri):
                </p>
                <audio controls src={recordedUrls[challenge.id]} className="w-full h-10" />
              </div>
            )}
          </div>

          {micError && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
              <span>{micError}</span>
            </div>
          )}

          {/* Optional Spoken Script Note */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 block">
              Catatan Persiapan Kalimat Lisan (opsional, untuk membantu latihan berbicara):
            </label>
            <textarea
              dir="rtl"
              rows={3}
              value={practiceNotes[challenge.id] ?? ""}
              onChange={(e) =>
                setPracticeNotes((prev) => ({ ...prev, [challenge.id]: e.target.value }))
              }
              placeholder="اُكْتُبْ مُسَوَّدَةَ كَلَامِكَ هُنَا قَبْلَ التَّحَدُّثِ إِذَا أَرَدْتَ..."
              className="w-full p-3 rounded-xl border border-[#D9CEB8] bg-[#FAF7F0] font-ar-naskh text-lg text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#0D6E6E]"
            />
          </div>

          {/* Self-Assessment Checklist */}
          <div className="space-y-2.5 pt-2 border-t border-slate-200">
            <p className="text-xs font-bold text-[#0B1D3A]">
              Daftar Periksa Latihan Berbicara (Centang setelah mempraktikkan):
            </p>
            {challenge.checklistItems.map((item, idx) => (
              <label
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F0] border border-[#D9CEB8] cursor-pointer hover:bg-[#F2ECE0] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={currentChecks[idx]}
                  onChange={() => handleToggleCheck(idx)}
                  className="mt-0.5 w-4 h-4 accent-[#0F8B6D] rounded cursor-pointer"
                />
                <span className="text-xs text-slate-700 leading-relaxed">{item}</span>
              </label>
            ))}
          </div>

          <button
            type="button"
            disabled={!allChecked && !hasRecording && !hasNote}
            onClick={handleComplete}
            className="w-full py-3 px-5 rounded-xl bg-[#0F8B6D] hover:bg-[#0c7259] disabled:opacity-45 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors"
          >
            {isDone
              ? "Latihan Kalam Sudah Tersimpan (+10 Koin)"
              : allChecked
                ? "Selesaikan Latihan Kalam (+10 Koin)"
                : "Centang Daftar Periksa untuk Menyelesaikan"}
          </button>
        </div>
      </div>
    </div>
  );
};

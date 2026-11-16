import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Award, BookOpen, CheckCircle2, Coins, Trophy } from "lucide-react";
import { CURRICULUM } from "../data/curriculum";
import { DarsId } from "../types";
import { AnimatedOpenBookIcon, SceneIllustration } from "./Illustrations";

interface DashboardProps {
  totalCoins: number;
  overallPercentage: number;
  accuracy: number;
  completedDarsCount: number;
  darsProgress: {
    darsId: DarsId;
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
  }[];
  onSelectDars: (id: DarsId) => void;
  onOpenCoinsPage: () => void;
  onOpenClosingPage: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  totalCoins,
  overallPercentage,
  accuracy,
  completedDarsCount,
  darsProgress,
  onSelectDars,
  onOpenCoinsPage,
  onOpenClosingPage,
}) => {
  const allDone = completedDarsCount === CURRICULUM.length;

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* Hero Greeting Banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl bg-gradient-to-r from-[#0B1D3A] via-[#0D4A58] to-[#0D6E6E] text-[#FAF7F0] p-6 sm:p-8 border border-[#2C9B97]/30 shadow-sm"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 border border-[#E2B753]/40 items-center justify-center shrink-0">
              <AnimatedOpenBookIcon className="w-11 h-11" />
            </div>
            <div className="space-y-1.5">
              <p className="font-ar-amiri text-2xl sm:text-3xl font-bold text-[#E2B753]" dir="rtl">
                مَرْحَبًا بِكَ يَا بَطَلَ اللُّغَةِ الْعَرَبِيَّةِ!
              </p>
              <h2 className="font-ar-cairo text-xl sm:text-2xl font-bold text-white" dir="rtl">
                هَيَّا نَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ
              </h2>
              <p className="text-sm text-[#FAF7F0]/80 max-w-2xl">
                Pilih dars di bawah ini untuk memulai petualangan belajarmu di Level High. Kumpulkan koin, raih bonus setiap maharah, dan buka seluruh lencana penghargaan!
              </p>
            </div>
          </div>

          {/* Quick Summary Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenCoinsPage}
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3 text-left transition-colors"
            >
              <div className="flex items-center gap-1.5 text-xs text-[#E2B753] font-medium">
                <Coins className="w-3.5 h-3.5" />
                <span>Total Koin</span>
              </div>
              <div className="mt-1 text-2xl font-mono font-bold tabular-nums text-white">
                {totalCoins}
              </div>
            </button>

            <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3">
              <div className="text-xs text-[#FAF7F0]/75 font-medium">Progres</div>
              <div className="mt-1 text-2xl font-mono font-bold tabular-nums text-[#E2B753]">
                {overallPercentage}%
              </div>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3">
              <div className="text-xs text-[#FAF7F0]/75 font-medium">Akurasi</div>
              <div className="mt-1 text-2xl font-mono font-bold tabular-nums text-white">
                {accuracy}%
              </div>
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-6 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#FAF7F0]/80">
            <span>Progres Pembelajaran Keseluruhan ({completedDarsCount}/3 Dars Selesai)</span>
            <span className="font-mono tabular-nums">{overallPercentage}%</span>
          </div>
          <div className="w-full h-2.5 bg-black/25 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E2B753] to-[#2C9B97] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallPercentage}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Appreciation Banner when all 3 Dars completed */}
      {allDone && (
        <div className="rounded-2xl bg-[#0F8B6D] text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#E2B753]">
          <div className="flex items-center gap-3">
            <Trophy className="w-9 h-9 text-[#E2B753] shrink-0" />
            <div>
              <h3 className="font-ar-amiri text-2xl font-bold text-[#E2B753]" dir="rtl">
                مُبَارَكٌ! لَقَدْ أَكْمَلْتَ جَمِيعَ الدُّرُوسِ!
              </h3>
              <p className="text-sm text-white/90">
                Luar biasa! Kamu telah menuntaskan seluruh 3 Dars Level High. Buka halaman penghargaanmu sekarang!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenClosingPage}
            className="px-5 py-2.5 rounded-xl bg-[#E2B753] text-[#0B1D3A] font-bold text-sm hover:bg-[#eab845] whitespace-nowrap shrink-0"
          >
            Lihat Halaman Penghargaan
          </button>
        </div>
      )}

      {/* Three Dars Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0B1D3A] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#0D6E6E]" />
            <span>Pilih Materi Pembelajaran (3 Dars Level High)</span>
          </h3>
          {!allDone && (
            <button
              type="button"
              onClick={onOpenClosingPage}
              className="text-xs font-semibold text-[#0D6E6E] hover:underline inline-flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5" />
              Pratinjau Penghargaan Akhir
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRICULUM.map((dars, idx) => {
            const prog = darsProgress.find((p) => p.darsId === dars.id)!;
            const illType =
              dars.id === "dars-1"
                ? "two-discussing"
                : dars.id === "dars-2"
                  ? "school-bag"
                  : "daily-timeline";

            return (
              <motion.article
                key={dars.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#D9CEB8] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Scene Illustration Header */}
                  <div className="p-4 pb-0">
                    <SceneIllustration type={illType} className="w-full h-44 object-contain rounded-xl" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    {/* Clean Unboxed Metadata */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-[#0D6E6E]">
                        Dars {dars.number} · {dars.titleIndonesian}
                      </span>
                      <span className="font-medium flex items-center gap-1">
                        {prog.isCompleted ? (
                          <span className="text-[#0F8B6D] font-semibold inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Selesai
                          </span>
                        ) : prog.percentage > 0 ? (
                          <span className="text-amber-700 font-semibold">Sedang Berjalan</span>
                        ) : (
                          <span>Belum Dimulai</span>
                        )}
                      </span>
                    </div>

                    <h4 className="font-ar-amiri text-3xl font-bold text-[#0B1D3A]" dir="rtl">
                      {dars.titleArabic}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">{dars.description}</p>

                    {/* 4 Maharah Mini Progress */}
                    <div className="grid grid-cols-4 gap-1.5 pt-1 text-[11px] text-center">
                      {[
                        { label: "Istima'", pct: prog.maharah.istima },
                        { label: "Kalam", pct: prog.maharah.kalam },
                        { label: "Qira'ah", pct: prog.maharah.qiraah },
                        { label: "Kitabah", pct: prog.maharah.kitabah },
                      ].map((m) => (
                        <div
                          key={m.label}
                          className="bg-[#FAF7F0] rounded-lg py-1.5 px-1 border border-[#D9CEB8]/70"
                        >
                          <div className="text-slate-500 truncate">{m.label}</div>
                          <div className="font-mono font-bold tabular-nums text-[#0B1D3A]">
                            {m.pct}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar + Start Button */}
                <div className="px-5 pb-5 pt-2 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-600">
                      <span>
                        Aktivitas: {prog.completedCount}/{prog.totalCount}
                      </span>
                      <span className="font-mono tabular-nums font-bold text-[#0D6E6E]">
                        {prog.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#F2ECE0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0F8B6D] rounded-full transition-all duration-500"
                        style={{ width: `${prog.percentage}%` }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectDars(dars.id)}
                    className="w-full py-3 px-4 rounded-xl bg-[#0B1D3A] hover:bg-[#132f5c] text-[#FAF7F0] font-semibold flex items-center justify-center gap-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B753]"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#E2B753]" />
                    <span className="font-ar-naskh text-lg font-bold leading-[2]" dir="rtl">
                      اِبْدَأِ الدَّرْسَ
                    </span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

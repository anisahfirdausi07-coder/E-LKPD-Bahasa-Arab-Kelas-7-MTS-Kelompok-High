import React, { useState } from "react";
import { Award, CheckCircle2, Coins, Lock, RotateCcw, TrendingUp } from "lucide-react";
import { BADGES, CURRICULUM } from "../data/curriculum";
import { DarsId } from "../types";

interface CoinsProgressPageProps {
  totalCoins: number;
  accuracy: number;
  totalCompleted: number;
  totalItems: number;
  overallPercentage: number;
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
  onOpenDars: (id: DarsId) => void;
  onResetAll: () => void;
}

export const CoinsProgressPage: React.FC<CoinsProgressPageProps> = ({
  totalCoins,
  accuracy,
  totalCompleted,
  totalItems,
  overallPercentage,
  completedDarsCount,
  darsProgress,
  onOpenDars,
  onResetAll,
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  const badgeStats = {
    totalCoins,
    completedCount: totalCompleted,
    accuracy,
    completedDarsCount,
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#08152B] via-[#0B1D3A] to-[#0D6E6E] text-[#FAF7F0] rounded-2xl p-6 sm:p-8 border border-[#2C9B97]/35 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-semibold text-[#E2B753]">
            Rekap Capaian & Gamifikasi Belajar
          </span>
          <h2 className="font-ar-amiri text-3xl sm:text-4xl font-bold text-white mt-1" dir="rtl">
            مَجْمُوعُ النُّقُودِ وَالتَّقَدُّمُ
          </h2>
          <p className="text-sm text-[#FAF7F0]/80 mt-1">
            Setiap jawaban benar bernilai +10 koin, penyelesaian 1 maharah memberi bonus +10 koin, dan menyelesaikan 1 dars memberi bonus +30 koin.
          </p>
        </div>

        <div className="bg-white/10 border border-[#E2B753]/50 rounded-2xl px-6 py-4 flex items-center gap-4 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-[#E2B753] text-[#0B1D3A] flex items-center justify-center">
            <Coins className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs text-[#FAF7F0]/75">Total Koin Terkumpul</div>
            <div className="text-3xl font-mono font-bold tabular-nums text-[#E2B753]">
              {totalCoins}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#D9CEB8]">
          <div className="text-xs font-medium text-slate-500">Total Koin</div>
          <div className="mt-1 text-3xl font-mono font-bold tabular-nums text-[#0B1D3A]">
            {totalCoins}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#D9CEB8]">
          <div className="text-xs font-medium text-slate-500">Persentase Jawaban Benar</div>
          <div className="mt-1 text-3xl font-mono font-bold tabular-nums text-[#0F8B6D]">
            {accuracy}%
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#D9CEB8]">
          <div className="text-xs font-medium text-slate-500">Latihan Selesai</div>
          <div className="mt-1 text-3xl font-mono font-bold tabular-nums text-[#0D6E6E]">
            {totalCompleted} / {totalItems}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#D9CEB8]">
          <div className="text-xs font-medium text-slate-500">Progres Total</div>
          <div className="mt-1 text-3xl font-mono font-bold tabular-nums text-[#0B1D3A]">
            {overallPercentage}%
          </div>
        </div>
      </div>

      {/* Progress per Dars & per Maharah */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[#0B1D3A] flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#0D6E6E]" />
          <span>Progres Setiap Dars & Maharah</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CURRICULUM.map((dars) => {
            const p = darsProgress.find((dp) => dp.darsId === dars.id)!;
            return (
              <div
                key={dars.id}
                className="bg-white rounded-2xl p-5 border border-[#D9CEB8] space-y-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-[#0D6E6E]">
                      Dars {dars.number} · {dars.titleIndonesian}
                    </span>
                    <h4 className="font-ar-amiri text-2xl font-bold text-[#0B1D3A]" dir="rtl">
                      {dars.titleArabic}
                    </h4>
                  </div>
                  <span className="font-mono text-lg font-bold tabular-nums text-[#0F8B6D]">
                    {p.percentage}%
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  {[
                    { name: "Istima' (الاسْتِمَاعُ)", val: p.maharah.istima },
                    { name: "Kalam (الْكَلَامُ)", val: p.maharah.kalam },
                    { name: "Qira'ah (الْقِرَاءَةُ)", val: p.maharah.qiraah },
                    { name: "Kitabah (الْكِتَابَةُ)", val: p.maharah.kitabah },
                  ].map((m) => (
                    <div key={m.name} className="space-y-1">
                      <div className="flex justify-between text-slate-700">
                        <span>{m.name}</span>
                        <span className="font-mono tabular-nums font-semibold">{m.val}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F2ECE0] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0D6E6E] rounded-full transition-all"
                          style={{ width: `${m.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenDars(dars.id)}
                  className="w-full py-2.5 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE0] border border-[#D9CEB8] text-xs font-bold text-[#0B1D3A] transition-colors"
                >
                  Buka Dars {dars.number}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reward Badges */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[#0B1D3A] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#E2B753]" />
          <span>Lencana Penghargaan (Badges)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BADGES.map((badge) => {
            const unlocked = badge.checkUnlocked(badgeStats);
            return (
              <div
                key={badge.id}
                className={`rounded-2xl p-5 border text-center space-y-2.5 transition-all ${
                  unlocked
                    ? "bg-[#0B1D3A] text-[#FAF7F0] border-[#E2B753]"
                    : "bg-white text-slate-500 border-[#D9CEB8] opacity-75"
                }`}
              >
                <div
                  className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${
                    unlocked ? "bg-[#E2B753] text-[#0B1D3A]" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {unlocked ? <CheckCircle2 className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                </div>
                <p
                  className={`font-ar-amiri text-xl font-bold ${
                    unlocked ? "text-[#E2B753]" : "text-slate-600"
                  }`}
                  dir="rtl"
                >
                  {badge.titleArabic}
                </p>
                <p className={`text-xs font-bold ${unlocked ? "text-white" : "text-slate-700"}`}>
                  {badge.titleIndonesian}
                </p>
                <p className="text-[11px] leading-relaxed opacity-85">{badge.description}</p>
                <div className="text-[11px] font-semibold pt-1 border-t border-current/15">
                  {unlocked ? "Terbuka" : badge.requirementLabel}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reset Progress Control (Safe Inline Confirmation) */}
      <div className="pt-4 border-t border-[#D9CEB8] flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          Seluruh progres belajar dan koin tersimpan otomatis di browser perangkat ini.
        </p>

        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-red-300 text-red-700 hover:bg-red-50 text-xs font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Atur Ulang Semua Progres
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-2 rounded-xl">
            <span className="text-xs font-medium text-red-900">Yakin hapus koin & progres?</span>
            <button
              type="button"
              onClick={() => {
                onResetAll();
                setConfirmReset(false);
              }}
              className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700"
            >
              Ya, Reset
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700"
            >
              Batal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

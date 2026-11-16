import React from "react";
import { motion } from "motion/react";
import { Coins, RotateCcw, Star } from "lucide-react";
import { TrophyCelebrationIllustration, TwinklingStar } from "./Illustrations";
import { AudioPlayer } from "./AudioPlayer";

interface ClosingCelebrationPageProps {
  totalCoins: number;
  overallPercentage: number;
  completedDarsCount: number;
  onRestartLearning: () => void;
  onBackDashboard: () => void;
}

export const ClosingCelebrationPage: React.FC<ClosingCelebrationPageProps> = ({
  totalCoins,
  overallPercentage,
  completedDarsCount,
  onRestartLearning,
  onBackDashboard,
}) => {
  const confettiDots = Array.from({ length: 24 }, (_, idx) => ({
    id: idx,
    left: `${4 + ((idx * 13) % 92)}%`,
    color: idx % 3 === 0 ? "#E2B753" : idx % 3 === 1 ? "#2C9B97" : "#0F8B6D",
    delay: (idx % 8) * 0.15,
    duration: 2.8 + (idx % 4) * 0.4,
  }));

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-12rem)] bg-gradient-to-br from-[#08152B] via-[#0B1D3A] to-[#0D6E6E] text-[#FAF7F0] py-14 px-4 sm:px-6 flex items-center justify-center">
      {/* Confetti Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {confettiDots.map((c) => (
          <motion.div
            key={c.id}
            className="absolute -top-6 w-3 h-3 rounded-sm"
            style={{ left: c.left, backgroundColor: c.color }}
            animate={{ y: ["0vh", "95vh"], rotate: [0, 360], opacity: [1, 0.9, 0] }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <TwinklingStar className="absolute top-12 left-12 text-[#E2B753]" size={28} delay={0} />
      <TwinklingStar className="absolute bottom-14 right-12 text-[#E2B753]" size={26} delay={1.2} />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-3xl w-full bg-[#0B1D3A]/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border-2 border-[#E2B753] text-center space-y-6 shadow-2xl"
      >
        <TrophyCelebrationIllustration />

        <div className="space-y-3" dir="rtl">
          <h2 className="font-ar-ruqaa text-5xl sm:text-6xl font-bold text-[#E2B753]">
            مُبَارَكٌ!
          </h2>
          <p className="font-ar-amiri text-2xl sm:text-3xl font-bold text-white">
            لَقَدْ أَكْمَلْتَ جَمِيعَ الدُّرُوسِ!
          </p>
          <p className="font-ar-cairo text-xl sm:text-2xl font-bold text-[#2C9B97] brightness-125">
            أَنْتَ بَطَلٌ فِي تَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ!
          </p>
        </div>

        <div className="flex justify-center">
          <AudioPlayer
            textArabic="مُبَارَكٌ! لَقَدْ أَكْمَلْتَ جَمِيعَ الدُّرُوسِ! أَنْتَ بَطَلٌ فِي تَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ!"
            compact
          />
        </div>

        <p className="text-sm text-[#FAF7F0]/80 max-w-xl mx-auto">
          {completedDarsCount === 3
            ? "Selamat! Kamu telah menuntaskan seluruh 3 Dars Level High dengan gemilang. Teruslah berlatih berbicara dan menulis bahasa Arab dalam keseharianmu."
            : `Kamu telah menyelesaikan ${completedDarsCount} dari 3 Dars (${overallPercentage}%). Selesaikan seluruh latihan di tiap dars untuk membuka capaian 100%!`}
        </p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-white/10 rounded-2xl p-4 border border-[#E2B753]/40">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#E2B753]">
              <Coins className="w-4 h-4" />
              <span>Total Koin</span>
            </div>
            <div className="mt-1 text-3xl font-mono font-bold tabular-nums text-white">
              {totalCoins}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 border border-[#2C9B97]/50">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#2C9B97] brightness-125">
              <Star className="w-4 h-4" />
              <span>Penyelesaian</span>
            </div>
            <div className="mt-1 text-3xl font-mono font-bold tabular-nums text-[#E2B753]">
              {overallPercentage}%
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onRestartLearning}
            className="px-7 py-3.5 rounded-2xl bg-[#E2B753] hover:bg-[#eab845] text-[#0B1D3A] font-bold inline-flex items-center gap-3 transition-colors shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="font-ar-naskh text-xl font-bold leading-[2]" dir="rtl">
              إِعَادَةُ التَّعَلُّمِ
            </span>
          </button>

          <button
            type="button"
            onClick={onBackDashboard}
            className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#FAF7F0] text-sm font-semibold transition-colors"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </motion.div>
    </section>
  );
};

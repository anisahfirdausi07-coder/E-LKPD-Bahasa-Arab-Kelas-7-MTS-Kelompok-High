import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, Coins, Sparkles, Star, X } from "lucide-react";
import { RewardEvent } from "../hooks/useProgress";

interface CoinRainModalProps {
  reward: RewardEvent | null;
  onClose: () => void;
}

export const CoinRainModal: React.FC<CoinRainModalProps> = ({ reward, onClose }) => {
  useEffect(() => {
    if (!reward) return;
    const timer = setTimeout(onClose, reward.isDarsBonus ? 4800 : 2800);
    return () => clearTimeout(timer);
  }, [reward, onClose]);

  const fallingCoins = Array.from({ length: 16 }, (_, idx) => ({
    id: idx,
    left: `${6 + ((idx * 17) % 88)}%`,
    delay: (idx % 6) * 0.08,
    duration: 1.2 + (idx % 4) * 0.22,
  }));

  return (
    <AnimatePresence>
      {reward && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Falling Gold Coins Layer */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {fallingCoins.map((c) => (
              <motion.div
                key={c.id}
                className="absolute -top-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#E2B753] border-2 border-[#0B1D3A] text-[#0B1D3A] shadow-md font-bold text-xs"
                style={{ left: c.left }}
                initial={{ y: -40, opacity: 1, rotate: 0 }}
                animate={{ y: "92vh", opacity: [1, 1, 0], rotate: 360 }}
                transition={{ duration: c.duration, delay: c.delay, ease: "easeIn" }}
              >
                ١٠
              </motion.div>
            ))}
          </div>

          {/* Center Reward Toast Card */}
          <motion.div
            className="pointer-events-auto relative max-w-md w-full bg-[#0B1D3A] text-[#FAF7F0] rounded-2xl p-6 border-2 border-[#E2B753] shadow-2xl text-center"
            initial={{ scale: 0.85, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: -12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-lg text-[#FAF7F0]/70 hover:text-white hover:bg-white/10"
              aria-label="Tutup notifikasi koin"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mx-auto w-14 h-14 rounded-full bg-[#E2B753]/20 border border-[#E2B753] flex items-center justify-center mb-3">
              {reward.isDarsBonus ? (
                <Award className="w-8 h-8 text-[#E2B753]" />
              ) : (
                <Coins className="w-8 h-8 text-[#E2B753]" />
              )}
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[#E2B753] mb-1">
              <Star className="w-4 h-4 fill-[#E2B753]" />
              <Sparkles className="w-4 h-4" />
              <Star className="w-4 h-4 fill-[#E2B753]" />
            </div>

            <h3 className="text-2xl font-ar-amiri font-bold text-[#E2B753]" dir="rtl">
              {reward.titleArabic}
            </h3>
            <p className="mt-1.5 text-sm text-[#FAF7F0]/90">{reward.subtitleIndonesian}</p>

            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#0F8B6D] text-white font-mono font-semibold text-base tabular-nums">
              <Coins className="w-4 h-4 text-[#E2B753]" />
              +{reward.coinsEarned} Koin
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

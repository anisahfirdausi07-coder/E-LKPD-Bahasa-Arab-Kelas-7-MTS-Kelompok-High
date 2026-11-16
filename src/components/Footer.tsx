import React from "react";
import {
  AnimatedOpenBookIcon,
  AnimatedPencilIcon,
  IslamicGeometricBg,
  TwinklingStar,
} from "./Illustrations";

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#08152B] via-[#0B1D3A] to-[#0D6E6E] text-[#FAF7F0] border-t border-[#E2B753]/30">
      <IslamicGeometricBg className="absolute inset-0 w-full h-full text-[#E2B753] opacity-20" />
      <TwinklingStar className="absolute top-6 left-8 text-[#E2B753]" size={18} delay={0.2} />
      <TwinklingStar className="absolute bottom-6 right-10 text-[#E2B753]" size={18} delay={1.4} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2.5 rounded-2xl border border-[#E2B753]/40">
            <AnimatedOpenBookIcon className="w-10 h-10" />
            <AnimatedPencilIcon className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <p className="font-ar-amiri text-2xl sm:text-3xl font-bold text-[#E2B753]" dir="rtl">
              الْكِتَابُ الإِضَافِيُّ الإِلِكْتُرُونِيُّ
            </p>
            <p className="text-xs text-[#FAF7F0]/75">
              Arabic Explorer – Advanced Learning Level (High) · Kelas VII MTs
            </p>
          </div>
        </div>

        <div className="text-center md:text-right space-y-1.5">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E2B753]">AUTHOR:</p>
          <p className="text-sm font-semibold text-white">Prof. Dr. Muflihah, S. Ag., MA</p>
          <p className="text-sm font-semibold text-white">Dr. H. Taufik, S. Ag., M. Pd. I.</p>
          <p className="text-sm font-semibold text-white">Anisah Firdausi Nuzula</p>
        </div>
      </div>
    </footer>
  );
};

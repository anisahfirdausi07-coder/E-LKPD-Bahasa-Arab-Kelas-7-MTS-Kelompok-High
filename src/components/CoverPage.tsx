import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import {
  AnimatedCloud,
  AnimatedOpenBookIcon,
  AnimatedPencilIcon,
  CoverCartoonIllustration,
  IslamicGeometricBg,
  TwinklingStar,
} from "./Illustrations";

interface CoverPageProps {
  onStartLearning: () => void;
  totalCoins: number;
  overallPercentage: number;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  onStartLearning,
  totalCoins,
  overallPercentage,
}) => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-[#08152B] via-[#0B1D3A] to-[#0D6E6E] text-[#FAF7F0] flex flex-col justify-center">
      {/* Islamic Geometric Ornament Backdrop */}
      <IslamicGeometricBg className="absolute inset-0 w-full h-full text-[#E2B753] opacity-35" />

      {/* Drifting Clouds */}
      <AnimatedCloud className="absolute top-10 left-4 w-44 text-white/10" delay={0} />
      <AnimatedCloud className="absolute top-24 right-8 w-52 text-[#2C9B97]/20" delay={3} />
      <AnimatedCloud className="hidden lg:block absolute bottom-12 left-1/3 w-48 text-white/10" delay={6} />

      {/* Twinkling Stars */}
      <TwinklingStar className="absolute top-16 left-[18%] text-[#E2B753]" size={22} delay={0.3} />
      <TwinklingStar className="hidden md:block absolute top-14 right-[22%] text-[#FAF7F0]/75" size={16} delay={1.1} />
      <TwinklingStar className="absolute bottom-20 right-[12%] text-[#E2B753]" size={24} delay={1.9} />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Arabic Title Hierarchy & CTA */}
        <motion.div
          className="lg:col-span-6 space-y-6 text-center lg:text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Quiet Editorial Kicker + Animated Book/Pencil Icons */}
          <div className="inline-flex items-center justify-center lg:justify-end gap-3 text-xs sm:text-sm font-medium tracking-wide text-[#E2B753]">
            <AnimatedOpenBookIcon className="w-8 h-8" />
            <span>Arabic Explorer · Advanced Learning Level (High)</span>
            <AnimatedPencilIcon className="w-7 h-7" />
          </div>

          {/* 4 Distinct Arabic Font Lines with Generous Harakat Breathing Room */}
          <div className="space-y-3.5" dir="rtl">
            {/* 1. Decorative, Large, Bold, Prominent (Aref Ruqaa) */}
            <h1 className="font-ar-ruqaa text-5xl sm:text-6xl lg:text-[4.25rem] font-bold text-[#E2B753] leading-[1.65] py-1 drop-shadow-sm">
              هَيَّا نَتَعَلَّمُ!
            </h1>

            {/* 2. Elegant & Professional (Amiri) */}
            <p className="font-ar-amiri text-2xl sm:text-3xl font-bold text-[#FAF7F0] leading-[2] py-0.5">
              الْكِتَابُ الإِضَافِيُّ الإِلِكْتُرُونِيُّ
            </p>

            {/* 3. Modern & Clean (Noto Sans Arabic — crisp harakat without overlap) */}
            <p className="font-ar-cairo text-xl sm:text-2xl font-semibold text-[#7EE0D6] leading-[2.2] py-1">
              لِتَعْلِيمِ اللُّغَةِ الْعَرَبِيَّةِ
            </p>

            {/* 4. Simple, Clear, Easy to Read (Noto Naskh Arabic) */}
            <p className="font-ar-naskh text-lg sm:text-xl font-medium text-[#FAF7F0]/95 leading-[2.1] py-0.5">
              لِلصَّفِّ السَّابِعِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#FAF7F0]/80 max-w-xl mx-auto lg:mr-0 leading-relaxed">
            Lembar Kerja Peserta Didik Elektronik (E-LKPD) interaktif tingkat lanjutan untuk siswa kelas VII Madrasah Tsanawiyah. Asah keterampilan menyimak, berbicara, membaca, dan menulis bahasa Arab secara aktif.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
            {overallPercentage > 0 && (
              <div className="text-xs text-[#FAF7F0]/80 font-mono tabular-nums">
                Progres tersimpan: {overallPercentage}% · {totalCoins} koin
              </div>
            )}

            <button
              type="button"
              onClick={onStartLearning}
              className="group inline-flex items-center justify-center gap-4 px-8 py-4 rounded-2xl bg-[#E2B753] hover:bg-[#eab845] text-[#0B1D3A] shadow-[0_10px_28px_rgba(226,183,83,0.32)] transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-white"
            >
              <BookOpenCheck className="w-5 h-5 text-[#0B1D3A] shrink-0" />
              <span
                className="font-ar-naskh text-xl sm:text-2xl font-bold leading-[2.1] py-0.5 whitespace-nowrap"
                dir="rtl"
              >
                اِبْدَأِ التَّعَلُّمَ
              </span>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Cartoon Animated Illustration of 2 MTs Students */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <CoverCartoonIllustration />
        </motion.div>
      </div>
    </section>
  );
};

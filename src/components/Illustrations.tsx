import React from "react";
import { motion } from "motion/react";

export const IslamicGeometricBg: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <pattern id="islamicStarPattern" width="80" height="80" patternUnits="userSpaceOnUse">
        <path
          d="M40 4 L49 31 L76 40 L49 49 L40 76 L31 49 L4 40 L31 31 Z"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeOpacity="0.16"
          fill="none"
        />
        <rect
          x="18"
          y="18"
          width="44"
          height="44"
          transform="rotate(45 40 40)"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          fill="none"
        />
        <circle cx="40" cy="40" r="6" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.14" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#islamicStarPattern)" />
  </svg>
);

export const AnimatedCloud: React.FC<{ className?: string; delay?: number }> = ({
  className = "",
  delay = 0,
}) => (
  <motion.svg
    viewBox="0 0 180 70"
    fill="none"
    className={`pointer-events-none ${className}`}
    animate={{ x: [-14, 14, -14], y: [0, -4, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay }}
    aria-hidden="true"
  >
    <path
      d="M36 56 H142 C156 56 166 47 166 35 C166 24 157 16 146 16 C143 8 134 3 124 3 C112 3 102 10 99 20 C95 17 89 15 83 15 C69 15 58 25 57 38 C54 37 51 36 47 36 C35 36 26 44 26 53 C26 55 30 56 36 56 Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const TwinklingStar: React.FC<{ className?: string; delay?: number; size?: number }> = ({
  className = "",
  delay = 0,
  size = 24,
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`pointer-events-none ${className}`}
    animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.18, 0.85], rotate: [0, 14, 0] }}
    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
    aria-hidden="true"
  >
    <path d="M12 1.5 L14.4 9.6 L22.5 12 L14.4 14.4 L12 22.5 L9.6 14.4 L1.5 12 L9.6 9.6 Z" />
  </motion.svg>
);

export const AnimatedOpenBookIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <motion.svg
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    animate={{ y: [0, -3, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    aria-hidden="true"
  >
    <path d="M8 16 C18 13 27 15 32 20 C37 15 46 13 56 16 V48 C46 45 37 47 32 51 C27 47 18 45 8 48 Z" fill="#FAF7F0" stroke="#E2B753" strokeWidth="2.2" />
    <path d="M32 20 V51" stroke="#0D6E6E" strokeWidth="2" />
    <motion.path
      d="M14 24 H26 M14 31 H25 M14 38 H23"
      stroke="#0B1D3A"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    <motion.path
      d="M38 24 H50 M39 31 H50 M41 38 H50"
      stroke="#0D6E6E"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{ opacity: [1, 0.6, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
  </motion.svg>
);

export const AnimatedPencilIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <motion.svg
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    animate={{ rotate: [-6, 4, -6], x: [0, -4, 0], y: [0, 3, 0] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    aria-hidden="true"
  >
    <path d="M44 10 L54 20 L24 50 L11 53 L14 40 Z" fill="#E2B753" stroke="#0B1D3A" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M40 14 L50 24" stroke="#0B1D3A" strokeWidth="2.2" />
    <path d="M14 40 L24 50" stroke="#0B1D3A" strokeWidth="2" />
    <path d="M11 53 L17 51.5 L12.5 47 Z" fill="#0B1D3A" />
    <path d="M47 7 L57 17 L54 20 L44 10 Z" fill="#2C9B97" stroke="#0B1D3A" strokeWidth="2" />
  </motion.svg>
);

// ---------------------------------------------------------------------------
// COVER HERO CARTOON ILLUSTRATION (2 MTs Students: Boy reading + Girl writing)
// ---------------------------------------------------------------------------
export const CoverCartoonIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Floating twinkling stars */}
      <TwinklingStar className="absolute -top-4 left-6 text-[#E2B753]" size={26} delay={0} />
      <TwinklingStar className="absolute top-12 -right-2 text-[#2C9B97]" size={20} delay={0.8} />
      <TwinklingStar className="absolute bottom-14 -left-3 text-[#E2B753]" size={18} delay={1.4} />

      {/* Animated floating sheet */}
      <motion.div
        className="absolute -top-2 right-8 z-10 hidden sm:block"
        animate={{ y: [0, -8, 0], rotate: [4, -3, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-[#FAF7F0] text-[#0B1D3A] px-3 py-2 rounded-lg shadow-lg border border-[#E2B753]/60 text-xs font-ar-amiri" dir="rtl">
          اِقْرَأْ وَاكْتُبْ
        </div>
      </motion.div>

      <svg
        viewBox="0 0 560 410"
        fill="none"
        className="w-full h-auto drop-shadow-[0_18px_36px_rgba(8,21,43,0.45)]"
        role="img"
        aria-label="Ilustrasi kartun dua siswa MTs membaca buku اللغة العربية dan menulis kosakata Arab"
      >
        {/* Warm glow backdrop */}
        <ellipse cx="280" cy="235" rx="235" ry="145" fill="url(#coverGlow)" />
        <defs>
          <radialGradient id="coverGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2C9B97" stopOpacity="0.38" />
            <stop offset="70%" stopColor="#0D6E6E" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#0B1D3A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Study Desk Surface */}
        <rect x="44" y="318" width="472" height="22" rx="11" fill="#E2B753" />
        <rect x="44" y="334" width="472" height="12" rx="6" fill="#C49635" />

        {/* Ruler prop on desk */}
        <g transform="translate(68, 294) rotate(-8)">
          <rect x="0" y="0" width="96" height="20" rx="4" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="2.2" />
          <path d="M12 0 V8 M24 0 V5 M36 0 V8 M48 0 V5 M60 0 V8 M72 0 V5 M84 0 V8" stroke="#0D6E6E" strokeWidth="2" />
        </g>

        {/* Stationery Cup on Right */}
        <g transform="translate(454, 260)">
          <rect x="0" y="18" width="38" height="40" rx="6" fill="#2C9B97" stroke="#0B1D3A" strokeWidth="2.2" />
          <rect x="8" y="-4" width="7" height="26" rx="2" fill="#E2B753" stroke="#0B1D3A" strokeWidth="1.8" transform="rotate(-10 8 18)" />
          <rect x="21" y="-8" width="7" height="30" rx="2" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="1.8" transform="rotate(8 21 18)" />
        </g>

        {/* MALE MTS STUDENT (Left - reading Arabic book) */}
        <g transform="translate(95, 72)">
          {/* Body / MTs Uniform */}
          <path d="M36 168 C36 138 134 138 134 168 L142 246 H28 Z" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="3" />
          {/* Tie / Emerald Vest Accent */}
          <path d="M76 150 L94 150 L90 202 L85 210 L80 202 Z" fill="#0F8B6D" stroke="#0B1D3A" strokeWidth="2" />
          {/* Neck */}
          <rect x="74" y="128" width="22" height="22" rx="8" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="85" cy="94" r="42" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="3" />
          {/* Ears */}
          <circle cx="42" cy="96" r="8" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="2.5" />
          <circle cx="128" cy="96" r="8" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="2.5" />
          {/* Hair & Black Peci */}
          <path d="M47 72 C52 40 118 40 123 72 Z" fill="#0B1D3A" />
          <rect x="48" y="42" width="74" height="28" rx="8" fill="#0B1D3A" stroke="#E2B753" strokeWidth="2" />
          {/* Eyes (lively) */}
          <circle cx="70" cy="92" r="4.5" fill="#0B1D3A" />
          <circle cx="100" cy="92" r="4.5" fill="#0B1D3A" />
          <circle cx="71.5" cy="90.5" r="1.5" fill="#FFFFFF" />
          <circle cx="101.5" cy="90.5" r="1.5" fill="#FFFFFF" />
          {/* Cheeks & Cheerful Smile */}
          <ellipse cx="59" cy="103" rx="6" ry="3.5" fill="#F29B7E" opacity="0.6" />
          <ellipse cx="111" cy="103" rx="6" ry="3.5" fill="#F29B7E" opacity="0.6" />
          <path d="M74 108 Q85 119 96 108" stroke="#0B1D3A" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          {/* Arms holding book */}
          <path d="M38 175 Q18 212 46 226" stroke="#0B1D3A" strokeWidth="3" fill="#FAF7F0" strokeLinecap="round" />
          <path d="M132 175 Q150 212 122 226" stroke="#0B1D3A" strokeWidth="3" fill="#FAF7F0" strokeLinecap="round" />
        </g>

        {/* CENTRAL ANIMATED OPEN BOOK ("اللغة العربية") */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Book Cover */}
          <path d="M130 250 L215 240 L215 322 L130 330 Z" fill="#0D6E6E" stroke="#0B1D3A" strokeWidth="2.8" />
          <path d="M300 250 L215 240 L215 322 L300 330 Z" fill="#0F8B6D" stroke="#0B1D3A" strokeWidth="2.8" />
          {/* Book Pages */}
          <path d="M138 244 C168 232 195 234 215 245 L215 316 C195 306 168 304 138 314 Z" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="2.4" />
          <path d="M292 244 C262 232 235 234 215 245 L215 316 C235 306 262 304 292 314 Z" fill="#F2ECE0" stroke="#0B1D3A" strokeWidth="2.4" />
          {/* Arabic Title on Open Book */}
          <text
            x="253"
            y="273"
            textAnchor="middle"
            fill="#0B1D3A"
            fontSize="13"
            fontWeight="700"
            fontFamily="Amiri, serif"
          >
            اللغة
          </text>
          <text
            x="253"
            y="293"
            textAnchor="middle"
            fill="#0D6E6E"
            fontSize="13"
            fontWeight="700"
            fontFamily="Amiri, serif"
          >
            العربية
          </text>
          {/* Lines on left page */}
          <path d="M150 262 H200 M150 274 H198 M150 286 H194 M150 298 H188" stroke="#0D6E6E" strokeWidth="2.2" strokeLinecap="round" opacity="0.65" />
        </motion.g>

        {/* FEMALE MTS STUDENT (Right - writing Arabic vocabulary) */}
        <g transform="translate(295, 76)">
          {/* Hijab back & shoulders */}
          <path d="M40 100 C30 142 22 195 24 242 H146 C148 195 140 142 130 100 Z" fill="#0D6E6E" stroke="#0B1D3A" strokeWidth="3" />
          {/* Hijab head drape */}
          <circle cx="85" cy="92" r="47" fill="#2C9B97" stroke="#0B1D3A" strokeWidth="3" />
          {/* Inner Hijab Trim */}
          <circle cx="85" cy="95" r="36" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="2" />
          {/* Face */}
          <circle cx="85" cy="96" r="33" fill="#F6CCA8" stroke="#0B1D3A" strokeWidth="2.4" />
          {/* Eyes */}
          <circle cx="72" cy="94" r="4.2" fill="#0B1D3A" />
          <circle cx="98" cy="94" r="4.2" fill="#0B1D3A" />
          <circle cx="73.3" cy="92.5" r="1.4" fill="#FFFFFF" />
          <circle cx="99.3" cy="92.5" r="1.4" fill="#FFFFFF" />
          {/* Cheeks & Smile */}
          <ellipse cx="64" cy="104" rx="5.5" ry="3" fill="#F29B7E" opacity="0.55" />
          <ellipse cx="106" cy="104" rx="5.5" ry="3" fill="#F29B7E" opacity="0.55" />
          <path d="M75 109 Q85 118 95 109" stroke="#0B1D3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Arms writing */}
          <path d="M42 178 Q24 210 56 226" stroke="#0B1D3A" strokeWidth="3" fill="#0D6E6E" strokeLinecap="round" />
          <path d="M128 178 Q144 208 112 224" stroke="#0B1D3A" strokeWidth="3" fill="#0D6E6E" strokeLinecap="round" />
        </g>

        {/* Notebook on Right Side of Desk + Moving Pencil */}
        <g transform="translate(320, 286)">
          <rect x="0" y="0" width="104" height="34" rx="5" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="2.4" />
          <path d="M14 11 H90 M14 21 H75" stroke="#0F8B6D" strokeWidth="2" strokeLinecap="round" />
          {/* Animated Writing Pencil */}
          <motion.g
            animate={{ x: [0, -14, -4, -18, 0], y: [0, 3, -1, 3, 0], rotate: [-4, 4, -2, 5, -4] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M62 -32 L72 -26 L54 6 L44 10 L46 -1 Z" fill="#E2B753" stroke="#0B1D3A" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M44 10 L49 8 L45 4 Z" fill="#0B1D3A" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
};

// ---------------------------------------------------------------------------
// SCENE ILLUSTRATIONS FOR DARS 1, 2, 3 & AI SPEAKING
// ---------------------------------------------------------------------------
export const SceneIllustration: React.FC<{
  type:
    | "intro-class"
    | "school-intro"
    | "two-discussing"
    | "students-meeting"
    | "school-bag"
    | "classroom"
    | "school-supplies"
    | "daily-timeline"
    | "daily-routine"
    | "umar-activities"
    | "ai-speaking";
  className?: string;
}> = ({ type, className = "w-full max-w-md mx-auto" }) => {
  if (type === "ai-speaking") {
    return (
      <svg viewBox="0 0 320 180" fill="none" className={className} role="img" aria-label="Siswa berbicara dengan Partner AI Bahasa Arab">
        <rect width="320" height="180" rx="18" fill="#0B1D3A" />
        {/* Student on right */}
        <circle cx="235" cy="78" r="28" fill="#F4C7A1" stroke="#FAF7F0" strokeWidth="2.5" />
        <rect x="208" y="42" width="54" height="20" rx="6" fill="#0D6E6E" stroke="#E2B753" strokeWidth="1.8" />
        <path d="M200 165 C200 128 270 128 270 165 Z" fill="#FAF7F0" />
        <circle cx="224" cy="78" r="3" fill="#0B1D3A" />
        <circle cx="246" cy="78" r="3" fill="#0B1D3A" />
        <path d="M227 90 Q235 97 243 90" stroke="#0B1D3A" strokeWidth="2.2" strokeLinecap="round" />

        {/* Animated Soundwaves in Center */}
        <motion.g
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ transformOrigin: "160px 88px" }}
        >
          <path d="M148 70 Q138 88 148 106" stroke="#E2B753" strokeWidth="3" strokeLinecap="round" />
          <path d="M172 70 Q182 88 172 106" stroke="#2C9B97" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="88" r="6" fill="#E2B753" />
        </motion.g>

        {/* Friendly AI Ustadz Orb on left */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="44" y="48" width="76" height="76" rx="22" fill="#0D6E6E" stroke="#E2B753" strokeWidth="2.5" />
          <circle cx="70" cy="82" r="5" fill="#FAF7F0" />
          <circle cx="94" cy="82" r="5" fill="#FAF7F0" />
          <path d="M72 98 Q82 106 92 98" stroke="#E2B753" strokeWidth="2.8" strokeLinecap="round" />
          <text x="82" y="146" textAnchor="middle" fill="#FAF7F0" fontSize="13" fontFamily="Amiri, serif">
            أُسْتَاذٌ ذَكِيٌّ
          </text>
        </motion.g>
      </svg>
    );
  }

  if (type === "intro-class" || type === "school-intro") {
    return (
      <svg viewBox="0 0 380 220" fill="none" className={className} role="img" aria-label="Siswa memperkenalkan diri di depan kelas">
        <rect width="380" height="220" rx="18" fill="#F2ECE0" stroke="#D9CEB8" strokeWidth="2" />
        {/* Classroom blackboard */}
        <rect x="34" y="20" width="312" height="106" rx="10" fill="#0D6E6E" stroke="#8B5E3C" strokeWidth="5" />
        <text x="190" y="65" textAnchor="middle" fill="#FAF7F0" fontSize="22" fontWeight="700" fontFamily="Amiri, serif">
          اِسْمِي مُحَمَّدٌ — أَنَا طَالِبٌ
        </text>
        <text x="190" y="96" textAnchor="middle" fill="#E2B753" fontSize="14" fontFamily="Tajawal, sans-serif">
          الصَّفُّ السَّابِعُ • سُورَابَايَا
        </text>
        {/* Student standing & waving */}
        <g transform="translate(148, 86)">
          <path d="M18 82 C18 62 66 62 66 82 L72 132 H12 Z" fill="#0B1D3A" />
          <circle cx="42" cy="40" r="24" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="2.5" />
          <rect x="20" y="12" width="44" height="16" rx="5" fill="#0B1D3A" stroke="#E2B753" strokeWidth="1.8" />
          <circle cx="34" cy="40" r="2.8" fill="#0B1D3A" />
          <circle cx="50" cy="40" r="2.8" fill="#0B1D3A" />
          <path d="M35 49 Q42 55 49 49" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" />
          <motion.path
            d="M66 86 Q88 70 86 52"
            stroke="#F4C7A1"
            strokeWidth="8"
            strokeLinecap="round"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "66px 86px" }}
          />
        </g>
      </svg>
    );
  }

  if (type === "two-discussing" || type === "students-meeting") {
    return (
      <svg viewBox="0 0 380 220" fill="none" className={className} role="img" aria-label="Dua siswa berdiskusi dan berkenalan di sekolah">
        <rect width="380" height="220" rx="18" fill="#F2ECE0" stroke="#D9CEB8" strokeWidth="2" />
        {/* School arch */}
        <path d="M40 190 V75 Q190 25 340 75 V190" fill="#FAF7F0" stroke="#0D6E6E" strokeWidth="2" opacity="0.7" />
        {/* Speech bubbles */}
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <rect x="74" y="28" width="96" height="36" rx="12" fill="#0B1D3A" />
          <text x="122" y="51" textAnchor="middle" fill="#FAF7F0" fontSize="14" fontFamily="Amiri, serif">
            السَّلَامُ عَلَيْكُمْ
          </text>
        </motion.g>
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
          <rect x="208" y="28" width="104" height="36" rx="12" fill="#0F8B6D" />
          <text x="260" y="51" textAnchor="middle" fill="#FAF7F0" fontSize="14" fontFamily="Amiri, serif">
            وَعَلَيْكُمُ السَّلَامُ
          </text>
        </motion.g>
        {/* Left student */}
        <g transform="translate(86, 86)">
          <path d="M14 78 C14 58 64 58 64 78 L68 122 H10 Z" fill="#0D6E6E" />
          <circle cx="39" cy="36" r="22" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="2.4" />
          <rect x="19" y="10" width="40" height="14" rx="4" fill="#0B1D3A" />
          <circle cx="32" cy="36" r="2.5" fill="#0B1D3A" />
          <circle cx="46" cy="36" r="2.5" fill="#0B1D3A" />
          <path d="M33 45 Q39 50 45 45" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Right student */}
        <g transform="translate(216, 86)">
          <path d="M14 78 C14 58 64 58 64 78 L68 122 H10 Z" fill="#0B1D3A" />
          <circle cx="39" cy="36" r="22" fill="#F6CCA8" stroke="#0B1D3A" strokeWidth="2.4" />
          <rect x="19" y="10" width="40" height="14" rx="4" fill="#0F8B6D" />
          <circle cx="32" cy="36" r="2.5" fill="#0B1D3A" />
          <circle cx="46" cy="36" r="2.5" fill="#0B1D3A" />
          <path d="M33 45 Q39 50 45 45" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (type === "school-bag" || type === "school-supplies") {
    return (
      <svg viewBox="0 0 380 220" fill="none" className={className} role="img" aria-label="Tas sekolah biru terbuka berisi buku, buku tulis, pena, dan penggaris">
        <rect width="380" height="220" rx="18" fill="#F2ECE0" stroke="#D9CEB8" strokeWidth="2" />
        {/* Open Blue Backpack */}
        <rect x="112" y="66" width="156" height="128" rx="28" fill="#1D4ED8" stroke="#0B1D3A" strokeWidth="3" />
        <rect x="134" y="120" width="112" height="58" rx="14" fill="#2563EB" stroke="#0B1D3A" strokeWidth="2.2" />
        <path d="M162 66 C162 42 218 42 218 66" stroke="#0B1D3A" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Books peeking out */}
        <rect x="130" y="34" width="38" height="52" rx="4" fill="#0F8B6D" stroke="#0B1D3A" strokeWidth="2.2" transform="rotate(-8 130 34)" />
        <rect x="168" y="28" width="40" height="56" rx="4" fill="#E2B753" stroke="#0B1D3A" strokeWidth="2.2" />
        <rect x="208" y="36" width="36" height="50" rx="4" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="2.2" transform="rotate(7 208 36)" />
        {/* Long Ruler & Pens */}
        <rect x="282" y="54" width="22" height="136" rx="4" fill="#E2B753" stroke="#0B1D3A" strokeWidth="2.2" />
        <path d="M282 70 H292 M282 90 H290 M282 110 H292 M282 130 H290 M282 150 H292" stroke="#0B1D3A" strokeWidth="1.8" />
        {/* Pens on left */}
        <rect x="74" y="88" width="12" height="86" rx="4" fill="#DC2626" stroke="#0B1D3A" strokeWidth="2" transform="rotate(-10 74 88)" />
        <rect x="92" y="92" width="12" height="82" rx="4" fill="#0B1D3A" stroke="#FAF7F0" strokeWidth="1.5" transform="rotate(-3 92 92)" />
        {/* Eraser & Sharpener */}
        <rect x="52" y="166" width="34" height="22" rx="4" fill="#FAF7F0" stroke="#0B1D3A" strokeWidth="2" />
        <rect x="52" y="166" width="14" height="22" rx="4" fill="#2C9B97" stroke="#0B1D3A" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "classroom") {
    return (
      <svg viewBox="0 0 380 220" fill="none" className={className} role="img" aria-label="Suasana ruang kelas yang bersih dan rapi">
        <rect width="380" height="220" rx="18" fill="#FAF7F0" stroke="#D9CEB8" strokeWidth="2" />
        {/* Blackboard */}
        <rect x="54" y="22" width="272" height="84" rx="8" fill="#0D6E6E" stroke="#8B5E3C" strokeWidth="5" />
        <text x="190" y="62" textAnchor="middle" fill="#FAF7F0" fontSize="20" fontWeight="700" fontFamily="Amiri, serif">
          نَظَافَةُ الْفَصْلِ مَسْؤُولِيَّتُنَا
        </text>
        <text x="190" y="88" textAnchor="middle" fill="#E2B753" fontSize="13" fontFamily="Tajawal, sans-serif">
          مَكْتَبٌ مُرَتَّبٌ • كُرْسِيٌّ • سَبُّورَةٌ
        </text>
        {/* Neat Desks & Chairs */}
        {[70, 160, 250].map((x) => (
          <g key={x} transform={`translate(${x}, 134)`}>
            <rect x="0" y="14" width="60" height="10" rx="3" fill="#E2B753" stroke="#0B1D3A" strokeWidth="2" />
            <path d="M10 24 V58 M50 24 V58" stroke="#0B1D3A" strokeWidth="3" />
            <rect x="14" y="2" width="26" height="12" rx="2" fill="#0F8B6D" stroke="#0B1D3A" strokeWidth="1.8" />
          </g>
        ))}
      </svg>
    );
  }

  // Daily Timeline / Daily Routine / Umar Activities
  return (
    <svg viewBox="0 0 380 220" fill="none" className={className} role="img" aria-label="Ilustrasi aktivitas harian siswa dari pagi hingga malam">
      <rect width="380" height="220" rx="18" fill="#0B1D3A" />
      {/* Morning / Day / Night triptych sky */}
      <rect x="16" y="16" width="110" height="188" rx="12" fill="#2C9B97" opacity="0.32" />
      <rect x="135" y="16" width="110" height="188" rx="12" fill="#0F8B6D" opacity="0.28" />
      <rect x="254" y="16" width="110" height="188" rx="12" fill="#08152B" stroke="#E2B753" strokeOpacity="0.35" />
      {/* Morning Sun */}
      <circle cx="71" cy="60" r="18" fill="#E2B753" />
      <text x="71" y="122" textAnchor="middle" fill="#FAF7F0" fontSize="16" fontWeight="700" fontFamily="Amiri, serif">
        صَبَاحًا
      </text>
      <text x="71" y="152" textAnchor="middle" fill="#E2B753" fontSize="12" fontFamily="Tajawal, sans-serif">
        ٠٥:٠٠ • الصُّبْحُ
      </text>
      {/* Midday Book & School */}
      <rect x="166" y="42" width="48" height="36" rx="6" fill="#FAF7F0" stroke="#E2B753" strokeWidth="2" />
      <path d="M190 42 V78" stroke="#0D6E6E" strokeWidth="2" />
      <text x="190" y="122" textAnchor="middle" fill="#FAF7F0" fontSize="16" fontWeight="700" fontFamily="Amiri, serif">
        نَهَارًا
      </text>
      <text x="190" y="152" textAnchor="middle" fill="#E2B753" fontSize="12" fontFamily="Tajawal, sans-serif">
        الْمَدْرَسَةُ
      </text>
      {/* Night Crescent & Stars */}
      <path d="M316 44 A16 16 0 1 0 326 70 A12 12 0 1 1 316 44 Z" fill="#E2B753" />
      <circle cx="286" cy="48" r="2.5" fill="#FAF7F0" />
      <circle cx="336" cy="54" r="2" fill="#FAF7F0" />
      <text x="309" y="122" textAnchor="middle" fill="#FAF7F0" fontSize="16" fontWeight="700" fontFamily="Amiri, serif">
        لَيْلًا
      </text>
      <text x="309" y="152" textAnchor="middle" fill="#E2B753" fontSize="12" fontFamily="Tajawal, sans-serif">
        ٠٩:٠٠ • النَّوْمُ
      </text>
    </svg>
  );
};

// ---------------------------------------------------------------------------
// CELEBRATION TROPHY, MEDALS & SMILING STUDENT
// ---------------------------------------------------------------------------
export const TrophyCelebrationIllustration: React.FC = () => (
  <div className="relative flex flex-col items-center justify-center py-2">
    <TwinklingStar className="absolute top-2 left-10 text-[#E2B753]" size={26} delay={0} />
    <TwinklingStar className="absolute top-6 right-10 text-[#2C9B97]" size={22} delay={0.6} />
    <motion.svg
      viewBox="0 0 280 200"
      fill="none"
      className="w-64 h-auto"
      initial={{ scale: 0.88, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="img"
      aria-label="Piala emas, medali, buku terbuka, dan bintang prestasi"
    >
      {/* Open Book Base */}
      <path d="M40 156 C80 144 115 148 140 160 C165 148 200 144 240 156 V182 C200 172 165 176 140 186 C115 176 80 172 40 182 Z" fill="#FAF7F0" stroke="#0D6E6E" strokeWidth="2.5" />
      <path d="M140 160 V186" stroke="#0D6E6E" strokeWidth="2" />

      {/* Golden Trophy */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M100 40 H180 V78 C180 104 162 122 140 122 C118 122 100 104 100 78 Z" fill="#E2B753" stroke="#0B1D3A" strokeWidth="3" />
        <path d="M100 50 C80 50 78 82 100 84" stroke="#E2B753" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M180 50 C200 50 202 82 180 84" stroke="#E2B753" strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="131" y="122" width="18" height="22" fill="#C49635" stroke="#0B1D3A" strokeWidth="2.2" />
        <rect x="112" y="142" width="56" height="14" rx="4" fill="#0B1D3A" stroke="#E2B753" strokeWidth="2" />
        <path d="M140 58 L144 68 L155 69 L147 76 L149 87 L140 81 L131 87 L133 76 L125 69 L136 68 Z" fill="#FAF7F0" />
      </motion.g>

      {/* Left Medal */}
      <g transform="translate(36, 70)">
        <path d="M14 0 L24 22 M34 0 L24 22" stroke="#0F8B6D" strokeWidth="5" />
        <circle cx="24" cy="38" r="18" fill="#E2B753" stroke="#0B1D3A" strokeWidth="2.5" />
        <circle cx="24" cy="38" r="11" fill="#0F8B6D" />
      </g>

      {/* Right Smiling Student Avatar Badge */}
      <g transform="translate(202, 68)">
        <circle cx="24" cy="36" r="22" fill="#F4C7A1" stroke="#0B1D3A" strokeWidth="2.5" />
        <rect x="6" y="10" width="36" height="12" rx="4" fill="#0B1D3A" stroke="#E2B753" strokeWidth="1.5" />
        <circle cx="17" cy="35" r="2.6" fill="#0B1D3A" />
        <circle cx="31" cy="35" r="2.6" fill="#0B1D3A" />
        <path d="M17 44 Q24 51 31 44" stroke="#0B1D3A" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </motion.svg>
  </div>
);

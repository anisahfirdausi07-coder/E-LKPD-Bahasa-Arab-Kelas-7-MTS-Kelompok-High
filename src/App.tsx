import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Coins,
  HelpCircle,
  Home,
  Menu,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { CURRICULUM } from "./data/curriculum";
import { useProgress } from "./hooks/useProgress";
import { DarsId, PageView } from "./types";
import { ClosingCelebrationPage } from "./components/ClosingCelebrationPage";
import { CoinRainModal } from "./components/CoinRainModal";
import { CoinsProgressPage } from "./components/CoinsProgressPage";
import { CoverPage } from "./components/CoverPage";
import { Dashboard } from "./components/Dashboard";
import { DarsWorkspace } from "./components/DarsWorkspace";
import { Footer } from "./components/Footer";
import { HelpModal } from "./components/HelpModal";
import { MiniDictionaryModal } from "./components/MiniDictionaryModal";

export default function App() {
  const [view, setView] = useState<PageView>("cover");
  const [dictOpen, setDictOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    state,
    stats,
    lastReward,
    clearLastReward,
    toggleSound,
    recordAttemptWrong,
    completeExerciseItem,
    saveWritingDraft,
    resetAllProgress,
  } = useProgress();

  const navigate = (nextView: PageView) => {
    setView(nextView);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeDars = CURRICULUM.find((d) => d.id === view);
  const activeDarsStats = activeDars
    ? stats.darsProgress.find((p) => p.darsId === activeDars.id)!
    : null;

  const getNextDarsId = (currentId: DarsId): PageView => {
    if (currentId === "dars-1") return "dars-2";
    if (currentId === "dars-2") return "dars-3";
    return "closing";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#0B1D3A]">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0B1D3A]/95 backdrop-blur-md text-[#FAF7F0] border-b border-[#2C9B97]/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={() => navigate("cover")}
            className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#E2B753] rounded-lg px-1"
          >
            <BookOpen className="w-5 h-5 text-[#E2B753]" />
            <span className="font-ar-ruqaa text-2xl font-bold text-[#E2B753]" dir="rtl">
              هَيَّا نَتَعَلَّمُ!
            </span>
          </button>

          {/* Zone 2: Primary Nav Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#FAF7F0]/85"
            aria-label="Navigasi Utama"
          >
            <button
              type="button"
              onClick={() => navigate("dashboard")}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 ${
                view === "dashboard" ? "text-[#E2B753] border-b-2 border-[#E2B753]" : ""
              }`}
            >
              Beranda
            </button>
            <button
              type="button"
              onClick={() => navigate("dars-1")}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 ${
                view === "dars-1" ? "text-[#E2B753] border-b-2 border-[#E2B753]" : ""
              }`}
            >
              Dars 1
            </button>
            <button
              type="button"
              onClick={() => navigate("dars-2")}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 ${
                view === "dars-2" ? "text-[#E2B753] border-b-2 border-[#E2B753]" : ""
              }`}
            >
              Dars 2
            </button>
            <button
              type="button"
              onClick={() => navigate("dars-3")}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 ${
                view === "dars-3" ? "text-[#E2B753] border-b-2 border-[#E2B753]" : ""
              }`}
            >
              Dars 3
            </button>
            <button
              type="button"
              onClick={() => setDictOpen(true)}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Kamus Mini
            </button>
          </nav>

          {/* Zone 3: Primary Action & Utility Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate("coins")}
              className="px-3.5 py-2 rounded-xl bg-[#0D6E6E] hover:bg-[#0f8080] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
              title="Lihat Total Koin & Progres"
            >
              <Coins className="w-4 h-4 text-[#E2B753]" />
              <span className="font-mono tabular-nums font-bold">{state.totalCoins}</span>
              <span className="hidden sm:inline text-[#FAF7F0]/80">· {stats.overallPercentage}%</span>
            </button>

            <button
              type="button"
              onClick={toggleSound}
              className="p-2 rounded-lg text-[#FAF7F0]/80 hover:text-white hover:bg-white/10 transition-colors"
              title={state.soundEnabled ? "Matikan Efek Suara" : "Aktifkan Efek Suara"}
              aria-label={state.soundEnabled ? "Matikan Efek Suara" : "Aktifkan Efek Suara"}
            >
              {state.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setHelpOpen(true)}
              className="p-2 rounded-lg text-[#FAF7F0]/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Petunjuk Penggunaan"
              aria-label="Bantuan"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-[#FAF7F0] hover:bg-white/10"
              aria-label="Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#08152B] border-t border-white/10 px-4 py-3 space-y-1.5">
            <button
              type="button"
              onClick={() => navigate("cover")}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/10 flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-[#E2B753]" />
              <span>Halaman Cover</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("dashboard")}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/10"
            >
              Beranda / Dashboard
            </button>
            <button
              type="button"
              onClick={() => navigate("dars-1")}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/10"
            >
              Dars 1: التَّعَارُفُ
            </button>
            <button
              type="button"
              onClick={() => navigate("dars-2")}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/10"
            >
              Dars 2: الأَدَوَاتُ الْمَدْرَسِيَّةُ
            </button>
            <button
              type="button"
              onClick={() => navigate("dars-3")}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/10"
            >
              Dars 3: يَوْمِيَّاتُنَا
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setDictOpen(true);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/10"
            >
              Kamus Mini Bahasa Arab
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area with Smooth Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {view === "cover" && (
              <CoverPage
                onStartLearning={() => navigate("dashboard")}
                totalCoins={state.totalCoins}
                overallPercentage={stats.overallPercentage}
              />
            )}

            {view === "dashboard" && (
              <Dashboard
                totalCoins={state.totalCoins}
                overallPercentage={stats.overallPercentage}
                accuracy={stats.accuracy}
                completedDarsCount={stats.completedDarsCount}
                darsProgress={stats.darsProgress}
                onSelectDars={(id) => navigate(id)}
                onOpenCoinsPage={() => navigate("coins")}
                onOpenClosingPage={() => navigate("closing")}
              />
            )}

            {activeDars && activeDarsStats && (
              <DarsWorkspace
                dars={activeDars}
                progressState={state}
                darsStats={activeDarsStats}
                onBackDashboard={() => navigate("dashboard")}
                onCompleteItem={completeExerciseItem}
                onWrongAttempt={recordAttemptWrong}
                onSaveDraft={saveWritingDraft}
                onOpenDictionary={() => setDictOpen(true)}
                onNavigateNextDars={() => navigate(getNextDarsId(activeDars.id))}
              />
            )}

            {view === "coins" && (
              <CoinsProgressPage
                totalCoins={state.totalCoins}
                accuracy={stats.accuracy}
                totalCompleted={stats.totalCompleted}
                totalItems={stats.totalItems}
                overallPercentage={stats.overallPercentage}
                completedDarsCount={stats.completedDarsCount}
                darsProgress={stats.darsProgress}
                onOpenDars={(id) => navigate(id)}
                onResetAll={resetAllProgress}
              />
            )}

            {view === "closing" && (
              <ClosingCelebrationPage
                totalCoins={state.totalCoins}
                overallPercentage={stats.overallPercentage}
                completedDarsCount={stats.completedDarsCount}
                onRestartLearning={() => navigate("dashboard")}
                onBackDashboard={() => navigate("dashboard")}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Author & Identity Footer */}
      <Footer />

      {/* Overlays */}
      <CoinRainModal reward={lastReward} onClose={clearLastReward} />
      <MiniDictionaryModal open={dictOpen} onClose={() => setDictOpen(false)} />
      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}

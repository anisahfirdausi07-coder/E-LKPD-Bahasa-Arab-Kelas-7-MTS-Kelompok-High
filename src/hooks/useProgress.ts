import { useCallback, useEffect, useMemo, useState } from "react";
import { CURRICULUM, getDarsTrackableIds } from "../data/curriculum";
import { DarsId, UserProgressState, WritingEvalResult } from "../types";
import { playCoinClink, playVictoryFanfare } from "../utils/soundEffects";

const STORAGE_KEY = "arabic_explorer_high_elkp_v1";

const DEFAULT_STATE: UserProgressState = {
  totalCoins: 0,
  completedItems: {},
  correctAnswers: {},
  attemptsCount: 0,
  completedMaharah: {},
  completedDars: {},
  savedWritings: {},
  soundEnabled: true,
};

function loadInitialState(): UserProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<UserProgressState>;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      completedItems: parsed.completedItems ?? {},
      correctAnswers: parsed.correctAnswers ?? {},
      completedMaharah: parsed.completedMaharah ?? {},
      completedDars: parsed.completedDars ?? {},
      savedWritings: parsed.savedWritings ?? {},
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export interface RewardEvent {
  coinsEarned: number;
  titleArabic: string;
  subtitleIndonesian: string;
  isDarsBonus?: boolean;
  isMaharahBonus?: boolean;
}

export function useProgress() {
  const [state, setState] = useState<UserProgressState>(loadInitialState);
  const [lastReward, setLastReward] = useState<RewardEvent | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }
  }, [state]);

  const toggleSound = useCallback(() => {
    setState((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  }, []);

  const clearLastReward = useCallback(() => {
    setLastReward(null);
  }, []);

  // Record a wrong attempt without reducing coins
  const recordAttemptWrong = useCallback((itemId: string) => {
    setState((prev) => ({
      ...prev,
      attemptsCount: prev.attemptsCount + 1,
      correctAnswers: prev.correctAnswers[itemId]
        ? prev.correctAnswers
        : { ...prev.correctAnswers, [itemId]: false },
    }));
  }, []);

  // Complete an item (MCQ, Speaking challenge, Sentence Order, Writing exercise).
  // Prevents duplicate coin awards for the same itemId!
  const completeExerciseItem = useCallback(
    (darsId: DarsId, maharah: "istima" | "kalam" | "qiraah" | "kitabah", itemId: string) => {
      let triggeredReward: RewardEvent | null = null;

      setState((prev) => {
        const alreadyCompleted = Boolean(prev.completedItems[itemId]);
        const nextCompleted = { ...prev.completedItems, [itemId]: true };
        const nextCorrect = { ...prev.correctAnswers, [itemId]: true };
        const nextAttempts = alreadyCompleted ? prev.attemptsCount : prev.attemptsCount + 1;

        let coinsToAdd = alreadyCompleted ? 0 : 10;
        let bonusMaharah = false;
        let bonusDars = false;

        const dars = CURRICULUM.find((d) => d.id === darsId);
        const nextMaharah = { ...prev.completedMaharah };
        const nextDars = { ...prev.completedDars };

        if (dars) {
          const ids = getDarsTrackableIds(dars);
          const maharahKey = `${darsId}-${maharah}`;
          const maharahItems =
            maharah === "istima"
              ? ids.istimaIds
              : maharah === "kalam"
                ? ids.kalamIds
                : maharah === "qiraah"
                  ? ids.qiraahIds
                  : ids.kitabahIds;

          const allMaharahDone = maharahItems.every((id) => Boolean(nextCompleted[id]));
          if (allMaharahDone && !nextMaharah[maharahKey]) {
            nextMaharah[maharahKey] = true;
            coinsToAdd += 10;
            bonusMaharah = true;
          }

          const allDarsDone = ids.allIds.every((id) => Boolean(nextCompleted[id]));
          if (allDarsDone && !nextDars[darsId]) {
            nextDars[darsId] = true;
            coinsToAdd += 30;
            bonusDars = true;
          }
        }

        if (coinsToAdd > 0) {
          triggeredReward = {
            coinsEarned: coinsToAdd,
            titleArabic: bonusDars
              ? "مُبَارَكٌ! أَتْمَمْتَ الدَّرْسَ!"
              : "أَحْسَنْتَ! إِجَابَةٌ صَحِيحَةٌ",
            subtitleIndonesian: bonusDars
              ? `Selamat! Dars selesai (+10 koin latihan${bonusMaharah ? ", +10 bonus maharah" : ""}, +30 bonus dars)`
              : bonusMaharah
                ? "Hebat! 1 Maharah selesai (+10 koin + 10 bonus maharah)"
                : "Jawaban tepat! Kamu memperoleh +10 koin.",
            isDarsBonus: bonusDars,
            isMaharahBonus: bonusMaharah,
          };
        }

        return {
          ...prev,
          totalCoins: prev.totalCoins + coinsToAdd,
          completedItems: nextCompleted,
          correctAnswers: nextCorrect,
          attemptsCount: nextAttempts,
          completedMaharah: nextMaharah,
          completedDars: nextDars,
        };
      });

      // Defer sound + reward modal state update cleanly
      setTimeout(() => {
        if (triggeredReward) {
          setLastReward(triggeredReward);
          if (triggeredReward.isDarsBonus) {
            playVictoryFanfare(state.soundEnabled);
          } else {
            playCoinClink(state.soundEnabled);
          }
        }
      }, 0);
    },
    [state.soundEnabled]
  );

  const saveWritingDraft = useCallback(
    (exerciseId: string, text: string, evalResult?: WritingEvalResult) => {
      setState((prev) => ({
        ...prev,
        savedWritings: {
          ...prev.savedWritings,
          [exerciseId]: {
            text,
            lastEval: evalResult ?? prev.savedWritings[exerciseId]?.lastEval,
            updatedAt: new Date().toISOString(),
          },
        },
      }));
    },
    []
  );

  const resetAllProgress = useCallback(() => {
    setState((prev) => ({
      ...DEFAULT_STATE,
      soundEnabled: prev.soundEnabled,
    }));
    setLastReward(null);
  }, []);

  // Computed metrics
  const stats = useMemo(() => {
    const darsProgress = CURRICULUM.map((dars) => {
      const ids = getDarsTrackableIds(dars);
      const completedCount = ids.allIds.filter((id) => Boolean(state.completedItems[id])).length;
      const totalCount = ids.allIds.length;
      const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      const calcMaharahPct = (list: string[]) => {
        if (!list.length) return 0;
        const done = list.filter((id) => Boolean(state.completedItems[id])).length;
        return Math.round((done / list.length) * 100);
      };

      return {
        darsId: dars.id,
        completedCount,
        totalCount,
        percentage: pct,
        isCompleted: Boolean(state.completedDars[dars.id]) || pct === 100,
        maharah: {
          istima: calcMaharahPct(ids.istimaIds),
          kalam: calcMaharahPct(ids.kalamIds),
          qiraah: calcMaharahPct(ids.qiraahIds),
          kitabah: calcMaharahPct(ids.kitabahIds),
        },
      };
    });

    const totalItems = darsProgress.reduce((acc, d) => acc + d.totalCount, 0);
    const totalCompleted = darsProgress.reduce((acc, d) => acc + d.completedCount, 0);
    const overallPercentage = totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0;

    const correctCount = Object.values(state.correctAnswers).filter(Boolean).length;
    const totalAttemptedDistinct = Object.keys(state.correctAnswers).length;
    const accuracy =
      totalAttemptedDistinct > 0
        ? Math.round((correctCount / Math.max(totalAttemptedDistinct, 1)) * 100)
        : 0;

    const completedDarsCount = darsProgress.filter((d) => d.isCompleted).length;
    const allDarsCompleted = completedDarsCount === CURRICULUM.length;

    return {
      darsProgress,
      totalItems,
      totalCompleted,
      overallPercentage,
      accuracy,
      completedDarsCount,
      allDarsCompleted,
    };
  }, [state]);

  return {
    state,
    stats,
    lastReward,
    clearLastReward,
    toggleSound,
    recordAttemptWrong,
    completeExerciseItem,
    saveWritingDraft,
    resetAllProgress,
  };
}

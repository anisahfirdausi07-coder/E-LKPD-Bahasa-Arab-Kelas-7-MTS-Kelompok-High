export type PageView =
  | "cover"
  | "dashboard"
  | "dars-1"
  | "dars-2"
  | "dars-3"
  | "coins"
  | "closing";

export type MaharahTab =
  | "materi"
  | "istima"
  | "kalam"
  | "qiraah"
  | "kitabah";

export type DarsId = "dars-1" | "dars-2" | "dars-3";

export interface MufrodatItem {
  id: string;
  arabic: string;
  transliteration: string;
  indonesian: string;
  category: string;
  exampleArabic: string;
  exampleIndonesian: string;
  darsId: DarsId;
}

export interface UngkapanItem {
  arabic: string;
  indonesian: string;
  responseArabic: string;
  responseIndonesian: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: { arabic: string; indonesian: string }[];
}

export interface McqQuestion {
  id: string;
  questionArabic: string;
  options: string[]; // 4 Arabic options
  correctIndex: number;
  explanationIndonesian: string;
  skillFocus: string;
  isInference?: boolean;
}

export interface HiwarLine {
  speakerArabic: string;
  speakerSide: "right" | "left";
  textArabic: string;
  textIndonesian: string;
}

export interface SpeakingChallenge {
  id: string;
  badgeLabel: string;
  titleIndonesian: string;
  titleArabic: string;
  instructionIndonesian: string;
  promptArabic: string;
  promptIndonesian: string;
  sampleHints: string[];
  checklistItems: string[];
  illustrationType?: "school-intro" | "school-bag" | "classroom" | "daily-routine";
}

export interface SentenceOrderExercise {
  id: string;
  instructionIndonesian: string;
  scrambledWords: string[];
  correctSentence: string;
  translationIndonesian: string;
}

export interface PictureWritingExercise {
  id: string;
  titleIndonesian: string;
  instructionArabic: string;
  instructionIndonesian: string;
  minSentences: number;
  illustrationType:
    | "intro-class"
    | "students-meeting"
    | "school-bag"
    | "classroom"
    | "daily-timeline"
    | "umar-activities";
  requirements: string[];
  rubricCriteria: string[];
}

export interface DarsData {
  id: DarsId;
  number: number;
  titleArabic: string;
  titleIndonesian: string;
  subtitle: string;
  description: string;
  learningObjectives: string[];
  grammarPoints: GrammarPoint[];
  mufrodat: MufrodatItem[];
  ungkapan: UngkapanItem[];
  extraColors?: { arabic: string; indonesian: string; hex: string }[];
  extraConnectors?: { arabic: string; indonesian: string; exampleArabic: string }[];
  dailyTimeline?: { timeArabic: string; activityArabic: string; activityIndonesian: string }[];
  istima: {
    titleArabic: string;
    titleIndonesian: string;
    audioTextArabic: string;
    illustrationType: "intro-class" | "school-bag" | "daily-timeline";
    questions: McqQuestion[];
  };
  kalam: {
    titleArabic: string;
    titleIndonesian: string;
    hiwar: HiwarLine[];
    challenges: SpeakingChallenge[];
  };
  qiraah: {
    titleArabic: string;
    titleIndonesian: string;
    isDialog: boolean;
    dialogLines?: HiwarLine[];
    paragraphs?: string[];
    highlightedWords?: { arabic: string; indonesian: string }[];
    illustrationType: "two-discussing" | "classroom" | "umar-activities";
    sentenceOrderQuestions: SentenceOrderExercise[];
  };
  kitabah: {
    pictureExercises: PictureWritingExercise[];
  };
  mahfuzhat: {
    arabic: string;
    translation: string;
    reflection: string;
  };
}

export interface WritingEvalResult {
  criteriaScores: {
    criterion: string;
    score: number;
    comment: string;
  }[];
  totalPercentage: number;
  passed: boolean;
  praiseArabic: string;
  overallFeedback: string;
  corrections: {
    original: string;
    suggestion: string;
    reason: string;
  }[];
  improvedVersionArabic: string;
}

export interface UserProgressState {
  totalCoins: number;
  completedItems: Record<string, boolean>;
  correctAnswers: Record<string, boolean>;
  attemptsCount: number;
  completedMaharah: Record<string, boolean>;
  completedDars: Record<string, boolean>;
  savedWritings: Record<
    string,
    {
      text: string;
      lastEval?: WritingEvalResult;
      updatedAt: string;
    }
  >;
  soundEnabled: boolean;
}

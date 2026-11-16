import React, { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX, Loader2 } from "lucide-react";

interface AudioPlayerProps {
  textArabic: string;
  label?: string;
  compact?: boolean;
  ttsStyle?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  textArabic,
  label = "Dengarkan Audio Bahasa Arab",
  compact = false,
  ttsStyle,
}) => {
  const [status, setStatus] = useState<"idle" | "loading" | "playing" | "paused">("idle");
  const [volume, setVolume] = useState<number>(0.9);
  const [muted, setMuted] = useState<boolean>(false);
  const [mode, setMode] = useState<"gemini" | "speech" | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cachedUrlRef = useRef<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Stop playback when component unmounts or text changes
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (cachedUrlRef.current) {
        URL.revokeObjectURL(cachedUrlRef.current);
        cachedUrlRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [textArabic]);

  // Sync volume dynamically
  useEffect(() => {
    const effectiveVol = muted ? 0 : volume;
    if (audioRef.current) {
      audioRef.current.volume = effectiveVol;
    }
  }, [volume, muted]);

  const speakWithWebSpeech = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setStatus("idle");
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "ar-SA";
    utt.rate = 0.88; // moderate educational pace
    utt.volume = muted ? 0 : volume;

    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((v) => v.lang.startsWith("ar"));
    if (arabicVoice) utt.voice = arabicVoice;

    utt.onstart = () => {
      setMode("speech");
      setStatus("playing");
    };
    utt.onend = () => setStatus("idle");
    utt.onerror = () => setStatus("idle");
    utteranceRef.current = utt;
    window.speechSynthesis.speak(utt);
  };

  const handlePlay = async () => {
    // Resume if paused
    if (status === "paused") {
      if (mode === "gemini" && audioRef.current) {
        audioRef.current.play();
        setStatus("playing");
        return;
      }
      if (mode === "speech" && "speechSynthesis" in window) {
        window.speechSynthesis.resume();
        setStatus("playing");
        return;
      }
    }

    // Play cached Gemini TTS WAV if already fetched
    if (cachedUrlRef.current) {
      if (!audioRef.current) {
        const audio = new Audio(cachedUrlRef.current);
        audio.volume = muted ? 0 : volume;
        audio.onended = () => setStatus("idle");
        audioRef.current = audio;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setMode("gemini");
      setStatus("playing");
      return;
    }

    // Try Gemini TTS endpoint first, fallback to Web Speech API
    setStatus("loading");
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textArabic, style: ttsStyle }),
      });
      if (!res.ok) throw new Error("TTS endpoint unavailable");
      const data = (await res.json()) as { audioBase64?: string; mimeType?: string };
      if (!data.audioBase64) throw new Error("Missing audio payload");

      const binary = atob(data.audioBase64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: data.mimeType || "audio/wav" });
      const url = URL.createObjectURL(blob);
      cachedUrlRef.current = url;

      const audio = new Audio(url);
      audio.volume = muted ? 0 : volume;
      audio.onended = () => setStatus("idle");
      audio.onerror = () => speakWithWebSpeech(textArabic);
      audioRef.current = audio;
      setMode("gemini");
      await audio.play();
      setStatus("playing");
    } catch {
      speakWithWebSpeech(textArabic);
    }
  };

  const handlePause = () => {
    if (status !== "playing") return;
    if (mode === "gemini" && audioRef.current) {
      audioRef.current.pause();
      setStatus("paused");
    } else if (mode === "speech" && "speechSynthesis" in window) {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  };

  const handleReplay = () => {
    if (mode === "gemini" && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setStatus("playing");
    } else if (mode === "speech" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      speakWithWebSpeech(textArabic);
    } else {
      handlePlay();
    }
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5">
        <button
          type="button"
          onClick={status === "playing" ? handlePause : handlePlay}
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0D6E6E] text-white hover:bg-[#0B5A5A] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B753]"
          title={status === "playing" ? "Jeda Audio" : "Putar Audio Arab"}
          aria-label={status === "playing" ? "Jeda Audio" : "Putar Audio Arab"}
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : status === "playing" ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0B1D3A] text-[#FAF7F0] rounded-xl p-4 sm:p-5 border border-[#2C9B97]/35 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Play / Pause Button */}
          <button
            type="button"
            onClick={status === "playing" ? handlePause : handlePlay}
            className="w-12 h-12 rounded-xl bg-[#E2B753] text-[#0B1D3A] hover:bg-[#eab845] flex items-center justify-center transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-white shrink-0"
            aria-label={status === "playing" ? "Jeda Audio" : "Putar Audio"}
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === "playing" ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          {/* Replay Button */}
          <button
            type="button"
            onClick={handleReplay}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF7F0] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B753] shrink-0"
            title="Putar Ulang Audio"
            aria-label="Putar Ulang Audio"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div>
            <p className="text-sm font-semibold text-[#FAF7F0]">{label}</p>
            <div className="flex items-center gap-2 mt-1">
              {/* Animated Audio Indicator */}
              <div className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
                {[0.6, 1, 0.75, 0.9, 0.5].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full bg-[#2C9B97] transition-all ${
                      status === "playing" ? "animate-pulse" : "opacity-40"
                    }`}
                    style={{
                      height: status === "playing" ? `${Math.round(h * 14)}px` : "4px",
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-[#FAF7F0]/75">
                {status === "loading"
                  ? "Menyiapkan suara bahasa Arab..."
                  : status === "playing"
                    ? "Audio sedang diputar"
                    : status === "paused"
                      ? "Audio dijeda"
                      : "Siap diputar"}
              </span>
            </div>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2.5 bg-white/10 px-3 py-2 rounded-lg">
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="text-[#FAF7F0] hover:text-[#E2B753] transition-colors"
            aria-label={muted ? "Aktifkan Suara" : "Bisukan Suara"}
          >
            {muted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={muted ? 0 : volume}
            onChange={(e) => {
              setMuted(false);
              setVolume(parseFloat(e.target.value));
            }}
            aria-label="Pengaturan Volume Audio"
            className="w-24 accent-[#E2B753] cursor-pointer"
          />
          <span className="text-xs font-mono tabular-nums text-[#FAF7F0]/80 w-8 text-right">
            {Math.round((muted ? 0 : volume) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

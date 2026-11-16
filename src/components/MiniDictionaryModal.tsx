import React, { useMemo, useState } from "react";
import { BookOpen, Search, X } from "lucide-react";
import { ALL_DICTIONARY_ITEMS } from "../data/curriculum";
import { AudioPlayer } from "./AudioPlayer";

interface MiniDictionaryModalProps {
  open: boolean;
  onClose: () => void;
}

const CATEGORIES = ["Semua", "Dars 1", "Dars 2", "Dars 3", "Warna & Penghubung"];

export const MiniDictionaryModal: React.FC<MiniDictionaryModalProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_DICTIONARY_ITEMS.filter((item) => {
      const matchCat = category === "Semua" || item.category === category;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        item.arabic.includes(query) ||
        item.indonesian.toLowerCase().includes(q) ||
        item.transliteration.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Kamus Mini Bahasa Arab"
    >
      <div className="bg-[#FAF7F0] text-[#0B1D3A] w-full max-w-3xl max-h-[88vh] rounded-2xl border-2 border-[#0D6E6E] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1D3A] text-[#FAF7F0] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#E2B753]" />
            <div>
              <h3 className="font-bold text-base">
                Kamus Mini Bahasa Arab{" "}
                <span className="font-ar-amiri text-xl text-[#E2B753] mr-2" dir="rtl">
                  (الْقَامُوسُ الصَّغِيرُ)
                </span>
              </h3>
              <p className="text-xs text-[#FAF7F0]/75">
                Cari arti mufradat, cara baca, contoh kalimat, dan dengarkan pelafalannya.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#FAF7F0]/80 hover:text-white hover:bg-white/10"
            aria-label="Tutup Kamus Mini"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Tabs */}
        <div className="p-4 bg-white border-b border-[#D9CEB8] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari kosakata Arab, transliterasi, atau arti bahasa Indonesia..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D9CEB8] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#0D6E6E]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  category === cat
                    ? "bg-[#0D6E6E] text-white"
                    : "bg-[#F2ECE0] text-[#0B1D3A] hover:bg-[#e5dcc9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Entries List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-sm text-slate-500">
              Kosakata tidak ditemukan. Coba kata kunci lain.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 border border-[#D9CEB8] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <span className="font-ar-amiri text-2xl font-bold text-[#0B1D3A]" dir="rtl">
                      {item.arabic}
                    </span>
                    <span className="text-xs text-slate-500 italic">{item.transliteration}</span>
                    <span className="text-xs font-semibold text-[#0D6E6E]">· {item.category}</span>
                  </div>
                  <p className="text-sm font-bold text-[#0F8B6D]">{item.indonesian}</p>
                  <p className="font-ar-naskh text-base text-slate-700" dir="rtl">
                    {item.exampleArabic}
                  </p>
                  <p className="text-xs text-slate-500">{item.exampleIndonesian}</p>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <AudioPlayer textArabic={`${item.arabic}. ${item.exampleArabic}`} compact />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

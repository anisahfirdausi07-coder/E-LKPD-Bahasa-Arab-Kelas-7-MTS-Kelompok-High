import React from "react";
import { BookOpenText, Coins, Headphones, HelpCircle, MessageCircle, PenTool, X } from "lucide-react";

interface HelpModalProps {
  open: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Petunjuk Penggunaan E-LKPD"
    >
      <div className="bg-[#FAF7F0] text-[#0B1D3A] w-full max-w-2xl max-h-[88vh] rounded-2xl border-2 border-[#0D6E6E] shadow-2xl overflow-hidden flex flex-col">
        <div className="px-6 py-4 bg-[#0B1D3A] text-[#FAF7F0] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-[#E2B753]" />
            <h3 className="font-bold text-base">Petunjuk Penggunaan E-LKPD (Level High)</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#FAF7F0]/80 hover:text-white hover:bg-white/10"
            aria-label="Tutup Bantuan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          <div className="bg-white rounded-xl p-4 border border-[#D9CEB8] space-y-1.5">
            <h4 className="font-bold text-[#0B1D3A] flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#0D6E6E]" />
              1. Menyimak (Istima') — Audio Cerita & Soal Audio
            </h4>
            <p>
              Putar audio cerita terlebih dahulu, lalu dengarkan pertanyaan pada setiap nomor soal melalui pemutar audio (tanpa teks tertulis) sebelum memilih jawaban yang tepat.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#D9CEB8] space-y-1.5">
            <h4 className="font-bold text-[#0B1D3A] flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#0D6E6E]" />
              2. Berbicara Mandiri (Kalam)
            </h4>
            <p>
              Pelajari model hiwar beserta audionya, lalu rekam suaramu menggunakan fitur perekam suara untuk mempraktikkan jawaban wawancara, deskripsi, atau pendapat berbahasa Arab secara langsung.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#D9CEB8] space-y-1.5">
            <h4 className="font-bold text-[#0B1D3A] flex items-center gap-2">
              <BookOpenText className="w-4 h-4 text-[#0D6E6E]" />
              3. Membaca (Qira'ah) — Menyusun Kalimat
            </h4>
            <p>
              Baca teks pada halaman buku digital dengan teliti, kemudian susun kosakata acak menjadi kalimat-kalimat bahasa Arab yang tepat sesuai isi bacaan.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#D9CEB8] space-y-1.5">
            <h4 className="font-bold text-[#0B1D3A] flex items-center gap-2">
              <PenTool className="w-4 h-4 text-[#0D6E6E]" />
              4. Menulis dari Gambar (Kitabah)
            </h4>
            <p>
              Amati gambar ilustrasi pada setiap latihan, lalu tulislah kalimat bahasa Arab pada editor RTL sesuai gambar. Gunakan tombol <strong>Simpan</strong> dan <strong>Periksa Tulisan (AI)</strong> untuk melihat skor rubrik.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#D9CEB8] space-y-1.5">
            <h4 className="font-bold text-[#0B1D3A] flex items-center gap-2">
              <Coins className="w-4 h-4 text-[#E2B753]" />
              5. Aturan Koin & Pengulangan Latihan
            </h4>
            <p>
              Jawaban benar bernilai <strong>+10 koin</strong>, menyelesaikan 1 maharah memberi bonus <strong>+10 koin</strong>, dan menuntaskan 1 dars memberi bonus <strong>+30 koin</strong>. Jawaban salah tidak mengurangi koin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

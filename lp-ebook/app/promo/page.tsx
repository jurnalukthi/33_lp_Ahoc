import type { Metadata } from "next";
import { CheckCircle2, Download, BookOpen, ShieldCheck, Zap, Sparkles, ArrowRight, Clock } from "lucide-react";
import { pricingPackages, formatRupiah } from "@/data/pricing";
import { whatYouGetList } from "@/data/features";
import { BookMockup } from "@/components/BookMockup";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Promo 60% — 300 Soal Jawab Hukum Pidana Korupsi 2026",
  description:
    "Dapatkan referensi hukum pidana korupsi terlengkap 2026 dengan harga promo peluncuran. Update KUHP Nasional (UU No. 1/2023), 300 soal jawab tervalidasi, 20 diagram alur, metode IRAC. Diskon 60% terbatas.",
  keywords: [
    "promo ebook hukum pidana korupsi",
    "diskon buku tipikor 2026",
    "hukum pidana korupsi KUHP Nasional",
    "soal jawab hakim ad hoc",
    "referensi advokat tipikor",
  ],
  openGraph: {
    title: "Promo Peluncuran 60% — 300 Soal Jawab Hukum Pidana Korupsi 2026",
    description:
      "Referensi lengkap transisi KUHP Nasional 2026 untuk Mahasiswa, Advokat & Calon Hakim Ad Hoc. Mulai Rp 45.000.",
    type: "website",
    locale: "id_ID",
  },
};

const statsData = [
  { number: "300", label: "Soal & Jawaban" },
  { number: "18", label: "Bab Terstruktur" },
  { number: "20", label: "Diagram Alur" },
  { number: "50", label: "Rujukan Silang" },
];

const urgencyPoints = [
  "Harga promo peluncuran — berlaku terbatas",
  "Akses instan pasca pembayaran (< 1 menit)",
  "Update regulasi KUHP Nasional 2026 terbaru",
];

export default function PromoPage() {
  const onlinePkg = pricingPackages.find((p) => p.id === "online")!;
  const pdfPkg = pricingPackages.find((p) => p.id === "pdf")!;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <main className="flex-1">

        {/* ── HERO PROMO ── */}
        <section className="relative bg-gradient-to-b from-[#091324] via-[#0d1d38] to-[#0f244a] text-white pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Promo Alert Bar */}
            <div className="flex items-center justify-center gap-2.5 bg-red-600/90 border border-red-400/40 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl mb-10 max-w-xl mx-auto shadow-lg">
              <Clock className="w-4 h-4 text-red-200 shrink-0 animate-pulse" />
              <span>PROMO PELUNCURAN RESMI — HEMAT 60% · PENAWARAN TERBATAS</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left: Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-serif-title leading-[1.15] tracking-tight text-white">
                  300 Soal Jawab{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                    Hukum Pidana Korupsi
                  </span>{" "}
                  <span className="inline-block bg-blue-900/60 border border-blue-400/40 text-blue-200 text-2xl sm:text-3xl lg:text-[36px] px-3 py-0.5 rounded-lg font-sans font-extrabold align-middle">
                    2026
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Referensi komprehensif transisi{" "}
                  <strong className="text-white font-semibold">KUHP Nasional (UU No. 1/2023)</strong>{" "}
                  untuk Mahasiswa Hukum, Advokat, dan Calon Hakim Ad Hoc Pengadilan Tipikor.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0">
                  {statsData.map((stat) => (
                    <div
                      key={stat.number}
                      className="bg-slate-900/60 border border-slate-700 rounded-xl p-3 text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif-title">
                        {stat.number}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-300 mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Urgency List */}
                <div className="space-y-2 max-w-lg mx-auto lg:mx-0">
                  {urgencyPoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                  <a
                    href={onlinePkg.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg shadow-blue-950/60 border border-blue-400/30 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-5 h-5 text-blue-200 shrink-0" />
                      <div className="text-left">
                        <div className="leading-tight">Baca Online</div>
                        <div className="text-xs text-blue-200 font-normal">Platform Lynk</div>
                      </div>
                    </div>
                    <div className="bg-blue-900/80 px-2.5 py-1 rounded-md text-amber-300 font-extrabold text-sm border border-blue-400/30">
                      {formatRupiah(onlinePkg.promoPrice)}
                    </div>
                  </a>

                  <a
                    href={pdfPkg.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center justify-between gap-3 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base px-6 py-4 rounded-xl shadow-xl shadow-amber-950/40 border border-amber-300/60 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span className="absolute -top-2.5 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      Terpopuler
                    </span>
                    <div className="flex items-center gap-2.5">
                      <Download className="w-5 h-5 text-slate-950 shrink-0" />
                      <div className="text-left">
                        <div className="leading-tight">Download Ebook PDF</div>
                        <div className="text-xs text-slate-800 font-semibold">Offline Selamanya</div>
                      </div>
                    </div>
                    <div className="bg-slate-950 text-amber-400 px-2.5 py-1 rounded-md font-extrabold text-sm border border-amber-400/40">
                      {formatRupiah(pdfPkg.promoPrice)}
                    </div>
                  </a>

                </div>

                {/* Trust Row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Transaksi Aman via Platform Lynk</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Akses Langsung dalam 1 Menit</span>
                  </div>
                </div>
              </div>

              {/* Right: Book Mockup */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <BookMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICE HIGHLIGHT STRIP ── */}
        <section className="bg-amber-500 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-slate-950 text-sm font-bold text-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>PROMO PELUNCURAN — HEMAT 60%</span>
              </div>
              <div className="hidden sm:block text-slate-700">|</div>
              <div>
                Online:{" "}
                <span className="line-through text-slate-700 font-normal">
                  {formatRupiah(onlinePkg.originalPrice)}
                </span>{" "}
                <span className="text-red-800">{formatRupiah(onlinePkg.promoPrice)}</span>
              </div>
              <div className="hidden sm:block text-slate-700">|</div>
              <div>
                PDF:{" "}
                <span className="line-through text-slate-700 font-normal">
                  {formatRupiah(pdfPkg.originalPrice)}
                </span>{" "}
                <span className="text-red-800">{formatRupiah(pdfPkg.promoPrice)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
                Yang Anda Dapatkan dalam Satu Buku
              </h2>
              <p className="text-base text-slate-500 mt-3">
                Paket belajar tuntas — dari fondasi hukum hingga praktik peradilan tipikor.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border-2 border-slate-200 shadow-md">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {whatYouGetList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-2 rounded-lg hover:bg-white transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── DUAL CTA FINAL ── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1733] via-[#0f244e] to-[#08152b] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">

            <div className="inline-flex items-center gap-2 bg-red-600/90 border border-red-400/40 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>PENAWARAN TERBATAS — JANGAN LEWATKAN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title leading-tight text-white">
              Ambil Keputusan Tepat{" "}
              <span className="text-amber-400">Sekarang</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Investasi{" "}
              <strong className="text-white">Rp 45.000</strong> untuk online atau{" "}
              <strong className="text-white">Rp 145.000</strong> untuk kepemilikan penuh seumur hidup.
              Hemat 60% dari harga normal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <a
                href={onlinePkg.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg border border-blue-400/30 transition-all hover:scale-105 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-blue-200" />
                <span>Baca Online ({formatRupiah(onlinePkg.promoPrice)})</span>
              </a>

              <a
                href={pdfPkg.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-950/50 border border-amber-300/80 transition-all hover:scale-105 cursor-pointer"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>Download PDF ({formatRupiah(pdfPkg.promoPrice)})</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pembayaran Resmi & Terenkripsi via Lynk</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Akses / Unduhan Otomatis & Cepat</span>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

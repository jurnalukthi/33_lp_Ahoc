import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Download, BookOpen, Sparkles } from "lucide-react";
import { BookMockup } from "@/components/BookMockup";
import { pricingPackages, formatRupiah } from "@/data/pricing";

export function Hero() {
  const onlinePkg = pricingPackages.find((p) => p.id === "online")!;
  const pdfPkg = pricingPackages.find((p) => p.id === "pdf")!;

  return (
    <section className="relative bg-gradient-to-b from-[#091324] via-[#0d1d38] to-[#0f244a] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-slate-800">
      {/* Decorative Grid Lines Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Promo Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-700/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>PROMO PELUNCURAN RESMI: HEMAT 60%</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-serif-title leading-[1.15] tracking-tight text-white">
              300 Soal Jawab <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Hukum Pidana Korupsi
              </span>{" "}
              <span className="inline-block bg-blue-900/60 border border-blue-400/40 text-blue-200 text-2xl sm:text-3xl lg:text-4xl px-3 py-0.5 rounded-lg ml-1 font-sans font-extrabold align-middle">
                2026
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Referensi komprehensif transisi <strong className="text-white font-semibold">KUHP Nasional (UU No. 1/2023)</strong> untuk Mahasiswa Hukum, Advokat, dan Calon Hakim Ad Hoc Pengadilan Tipikor.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">300 Soal Jawab Tervalidasi</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">Update KUHP Nasional 2026</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">20 Diagram Alur & 50 Rujukan Silang</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">Pedoman IRAC & Peta Konsep</span>
              </div>
            </div>

            {/* Action Buttons Box */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                
                {/* CTA 1: Online Reading */}
                <a
                  href="#harga"
                  className="group relative flex items-center justify-between sm:justify-center gap-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg shadow-blue-950/60 border border-blue-400/30 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 text-left">
                    <BookOpen className="w-5 h-5 text-blue-200 shrink-0" />
                    <div>
                      <div className="leading-tight">Baca Online</div>
                      <div className="text-xs text-blue-200 font-normal">Platform Lynk</div>
                    </div>
                  </div>
                  <div className="bg-blue-900/80 px-2.5 py-1 rounded-md text-amber-300 font-extrabold text-sm border border-blue-400/30">
                    {formatRupiah(onlinePkg.promoPrice)}
                  </div>
                </a>

                {/* CTA 2: Download PDF (Recommended) */}
                <a
                  href="#harga"
                  className="group relative flex items-center justify-between sm:justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base px-6 py-4 rounded-xl shadow-xl shadow-amber-950/40 border border-amber-300/60 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  {/* Recommended Ribbon */}
                  <span className="absolute -top-2.5 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Terpopuler
                  </span>

                  <div className="flex items-center gap-2.5 text-left">
                    <Download className="w-5 h-5 text-slate-950 shrink-0" />
                    <div>
                      <div className="leading-tight">Download Ebook PDF</div>
                      <div className="text-xs text-slate-800 font-semibold">Offline Selamanya</div>
                    </div>
                  </div>
                  <div className="bg-slate-950 text-amber-400 px-2.5 py-1 rounded-md font-extrabold text-sm border border-amber-400/40">
                    {formatRupiah(pdfPkg.promoPrice)}
                  </div>
                </a>

              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Transaksi Aman via Platform Lynk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Akses Langsung dalam 1 Menit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Edisi Hukum Terkini 2026</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Book Mockup (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <BookMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

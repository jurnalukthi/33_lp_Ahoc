import { ArrowRight, Download, BookOpen, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { pricingPackages, formatRupiah } from "@/data/pricing";

export function CTAFinal() {
  const onlinePkg = pricingPackages.find((p) => p.id === "online")!;
  const pdfPkg = pricingPackages.find((p) => p.id === "pdf")!;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a1733] via-[#0f244e] to-[#08152b] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>INVESTASI TERBAIK UNTUK KARIR HUKUM ANDA</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title leading-tight text-white max-w-3xl mx-auto">
          Siap Menguasai Seluruh Aspek <br />
          <span className="text-amber-400">Hukum Pidana Korupsi 2026?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Dapatkan akses instan ke 300 soal jawab, 18 bab terstruktur, 20 diagram alur, dan framework analisis IRAC dengan <strong className="text-white">potongan harga 60%</strong> sekarang juga.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto pt-2">
          
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
            <span>Download PDF Master ({formatRupiah(pdfPkg.promoPrice)})</span>
          </a>

        </div>

        {/* Trust Guarantees */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
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
  );
}

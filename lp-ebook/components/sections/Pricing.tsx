import { CheckCircle2, XCircle, Download, BookOpen, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { pricingPackages, comparisonFeatures, formatRupiah } from "@/data/pricing";

export function Pricing() {
  const onlinePkg = pricingPackages.find((p) => p.id === "online")!;
  const pdfPkg = pricingPackages.find((p) => p.id === "pdf")!;

  return (
    <section id="harga" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>PENAWARAN SPESIAL PELUNCURAN (HEMAT 60%)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif-title text-white">
            Pilih Paket Pembelian yang Tepat
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Investasi cerdas dan terjangkau untuk meningkatkan keunggulan karir hukum dan keberhasilan ujian Anda.
          </p>
        </div>

        {/* 2 Main Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          
          {/* Package 1: Online Reading */}
          <div className="bg-slate-800/90 rounded-3xl p-8 sm:p-9 border border-slate-700 shadow-xl flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold bg-blue-900 text-blue-200 border border-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">
                  {onlinePkg.badge}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Platform Lynk</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-serif-title text-white mb-2">
                {onlinePkg.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {onlinePkg.description}
              </p>

              {/* Price Box */}
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-700/80 mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs sm:text-sm text-slate-400 line-through">
                    {formatRupiah(onlinePkg.originalPrice)}
                  </span>
                  <span className="text-xs font-extrabold bg-red-600 text-white px-2 py-0.5 rounded">
                    DISKON {onlinePkg.discountPercentage}%
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {formatRupiah(onlinePkg.promoPrice)}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                  {onlinePkg.savingsText}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Fasilitas yang Didapatkan:
                </div>
                {onlinePkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={onlinePkg.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-blue-200" />
                <span>{onlinePkg.ctaText}</span>
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2.5">
                {onlinePkg.ctaSubtext}
              </p>
            </div>
          </div>

          {/* Package 2: Download PDF (Recommended) */}
          <div className="bg-gradient-to-b from-[#112344] via-[#0d1d3a] to-[#0a1730] rounded-3xl p-8 sm:p-9 border-2 border-amber-400/80 shadow-2xl flex flex-col justify-between relative hover:border-amber-400 transition-all">
            
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              👑 {pdfPkg.badge}
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full uppercase tracking-wider">
                  Full Ownership
                </span>
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Akses Offline Selamanya</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-serif-title text-white mb-2">
                {pdfPkg.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {pdfPkg.description}
              </p>

              {/* Price Box */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-amber-400/40 mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs sm:text-sm text-slate-400 line-through">
                    {formatRupiah(pdfPkg.originalPrice)}
                  </span>
                  <span className="text-xs font-extrabold bg-red-600 text-white px-2 py-0.5 rounded">
                    DISKON {pdfPkg.discountPercentage}%
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {formatRupiah(pdfPkg.promoPrice)}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                  {pdfPkg.savingsText} (Hemat Terbanyak)
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Fasilitas Eksklusif yang Didapatkan:
                </div>
                {pdfPkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={pdfPkg.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base py-4 rounded-xl shadow-xl shadow-amber-950/40 transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>{pdfPkg.ctaText}</span>
              </a>
              <p className="text-[11px] text-center text-amber-200/80 mt-2.5">
                {pdfPkg.ctaSubtext}
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700">
          <h4 className="text-lg font-bold font-serif-title text-white mb-6 text-center">
            Matriks Perbandingan Fasilitas Paket
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-slate-300">
                  <th className="py-3 px-3">Fitur / Layanan</th>
                  <th className="py-3 px-3 text-center">Baca Online</th>
                  <th className="py-3 px-3 text-center text-amber-400 font-bold">Ebook PDF (Master)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 text-slate-200">
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className={row.isHighlight ? "bg-amber-500/10 font-semibold" : ""}
                  >
                    <td className="py-3.5 px-3 font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-300">
                      {row.online}
                    </td>
                    <td className="py-3.5 px-3 text-center font-bold text-amber-300">
                      {row.pdf}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verifikasi Pembayaran Otomatis</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>File Dikirim Langsung Pasca Transaksi</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

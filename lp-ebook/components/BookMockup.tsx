import { Sparkles } from "lucide-react";

export function BookMockup() {
  const basePath = process.env.NODE_ENV === "production" ? "/33_lp_Ahoc" : "";

  return (
    <div className="relative flex flex-col justify-center items-center py-4 sm:py-6 group">
      {/* Background ambient gold/blue lighting glow */}
      <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/25 via-blue-600/35 to-amber-500/20 rounded-3xl blur-3xl opacity-75 group-hover:opacity-95 transition-opacity"></div>

      {/* Book Cover Container with Natural Drop Shadow */}
      <div className="relative z-10 w-[280px] sm:w-[330px] md:w-[380px] aspect-[1/1.414] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-amber-400/40 bg-slate-950 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_25px_60px_rgba(217,119,6,0.3)]">
        <picture>
          <source srcSet={`${basePath}/cover.webp`} type="image/webp" />
          <img
            src={`${basePath}/cover.png`}
            alt="Cover Buku 300 Soal Jawab Hukum Pidana Korupsi 2026"
            className="w-full h-full object-cover object-center block select-none"
            loading="eager"
            width={1055}
            height={1491}
          />
        </picture>
        
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
      </div>

      {/* Floating Specs Pill Badge below the book */}
      <div className="relative z-10 mt-6 inline-flex items-center gap-2 bg-slate-900/90 border border-amber-400/60 text-slate-200 text-xs font-semibold px-4 py-1.5 rounded-full shadow-xl backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Edisi Master A5 • 18 BAB Lengkap • 400+ Halaman</span>
      </div>
    </div>
  );
}

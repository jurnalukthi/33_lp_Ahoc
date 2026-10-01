import { Sparkles } from "lucide-react";

export function BookMockup() {
  const basePath = process.env.NODE_ENV === "production" ? "/33_lp_Ahoc" : "";

  return (
    <div className="relative flex flex-col justify-center items-center py-4 sm:py-6 group">
      {/* Background ambient lighting glow */}
      <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/30 via-blue-500/40 to-amber-500/25 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

      {/* 3D Book Container */}
      <div className="relative z-10 flex items-center justify-center">
        
        {/* Book Hardcover & Realistic Page Edge Container */}
        <div className="relative flex items-stretch">
          
          {/* Main Book Cover */}
          <div className="relative w-[280px] sm:w-[330px] md:w-[380px] aspect-[1/1.414] rounded-r-xl rounded-l-sm overflow-hidden shadow-2xl book-shadow border-t border-r border-b border-amber-400/50 bg-slate-950 transition-transform duration-300 group-hover:scale-[1.015]">
            
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

            {/* Left Spine Texture Overlay */}
            <div className="absolute inset-y-0 left-0 w-8 sm:w-10 book-spine-effect pointer-events-none z-20"></div>

            {/* Subtle Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>
          </div>

          {/* Realistic Book Pages Edge (Right Thickness) */}
          <div 
            className="w-3.5 sm:w-4 my-1 rounded-r-sm bg-gradient-to-r from-slate-400 via-slate-100 to-slate-300 border-t border-r border-b border-slate-400/80 shadow-lg -ml-[2px] pointer-events-none z-0 opacity-95"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, #cbd5e1 0px, #cbd5e1 2px, #f1f5f9 2px, #f1f5f9 4px)"
            }}
          ></div>
        </div>

      </div>

      {/* Floating Specs Pill Badge below the book */}
      <div className="relative z-10 mt-6 inline-flex items-center gap-2 bg-slate-900/90 border border-amber-400/60 text-slate-200 text-xs font-semibold px-4 py-1.5 rounded-full shadow-xl backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Edisi Master A5 • 18 BAB Lengkap • 400+ Halaman</span>
      </div>
    </div>
  );
}

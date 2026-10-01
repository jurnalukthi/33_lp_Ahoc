import { Scale, Award, BookCheck } from "lucide-react";

export function BookMockup() {
  return (
    <div className="relative flex justify-center items-center py-6">
      {/* Background ambient lighting glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-blue-600/30 to-amber-500/10 rounded-3xl blur-2xl opacity-75"></div>

      {/* 3D Book Container */}
      <div className="relative z-10 w-[290px] sm:w-[320px] md:w-[350px] aspect-[1/1.42] rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#0e2246] via-[#132c58] to-[#09152b] border-t border-r border-b border-amber-500/40 p-6 sm:p-7 flex flex-col justify-between book-shadow text-white relative overflow-hidden select-none">
        
        {/* Left Book Spine Effect Overlay */}
        <div className="absolute inset-y-0 left-0 w-8 book-spine-effect pointer-events-none"></div>

        {/* Realistic Book Bookmark Ribbon (Red/Burgundy) */}
        <div className="absolute -top-1 right-8 w-5 h-12 bg-red-700 shadow-md flex flex-col justify-end items-center z-20">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[8px] border-b-[#0e2246]"></div>
        </div>

        {/* Top Header Badge on Book Cover */}
        <div className="relative z-10 text-center pt-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-400/50 text-amber-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Award className="w-3 h-3 text-amber-400" />
            <span>Referensi Komprehensif 2026</span>
          </div>
          
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mb-3"></div>

          {/* Book Title */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif-title leading-tight drop-shadow-sm">
            300 SOAL JAWAB
          </h2>
          <div className="text-sm sm:text-base font-serif-title font-bold text-amber-400 mt-1 tracking-wide uppercase">
            Hukum Pidana Korupsi
          </div>
          <div className="text-[11px] font-sans font-semibold text-amber-200/90 tracking-widest mt-0.5">
            UPDATE KUHP NASIONAL 2026
          </div>
        </div>

        {/* Center Emblem (Gold Scales of Justice) */}
        <div className="relative z-10 my-auto py-3 flex flex-col items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-700/10 border-2 border-amber-400/60 flex items-center justify-center shadow-inner shadow-amber-900/40">
            <Scale className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400" />
          </div>
          <div className="text-center mt-3 max-w-[240px]">
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
              Panduan Praktis & Uji Kompetensi
            </p>
            <p className="text-[10px] text-amber-300/80 font-medium mt-0.5">
              Mahasiswa • Advokat • Calon Hakim Ad Hoc
            </p>
          </div>
        </div>

        {/* Bottom Feature Badges on Cover */}
        <div className="relative z-10 border-t border-slate-700/60 pt-3">
          <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] sm:text-[10px] text-slate-300">
            <div className="bg-slate-900/60 border border-slate-700/50 rounded py-1 px-1">
              <span className="font-bold text-amber-400 block">18 BAB</span>
              Materi Lengkap
            </div>
            <div className="bg-slate-900/60 border border-slate-700/50 rounded py-1 px-1">
              <span className="font-bold text-amber-400 block">20 Diagram</span>
              Alur Logika
            </div>
            <div className="bg-slate-900/60 border border-slate-700/50 rounded py-1 px-1">
              <span className="font-bold text-amber-400 block">IRAC</span>
              Metode Ujian
            </div>
          </div>
          <div className="mt-2 text-center text-[9px] text-slate-400 tracking-wider font-medium">
            TIM PENYUSUN • EDISI REVISI 2026
          </div>
        </div>

        {/* Gold Border Trims */}
        <div className="absolute inset-2 border border-amber-400/20 rounded-r-xl rounded-l pointer-events-none"></div>
      </div>
    </div>
  );
}

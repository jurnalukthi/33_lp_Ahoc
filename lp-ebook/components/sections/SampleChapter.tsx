"use client";

import { FileDown, BookMarked } from "lucide-react";
import { getBasePath } from "@/lib/config";

export function SampleChapter() {
  const basePath = getBasePath();
  const pdfUrl = `${basePath}/sampel_main.pdf`;

  return (
    <section id="sampel-bab" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-950 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <BookMarked className="w-4 h-4 text-blue-800" />
            <span>LIHAT SAMPEL EKSKLUSIF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            Rasakan Kualitas Isi Buku
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Akses sampel bab lengkap untuk mengevaluasi metode penyajian, kedalaman analisis, dan relevansi contoh kasus yang kami tawarkan.
          </p>
        </div>

        {/* Sample Preview Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-blue-900 flex items-center justify-center shadow-md">
                  <FileDown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-title mb-2">
                  Sampel Bab Lengkap (PDF)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Unduh atau buka preview sampel bab eksklusif yang mencakup materi inti, contoh soal bergambar, dan analisis jawaban mendalam.
                </p>
                
                {/* Button */}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-bold text-sm rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
                >
                  <span>Lihat Preview</span>
                  <FileDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
              Format PDF
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
              Buka di Tab Baru
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
              Gratis Akses
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

import { CheckCircle2, PackageCheck } from "lucide-react";
import { whatYouGetList } from "@/data/features";

export function WhatYouGet() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <PackageCheck className="w-4 h-4 text-emerald-700" />
            <span>KONTEN & MATERI TERMASUK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            Apa Saja yang Anda Dapatkan?
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Paket belajar tuntas dan referensi hukum terintegrasi dalam satu karya komprehensif.
          </p>
        </div>

        {/* 10-Item Structured Checklist Box */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border-2 border-slate-200 shadow-md">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {whatYouGetList.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3.5 p-2 rounded-lg hover:bg-white transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xs text-slate-500">
              * Seluruh materi dirancang berdasarkan ketentuan hukum positif yang berlaku aktif di Indonesia tahun 2026.
            </div>
            <a
              href="#harga"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shrink-0 shadow-sm transition-colors cursor-pointer"
            >
              <span>Lihat Paket Pembelian</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

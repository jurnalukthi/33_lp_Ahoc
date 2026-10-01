"use client";

import { useState } from "react";
import { ChevronDown, BookOpen, Search, Layers, CheckCircle } from "lucide-react";
import { chapters } from "@/data/chapters";

export function TableOfContents() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openChapters, setOpenChapters] = useState<number[]>([1, 2]); // default open first two

  const toggleChapter = (num: number) => {
    if (openChapters.includes(num)) {
      setOpenChapters(openChapters.filter((n) => n !== num));
    } else {
      setOpenChapters([...openChapters, num]);
    }
  };

  const expandAll = () => {
    setOpenChapters(chapters.map((c) => c.number));
  };

  const collapseAll = () => {
    setOpenChapters([]);
  };

  const filteredChapters = chapters.filter((chapter) => {
    const matchesCategory =
      activeCategory === "all" || chapter.category === activeCategory;
    const matchesSearch =
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.highlights.some((h) =>
        h.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="daftar-isi" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-950 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <BookOpen className="w-4 h-4 text-blue-800" />
            <span>KURIKULUM KOMPREHENSIF 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            Daftar Isi 18 BAB Lengkap
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Menjangkau seluruh spektrum hukum pidana korupsi: mulai dari teori dasar, kodifikasi KUHP Nasional, pembuktian, delik korporasi, hingga pedoman putusan hakim.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari topik materi (contoh: Lex Mitior, TPPU, Kerugian Negara, IRAC, PERMA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent shadow-sm"
            />
          </div>

          {/* Category Filter Pills & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Semua 18 BAB
              </button>
              <button
                onClick={() => setActiveCategory("materiil")}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeCategory === "materiil"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Hukum Materiil & KUHP
              </button>
              <button
                onClick={() => setActiveCategory("formil")}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeCategory === "formil"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Hukum Acara & Pembuktian
              </button>
              <button
                onClick={() => setActiveCategory("delik")}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeCategory === "delik"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Delik Khusus & TPPU
              </button>
              <button
                onClick={() => setActiveCategory("peradilan")}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeCategory === "peradilan"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Peradilan & Putusan
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <button
                onClick={expandAll}
                className="hover:text-blue-900 underline cursor-pointer"
              >
                Buka Semua
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-blue-900 underline cursor-pointer"
              >
                Tutup Semua
              </button>
            </div>
          </div>

        </div>

        {/* Chapters Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredChapters.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500 border border-slate-200">
              Tidak ada bab yang cocok dengan pencarian "{searchQuery}".
            </div>
          ) : (
            filteredChapters.map((chapter) => {
              const isOpen = openChapters.includes(chapter.number);
              return (
                <div
                  key={chapter.number}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleChapter(chapter.number)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 pr-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-900 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                        {chapter.number.toString().padStart(2, "0")}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-700 tracking-wider uppercase mb-0.5">
                          BAB {chapter.number}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-title leading-tight">
                          {chapter.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-blue-50 text-blue-900" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-sm text-slate-600 leading-relaxed pt-2">
                        {chapter.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-200/60">
                        <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-800" />
                          <span>Fokus Pembahasan & Kisi-kisi Soal:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {chapter.highlights.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white text-slate-800 border border-slate-200/90 rounded-md px-2.5 py-1 flex items-center gap-1"
                            >
                              <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Backmatter & Bonus Material Notification */}
        <div className="max-w-4xl mx-auto mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs sm:text-sm text-amber-950 flex items-start sm:items-center gap-3">
          <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Materi Lampiran Tambahan (Backmatter):</strong> Dilengkapi Lembar Ringkasan Pasal Krusial, Tabel Pemetaan Komparasi Pasal Lama vs Baru, Linimasa Transisi 2026, dan Glosarium Istilah Tipikor.
          </p>
        </div>

      </div>
    </section>
  );
}

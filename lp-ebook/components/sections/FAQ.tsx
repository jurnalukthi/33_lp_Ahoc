"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-4 h-4 text-slate-700" />
            <span>TANYA JAWAB UMUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Klarifikasi lengkap mengenai materi, format file, aksesibilitas, dan tata cara transaksi.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/60 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-900 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

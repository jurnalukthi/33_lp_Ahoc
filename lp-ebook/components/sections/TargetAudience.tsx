import { GraduationCap, Scale, Gavel, AlertCircle, CheckCircle2 } from "lucide-react";
import { audienceSegments } from "@/data/targetAudience";

export function TargetAudience() {
  const getIcon = (name: string) => {
    switch (name) {
      case "GraduationCap":
        return <GraduationCap className="w-7 h-7 text-blue-800" />;
      case "Scale":
        return <Scale className="w-7 h-7 text-amber-700" />;
      case "Gavel":
        return <Gavel className="w-7 h-7 text-indigo-800" />;
      default:
        return <Scale className="w-7 h-7 text-blue-800" />;
    }
  };

  return (
    <section id="target-pembaca" className="py-16 md:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-slate-200 border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <span>TARGET PEMBACA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            Untuk Siapa Buku Ini Dirancang Khusus?
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Menjawab secara terarah tantangan spesifik yang dihadapi akademisi, advokat pembela, dan calon penegak hukum peradilan tipikor.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {audienceSegments.map((segment) => (
            <div
              key={segment.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner">
                    {getIcon(segment.iconName)}
                  </div>
                  <span className="text-xs font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                    {segment.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-serif-title mb-2">
                  {segment.role}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {segment.tagline}
                </p>

                {/* Tantangan / Pain Points */}
                <div className="space-y-3 mb-6 bg-red-50/70 border border-red-200/60 rounded-xl p-4">
                  <div className="text-xs font-bold text-red-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                    <span>Tantangan Utama:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-red-950">
                    {segment.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-700 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solusi Buku */}
                <div className="space-y-3 bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-4">
                  <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Solusi dari Buku Ini:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-950">
                    {segment.solutions.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <a
                  href="#harga"
                  className="text-xs font-bold text-blue-900 hover:text-blue-700 underline"
                >
                  Pilih Paket Sesuai Kebutuhan →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

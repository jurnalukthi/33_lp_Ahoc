import { ShieldCheck, GitBranch, Workflow, Map, Award, CheckCircle2 } from "lucide-react";
import { features } from "@/data/features";

export function Features() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      case "GitBranch":
        return <GitBranch className="w-6 h-6 text-blue-700" />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-blue-700" />;
      case "Map":
        return <Map className="w-6 h-6 text-blue-700" />;
      case "Award":
        return <Award className="w-6 h-6 text-blue-700" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <span>KEUNGGULAN UTAMA BUKU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            5 Pilar Keunggulan yang Membedakan Buku Ini
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Disusun secara metodologis untuk menjawab kebutuhan riil studi akademis, penyusunan berkas perkara advokat, dan persiapan seleksi hakim tipikor.
          </p>
        </div>

        {/* 5 Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300/60 px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif-title mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feature.stats}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

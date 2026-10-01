import { BookMarked, CheckCircle2, Clock, Scale, Lightbulb } from "lucide-react";

export function ExamStrategy() {
  const iracSteps = [
    {
      letter: "I",
      name: "Issue (Isu Hukum)",
      desc: "Merumuskan persoalan hukum utama secara presisi dalam 1 kalimat tanpa mengulang fakta cerita.",
      example: "Apakah tindakan Kepala Dinas menyetujui izin dengan imbalan memenuhi unsur Pasal 604 KUHP Nasional?"
    },
    {
      letter: "R",
      name: "Rule (Aturan Hukum & Unsur)",
      desc: "Menguraikan dasar pasal yang relevan beserta seluruh unsur objektif dan subjektif secara sistematis.",
      example: "Pasal 604 KUHP: (1) Pejabat pembuat keputusan, (2) Menyalahgunakan wewenang, (3) Menguntungkan diri sendiri/orang lain, (4) Merugikan keuangan negara."
    },
    {
      letter: "A",
      name: "Application (Penerapan Fakta)",
      desc: "Mengkorelasikan setiap unsur pasal dengan bukti dan fakta konkret yang ada dalam studi kasus.",
      example: "Ad.1 Terbukti pejabat izin; Ad.2 Menyetujui tanpa syarat teknis (melawan hukum); Ad.3 Menerima suap Rp500 juta; Ad.4 Kerugian audit Rp2M."
    },
    {
      letter: "C",
      name: "Conclusion (Kesimpulan Tegas)",
      desc: "Menjawab pertanyaan hukum awal secara lugas, tegas, dan disertai implikasi yuridis sanksi pemidanaan.",
      example: "Perbuatan terdakwa terbukti secara sah dan meyakinkan memenuhi seluruh unsur Pasal 604 KUHP Nasional sehingga dapat dipidana."
    }
  ];

  return (
    <section id="strategi-ujian" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            <BookMarked className="w-4 h-4 text-indigo-700" />
            <span>METODOLOGI UJIAN PROFESI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900">
            Kuasai Framework Analisis Hukum Standar IRAC
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Buku ini tidak hanya menyediakan kunci jawaban, tetapi melatih pola pikir penalaran hukum berstandar internasional melalui metode <strong className="text-slate-900 font-semibold">IRAC (Issue, Rule, Application, Conclusion)</strong>.
          </p>
        </div>

        {/* IRAC 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {iracSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 font-serif-title text-2xl font-black flex items-center justify-center mb-4 shadow-sm">
                  {step.letter}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-serif-title">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-slate-200 text-[11px] text-slate-700 italic border-l-4 border-l-amber-500">
                <span className="font-semibold text-slate-900 block not-italic mb-0.5">Contoh Aplikasi:</span>
                "{step.example}"
              </div>
            </div>
          ))}
        </div>

        {/* Exam Tips Highlights Box */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-7 sm:p-10 border border-slate-800 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-800/80 border border-blue-600/40 text-blue-200 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-amber-400 font-serif-title mb-1">
                  3 Kategori Pola Soal Ujian
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Soal Analisis Unsur Delik, Soal Komparasi Hukum Transisi (Lex Mitior), dan Soal Penerapan Prinsip Pertanggungjawaban Pidana.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-800/80 border border-blue-600/40 text-blue-200 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-amber-400 font-serif-title mb-1">
                  Strategi Manajemen Waktu 3 Putaran
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Teknik alokasi waktu ujian tertulis: Putaran 1 (soal cepat), Putaran 2 (analisis sedang), dan Putaran 3 (kasus kompleks & pembuktian).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-800/80 border border-blue-600/40 text-blue-200 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-amber-400 font-serif-title mb-1">
                  Hierarki Rujukan Sumber Hukum
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Panduan tepat mencantumkan dasar hukum: KUHP Nasional 2026, UU Tipikor, UU Administrasi Pemerintahan, UU TPPU, dan Yurisprudensi MA.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

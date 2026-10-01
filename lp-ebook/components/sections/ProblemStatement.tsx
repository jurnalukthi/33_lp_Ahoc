import { AlertTriangle, BookOpenCheck, Scale, FileText, CheckCircle } from "lucide-react";

export function ProblemStatement() {
  return (
    <section className="py-16 md:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>ERA TRANSISI KUHP NASIONAL 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-title text-slate-900 leading-tight">
            Tantangan Baru Penegakan Hukum & Ujian di Tahun 2026
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Berlakunya <strong className="text-slate-900 font-semibold">UU No. 1 Tahun 2023</strong> membawa pergeseran fundamental dalam penanganan tindak pidana korupsi di Indonesia. Apakah Anda sudah menguasai konsekuensi yuridisnya?
          </p>
        </div>

        {/* 3 Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center font-bold mb-5">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-title mb-2">
                Harmonisasi Pasal 603 & 604 vs UU Tipikor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bagaimana batasan delik korupsi dalam KUHP baru disinkronkan dengan UU No. 31/1999 jo. UU 20/2001? Kapan hakim wajib memberlakukan asas <em>lex mitior</em> pada perkara peralihan?
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-900 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Dibedah tuntas di BAB 02 & 06</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-bold mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-title mb-2">
                Kerugian Negara vs Batas Diskresi Pejabat
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Integrasi UU No. 30/2014 tentang Administrasi Pemerintahan dengan delik Tipikor. Menentukan batas tegas antara kesalahan administratif (maladministrasi) dan tindak pidana korupsi.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-900 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Dibedah tuntas di BAB 07 & 08</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 flex items-center justify-center font-bold mb-5">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-title mb-2">
                Tuntutan Jawaban Ujian Berstandar IRAC
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ujian advokat dan seleksi calon hakim ad hoc tidak lagi menilai hafalan pasal, melainkan kedalaman analisis yuridis, pemetaan fakta hukum, dan argumentasi putusan yang runtut.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-900 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Dilengkapi panduan IRAC & Peta Konsep</span>
            </div>
          </div>

        </div>

        {/* Solusi Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-2xl p-8 md:p-10 shadow-xl border border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold font-serif-title text-amber-400">
              Solusi Tepat: 300 Soal Jawab Sistematis & Siap Pakai
            </h4>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl">
              Buku ini menyajikan intisari pemahaman hukum pidana korupsi dalam format tanya-jawab praktis, didukung 50 rujukan silang dan 20 diagram alur logika.
            </p>
          </div>
          <a
            href="#daftar-isi"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors shrink-0 text-sm"
          >
            <span>Lihat 18 BAB Lengkap</span>
          </a>
        </div>

      </div>
    </section>
  );
}

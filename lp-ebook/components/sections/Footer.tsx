import { Scale, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070e1c] text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Synopsis */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-white font-bold font-serif-title text-base tracking-wide">
                TIPIKOR 2026 • REFERENSI HUKUM
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Karya referensi komprehensif memuat 300 soal jawab, analisis pemetaan pasal KUHP Nasional (UU No. 1/2023), 20 diagram alur pembuktian, dan kerangka analisis IRAC untuk persiapan ujian serta praktik peradilan.
            </p>
          </div>

          {/* Col 2: Spesifikasi Buku */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Spesifikasi Karya
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Format: A5 Digital / PDF</li>
              <li>• Jumlah: 18 BAB Lengkap</li>
              <li>• Muatan: 300 Soal Jawab & Pembahasan</li>
              <li>• Tambahan: 20 Diagram & 50 Rujukan Silang</li>
              <li>• Edisi: Transisi KUHP Nasional 2026</li>
            </ul>
          </div>

          {/* Col 3: Navigasi & Bantuan */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Informasi & Tautan
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#keunggulan" className="hover:text-amber-400 transition-colors">
                  Keunggulan Buku
                </a>
              </li>
              <li>
                <a href="#daftar-isi" className="hover:text-amber-400 transition-colors">
                  Daftar Isi 18 BAB
                </a>
              </li>
              <li>
                <a href="#strategi-ujian" className="hover:text-amber-400 transition-colors">
                  Metode IRAC & Ujian
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-amber-400 transition-colors">
                  Pilihan Paket & Pembelian
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Pusat Bantuan & FAQ
                </a>
              </li>
              <li>
                <a href="/transaksi" className="text-amber-400/90 hover:text-amber-300 font-semibold transition-colors">
                  Hak Akses & Transaksi Terbaru
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} Tim Penyusun. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span>Transaksi Resmi via Platform Lynk</span>
            <span>•</span>
            <span>Privasi & Keamanan Terjamin</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[var(--color-foreground)] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">300 Soal Jawab Hukum Pidana Korupsi 2026</h3>
            <p className="text-sm opacity-80">
              Referensi komprehensif untuk mahasiswa, advokat, dan calon hakim ad hoc Pengadilan Tindak Pidana Korupsi.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tentang Buku</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>18 BAB Lengkap</li>
              <li>300 Soal Jawab Tervalidasi</li>
              <li>Update KUHP Nasional 2026</li>
              <li>Format: A5, 400+ halaman</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
              <li>Panduan Pembelian</li>
              <li>Kontak</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-70">
          <p>&copy; {currentYear} Tim Penyusun. Semua hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}

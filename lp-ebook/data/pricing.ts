export interface PricingPackage {
  id: "online" | "pdf";
  title: string;
  badge: string;
  badgeType: "primary" | "gold";
  isPopular?: boolean;
  originalPrice: number;
  promoPrice: number;
  discountPercentage: number;
  savingsText: string;
  description: string;
  accessType: string;
  features: string[];
  ctaText: string;
  ctaSubtext: string;
  ctaUrl: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "online",
    title: "Baca Online di Lynk",
    badge: "Pilihan Ekonomis",
    badgeType: "primary",
    isPopular: false,
    originalPrice: 112500,
    promoPrice: 45000,
    discountPercentage: 60,
    savingsText: "Hemat Rp 67.500",
    description: "Cocok untuk mahasiswa dan pembelajar yang membutuhkan akses cepat & praktis langsung dari browser.",
    accessType: "Streaming Online via Platform Lynk",
    features: [
      "Akses baca langsung di platform Lynk",
      "Kompatibel untuk HP, Tablet, Laptop & PC",
      "Akses instan dalam hitungan detik pasca pembayaran",
      "18 BAB & 300 Soal Jawab Lengkap",
      "Navigasi bab & peta konsep terintegrasi",
      "Hemat biaya untuk studi fleksibel"
    ],
    ctaText: "Mulai Baca Online",
    ctaSubtext: "Akses instan di browser melalui platform Lynk",
    ctaUrl: "https://lynk.id/" // Update with actual Lynk URL
  },
  {
    id: "pdf",
    title: "Ebook PDF Lengkap (Full Download)",
    badge: "Paling Populer & Rekomendasi",
    badgeType: "gold",
    isPopular: true,
    originalPrice: 362500,
    promoPrice: 145000,
    discountPercentage: 60,
    savingsText: "Hemat Rp 217.500",
    description: "Pilihan utama advokat, calon hakim ad hoc, dan praktisi yang menginginkan kepemilikan file penuh selamanya.",
    accessType: "Unduh File PDF High-Resolution (Offline Selamanya)",
    features: [
      "Unduh file PDF master kualitas tinggi (Format A5 Standar)",
      "Akses offline 100% selamanya tanpa batas kuota/koneksi",
      "Bebas dicetak (print) untuk bahan belajar pribadi",
      "Dapat dibaca di Adobe Reader, GoodNotes, Notability, Foxit, dll.",
      "Dilengkapi Bookmarks navigasi & pencarian teks (searchable PDF)",
      "Seluruh 18 BAB + 20 Diagram + 50 Cross-Ref + Glosarium",
      "Arsip pribadi permanen seumur hidup"
    ],
    ctaText: "Download Ebook PDF Sekarang",
    ctaSubtext: "Dapatkan file PDF permanen langsung ke email Anda",
    ctaUrl: "https://lynk.id/" // Update with actual Lynk URL
  }
];

export const comparisonFeatures = [
  { feature: "Harga Normal", online: "Rp 112.500", pdf: "Rp 362.500" },
  { feature: "Harga Promo Peluncuran (Diskon 60%)", online: "Rp 45.000", pdf: "Rp 145.000", isHighlight: true },
  { feature: "Materi 300 Soal Jawab & 18 BAB Lengkap", online: "Ya (Lengkap)", pdf: "Ya (Lengkap)" },
  { feature: "20 Diagram Alur & 50 Rujukan Silang", online: "Ya", pdf: "Ya" },
  { feature: "Panduan Analisis IRAC & Peta Konsep", online: "Ya", pdf: "Ya" },
  { feature: "Akses Offline Tanpa Internet", online: "Terbatas di Platform", pdf: "Ya, 100% Offline Selamanya", isHighlight: true },
  { feature: "Hak Cetak Dokumen (Printing)", online: "Tidak", pdf: "Boleh untuk Keperluan Pribadi" },
  { feature: "Membuka di Aplikasi Catatan (GoodNotes, dll)", online: "Tidak", pdf: "Ya, Sangat Mendukung" },
  { feature: "Masa Berlaku Akses", online: "Sesuai Akun Lynk", pdf: "Permanen Seumur Hidup (Milik Pribadi)", isHighlight: true },
  { feature: "Kecepatan Akses Awal", online: "Langsung di Browser", pdf: "Unduh Sekali, Simpan Selamanya" }
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

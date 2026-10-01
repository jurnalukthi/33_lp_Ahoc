export const pricing = {
  online: {
    name: "Baca Online",
    normalPrice: 112500,
    salePrice: 45000,
    discount: 60,
    features: [
      "Akses multi-device via platform Lynk",
      "Mulai belajar dalam 1 menit",
      "Akses streaming konten",
      "Update otomatis (jika ada)",
      "Hemat biaya untuk akses praktis"
    ],
    cta: "Baca Online",
    ctaUrl: "#", // Will be updated with actual Lynk URL
    type: "online"
  },
  pdf: {
    name: "Beli PDF",
    normalPrice: 362500,
    salePrice: 145000,
    discount: 60,
    features: [
      "Download file PDF lengkap",
      "Akses offline selamanya",
      "Bisa dicetak untuk keperluan pribadi",
      "Akses di semua device",
      "Arsip permanen tanpa batas waktu"
    ],
    cta: "Beli & Download PDF",
    ctaUrl: "#", // Will be updated with actual Lynk URL
    type: "pdf"
  }
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b1528",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "300 Soal Jawab Hukum Pidana Korupsi 2026 | Referensi KUHP Nasional",
  description:
    "Buku referensi komprehensif 300 soal jawab tindak pidana korupsi update KUHP Nasional 2026 (UU No. 1/2023). Dilengkapi 20 diagram alur, 50 rujukan silang, peta konsep per bab, dan metode analisis IRAC untuk Mahasiswa, Advokat, dan Calon Hakim Ad Hoc Tipikor.",
  keywords: [
    "hukum pidana korupsi 2026",
    "KUHP Nasional 2026",
    "UU No 1 Tahun 2023",
    "buku tipikor",
    "soal jawab korupsi",
    "persiapan ujian advokat",
    "calon hakim ad hoc tipikor",
    "pasal 603 604 KUHP",
    "asas lex mitior",
    "metode IRAC hukum",
    "uang pengganti dan asset recovery",
    "TPPU korupsi"
  ],
  authors: [{ name: "Tim Penyusun" }],
  openGraph: {
    title: "300 Soal Jawab Hukum Pidana Korupsi 2026",
    description:
      "Panduan & Referensi Komprehensif Transisi KUHP Nasional untuk Mahasiswa Hukum, Advokat, dan Calon Hakim Ad Hoc Tipikor.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "300 Soal Jawab Hukum Pidana Korupsi 2026",
    description:
      "Panduan & Referensi Komprehensif Transisi KUHP Nasional untuk Mahasiswa Hukum, Advokat, dan Calon Hakim Ad Hoc Tipikor.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

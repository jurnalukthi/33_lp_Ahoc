import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "300 Soal Jawab Hukum Pidana Korupsi 2026 | Referensi KUHP Nasional",
  description: "Buku komprehensif 300 soal jawab tindak pidana korupsi update KUHP Nasional 2026. Lengkap dengan 20 diagram alur, 50 rujukan silang, peta konsep, strategi ujian IRAC. Untuk mahasiswa hukum, advokat, calon hakim ad hoc.",
  keywords: ["hukum pidana korupsi 2026", "KUHP Nasional 2026", "buku tipikor", "soal jawab korupsi", "referensi hukum korupsi", "persiapan ujian advokat", "calon hakim ad hoc tipikor", "pasal 603 604 KUHP", "lex mitior", "UU pemberantasan korupsi"],
  authors: [{ name: "Tim Penyusun" }],
  openGraph: {
    title: "300 Soal Jawab Hukum Pidana Korupsi 2026",
    description: "Referensi komprehensif untuk mahasiswa, advokat & calon hakim ad hoc. Update KUHP Nasional 2026.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "300 Soal Jawab Hukum Pidana Korupsi 2026",
    description: "Referensi komprehensif untuk mahasiswa, advokat & calon hakim ad hoc. Update KUHP Nasional 2026.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

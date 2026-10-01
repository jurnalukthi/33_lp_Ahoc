export interface Feature {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: string;
  stats: string;
}

export const features: Feature[] = [
  {
    id: "validated",
    badge: "Akurasi Yuridis",
    title: "Konten Tervalidasi Hukum Positif 2026",
    description: "Setiap butir jawaban telah melalui pengujian ketat terhadap kebenaran dasar hukum, akurasi pemetaan pasal, dan konsistensi terminologi KUHP Nasional (UU 1/2023).",
    icon: "ShieldCheck",
    stats: "100% Sesuai Regulasi 2026"
  },
  {
    id: "cross-reference",
    badge: "Studi Terintegrasi",
    title: "50 Rujukan Silang Strategis",
    description: "Konektivitas lintas bab yang mengaitkan hukum materiil, hukum formil, hingga pedoman pemidanaan untuk pemahaman sistematis tanpa fragmentasi materi.",
    icon: "GitBranch",
    stats: "50+ Cross-References"
  },
  {
    id: "diagrams",
    badge: "Visualisasi Interaktif",
    title: "20 Diagram Alur Logika Hukum",
    description: "Memudahkan pemahaman alur pembuktian delik rumit, alur transisi tempus delicti, penelusuran aset hasil korupsi, dan mekanisme peradilan tipikor.",
    icon: "Workflow",
    stats: "20 Diagram Alur"
  },
  {
    id: "concept-map",
    badge: "Struktur Cepat",
    title: "Peta Konsep di Setiap BAB",
    description: "Ringkasan skematis di setiap awal bab memudahkan pengulangan materi (quick review), mempertajam navigasi topik, dan menguatkan daya ingat ujian.",
    icon: "Map",
    stats: "18 Peta Konsep BAB"
  },
  {
    id: "bonus",
    badge: "Materi Tambahan",
    title: "Pedoman Analisis IRAC & Linimasa 2026",
    description: "Dilengkapi panduan menjawab studi kasus hukum dengan metode standar internasional IRAC (Issue, Rule, Application, Conclusion) serta tabel linimasa transisi 2026.",
    icon: "Award",
    stats: "Framework IRAC Eksklusif"
  }
];

export const whatYouGetList = [
  "300 Soal & Jawaban komprehensif berlandaskan hukum materiil dan formil 2026",
  "18 BAB Terstruktur mencakup seluruh materi seleksi Hakim Ad Hoc & Advokat",
  "Analisis komparasi KUHP Lama vs KUHP Baru (Pasal 603 & Pasal 604 UU 1/2023)",
  "Penerapan asas Lex Mitior dalam masa transisi penegakan hukum",
  "50 Rujukan silang (cross-references) antar-konsep hukum strategis",
  "20 Diagram alur visualisasi pembuktian dan penelusuran aset (asset recovery)",
  "18 Peta konsep skematis untuk tinjauan cepat per bab",
  "Panduan dan template penyusunan jawaban analisis hukum metode IRAC",
  "Tabel ringkasan pasal krusial dan pemetaan sanksi pemidanaan",
  "Glosarium istilah hukum pidana korupsi lengkap & terkini"
];

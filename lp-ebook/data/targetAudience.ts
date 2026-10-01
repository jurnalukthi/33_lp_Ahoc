export interface AudienceSegment {
  id: string;
  role: string;
  tagline: string;
  badge: string;
  iconName: string;
  painPoints: string[];
  solutions: string[];
}

export const audienceSegments: AudienceSegment[] = [
  {
    id: "mahasiswa",
    role: "Mahasiswa Hukum (S1 & S2)",
    tagline: "Kuasai materi perkuliahan hukum pidana khusus dan persiapan ujian komprehensif.",
    badge: "Akademisi & Peneliti",
    iconName: "GraduationCap",
    painPoints: [
      "Kebingungan membedakan delik Tipikor lama vs ketentuan KUHP Nasional 2026",
      "Kebutuhan referensi valid untuk penulisan skripsi, tesis, atau karya ilmiah",
      "Ketiadaan contoh konkrit perumusan jawaban analisis kasus ujian hukum"
    ],
    solutions: [
      "300 studi kasus soal jawab mempermudah pemahaman konsep abstrak",
      "Rujukan pasal dan doktrin hukum tervalidasi yang siap disitasi",
      "Metode IRAC melatih penalaran hukum berstandar akademis tinggi"
    ]
  },
  {
    id: "advokat",
    role: "Advokat & Praktisi Hukum",
    tagline: "Perkuat argumentasi yuridis dalam penanganan perkara tindak pidana korupsi.",
    badge: "Praktisi & Penegak Hukum",
    iconName: "Scale",
    painPoints: [
      "Tantangan menangkis dakwaan dengan asas transisi hukum dan lex mitior",
      "Kerumitan pembuktian kerugian negara dan audit BPK/BPKP di persidangan",
      "Risiko jeratan delik korporasi dan TPPU pada pembelaan klien bisnis"
    ],
    solutions: [
      "Diagram alur pembuktian membantu memetakan celah hukum dan eksepsi",
      "Analisis batas diskresi pejabat berdasarkan UU Administrasi Pemerintahan",
      "Referensi komparasi pasal untuk menyusun pleidoi dan memori banding/kasasi"
    ]
  },
  {
    id: "hakim",
    role: "Calon Hakim Ad Hoc Tipikor",
    tagline: "Persiapan intensif seleksi tertulis dan wawancara Hakim Ad Hoc Pengadilan Tipikor.",
    badge: "Calon Hakim Ad Hoc",
    iconName: "Gavel",
    painPoints: [
      "Tingginya standar seleksi uji kemampuan penalaran hukum tertulis Mahkamah Agung",
      "Kebutuhan penguasaan PERMA pedoman pemidanaan dan ratio decidendi putusan",
      "Waktu terbatas untuk mempelajari ribuan halaman regulasi yang tersebar"
    ],
    solutions: [
      "Simulasi latihan 300 soal dengan bobot materi setara uji seleksi hakim",
      "Pembahasan tuntas PERMA 1/2020, disparitas pidana, dan etika profesi hakim",
      "Strategi efisiensi waktu menjawab soal analisis unsur delik secara terstruktur"
    ]
  }
];

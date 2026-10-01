export interface Chapter {
  number: number;
  title: string;
  category: "materiil" | "formil" | "delik" | "peradilan";
  description: string;
  highlights: string[];
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Dasar-dasar Hukum Pidana",
    category: "materiil",
    description: "Fondasi fundamental hukum pidana materiil, asas legalitas, asas teritorialitas, kausalitas, dan doktrin pertanggungjawaban pidana.",
    highlights: ["Asas Legalitas & Nullum Delictum", "Ajaran Kausalitas", "Mens Rea & Actus Reus", "Alasan Penghapus Pidana"]
  },
  {
    number: 2,
    title: "KUHP Nasional (UU No. 1/2023)",
    category: "materiil",
    description: "Analisis komprehensif kodifikasi KUHP Nasional 2026, relasi Pasal 603 & 604 dengan UU Tipikor, serta dinamika masa transisi.",
    highlights: ["Pasal 603 KUHP Baru (Kerugian Negara)", "Pasal 604 KUHP Baru (Penyalahgunaan Wewenang)", "Penerapan Asas Lex Mitior", "Aturan Peralihan Pasal 613-624"]
  },
  {
    number: 3,
    title: "Hukum Acara Pidana Nasional",
    category: "formil",
    description: "Prosedur formil penegakan hukum dari tahap penyelidikan, penyidikan KPK/Kejaksaan/Polri, praperadilan, hingga penuntutan.",
    highlights: ["Kewenangan Penyidikan Bersama", "Mekanisme Praperadilan Pasca Putusan MK", "Penetapan Tersangka & Penahanan", "Surat Dakwaan Kombinasi & Alternatif"]
  },
  {
    number: 4,
    title: "Pembuktian Tindak Pidana Korupsi",
    category: "formil",
    description: "Standar pembuktian, pembuktian terbalik berimbang (shifting burden of proof), keabsahan alat bukti elektronik, dan saksi mahkota.",
    highlights: ["Beyond Reasonable Doubt", "Alat Bukti Elektronik & Forensik Digital", "Pembuktian Terbalik Gratifikasi", "Keterangan Saksi Mahkota & Justice Collaborator"]
  },
  {
    number: 5,
    title: "Pengadilan Tindak Pidana Korupsi",
    category: "peradilan",
    description: "Kewenangan absolut dan relatif Pengadilan Tipikor, komposisi majelis hakim karier dan hakim ad hoc, serta hukum acara persidangan.",
    highlights: ["Struktur Majelis Hakim Ad Hoc", "Yurisdiksi Khusus Tipikor", "Mekanisme Dissenting Opinion", "Manajemen Persidangan Perkara Korupsi"]
  },
  {
    number: 6,
    title: "Tipikor dalam Hukum Positif 2026",
    category: "delik",
    description: "Harmonisasi antara UU No. 31/1999 jo. UU No. 20/2001 dengan berlakunya Buku Kedua KUHP Nasional 2026.",
    highlights: ["Status UU Tipikor Pasca KUHP 2026", "Delik Suap Sektor Swasta", "Klausul Primat & Subsidiaritas", "Sinkronisasi Ketentuan Pidana Khusus"]
  },
  {
    number: 7,
    title: "Kerugian Keuangan Negara",
    category: "materiil",
    description: "Metodologi audit forensik, konsep kerugian nyata dan pasti (actual loss) vs potensi kerugian, serta kewenangan BPK, BPKP, dan Inspektorat.",
    highlights: ["Putusan MK No. 25/PUU-XIV/2016", "Perhitungan BPK vs BPKP", "Konsep Kerugian Perekonomian Negara", "Penyelesaian Tuntutan Ganti Rugi (TGR)"]
  },
  {
    number: 8,
    title: "Penyalahgunaan Wewenang",
    category: "materiil",
    description: "Batasan diskresi pejabat publik, integrasi Pasal 17-21 UU No. 30/2014 tentang Administrasi Pemerintahan dengan unsur Pasal 3 UU Tipikor / Pasal 604 KUHP.",
    highlights: ["Uji Penyalahgunaan Wewenang via PTUN", "Asas-Asas Umum Pemerintahan yang Baik (AUPB)", "Batas Diskresi & Pertanggungjawaban Pidana", "Perbedaan Maladministrasi vs Tipikor"]
  },
  {
    number: 9,
    title: "Suap, Gratifikasi, dan Delik Korupsi Lain",
    category: "delik",
    description: "Pembedaan yuridis antara suap aktif/pasif, gratifikasi (Pasal 12B), pemerasan dalam jabatan (knevelarij), dan benturan kepentingan dalam pengadaan.",
    highlights: ["Batas Waktu Pelaporan Gratifikasi 30 Hari", "Unsur Menerima Janji atau Hadiah", "Pemerasan Jabatan vs Suap", "Conflict of Interest PBJ Pemerintah"]
  },
  {
    number: 10,
    title: "Korporasi sebagai Subjek Tindak Pidana",
    category: "delik",
    description: "Doktrin pertanggungjawaban pidana korporasi, PERMA No. 13 Tahun 2016, vicarious liability, identification doctrine, dan kriteria kesalahan korporasi.",
    highlights: ["PERMA 13/2016 tentang Pidana Korporasi", "Direct Corporate Liability", "Pidana Tambahan Pembubaran & Ganti Rugi", "Manajemen Anti-Penyuapan (ISO 37001)"]
  },
  {
    number: 11,
    title: "Tindak Pidana Pencucian Uang (TPPU)",
    category: "delik",
    description: "Penerapan UU No. 8 Tahun 2010 dalam perkara korupsi, pelacakan tindak pidana asal (predicate crime), follow the money, dan transaksi keuangan mencurigakan.",
    highlights: ["TPPU Tanpa Harus Membuktikan Pidana Asal Dahulu", "Pasal 3, 4, 5 UU TPPU", "Peran LHA PPATK dalam Penyidikan", "Beneficial Ownership Transparency"]
  },
  {
    number: 12,
    title: "Uang Pengganti dan Asset Recovery",
    category: "materiil",
    description: "Instrumen perampasan aset hasil kejahatan, eksekusi pidana pembayaran uang pengganti, penyitaan aset di luar negeri, dan Non-Conviction Based Asset Forfeiture.",
    highlights: ["Mekanisme Sita Eksekusi Harta Terpidana", "Subsidiaritas Pidana Penjara Pengganti", "Mutual Legal Assistance (MLA)", "Pemulihan Kerugian Keuangan Negara"]
  },
  {
    number: 13,
    title: "Pemidanaan & Pedoman Penjatuhan Sanksi",
    category: "peradilan",
    description: "Teori tujuan pemidanaan integratif dalam KUHP 2026, pedoman penjatuhan pidana penjara, denda kumulatif, pidana pengawasan, dan kerja sosial.",
    highlights: ["Tujuan Pemidanaan KUHP Nasional (Pasal 51-54)", "Modifikasi Pidana Penjara Seumur Hidup", "Kategori Denda I s.d. VIII", "Pertimbangan Meringankan & Memberatkan"]
  },
  {
    number: 14,
    title: "PERMA dan Pedoman Pemidanaan Tipikor",
    category: "peradilan",
    description: "Kajian mendalam PERMA No. 1 Tahun 2020 tentang Pedoman Pemidanaan Pasal 2 dan Pasal 3 UU Tipikor guna menghindari disparitas putusan.",
    highlights: ["Matriks Kategori Kerugian & Tingkat Kesalahan", "Rentang Penjatuhan Pidana PERMA 1/2020", "Penerapan pada Pelaku Utama vs Turut Serta", "Standarisasi Amar Putusan Pemidanaan"]
  },
  {
    number: 15,
    title: "Putusan Hakim Tipikor",
    category: "peradilan",
    description: "Sistematika penyusunan putusan pemidanaan (veroordeling), bebas (vrijspraak), lepas dari tuntutan hukum (onsslag), dan pertimbangan ratio decidendi.",
    highlights: ["Ratio Decidendi Putusan Tipikor", "Konstruksi Amar Putusan Berkekuatan Eksekutorial", "Putusan Bebas vs Lepas dari Segala Tuntutan", "Pertimbangan Keadilan Substantif"]
  },
  {
    number: 16,
    title: "Upaya Hukum (Banding, Kasasi, PK)",
    category: "formil",
    description: "Prosedur dan syarat formil pengajuan memori banding ke Pengadilan Tinggi Tipikor, kasasi ke Mahkamah Agung, dan Peninjauan Kembali (PK).",
    highlights: ["Alasan Kasasi Judex Facti vs Judex Juris", "Novum dalam Peninjauan Kembali (PK)", "Batas Waktu Upaya Hukum Formil", "Pemeriksaan Kasasi Demi Kepentingan Hukum"]
  },
  {
    number: 17,
    title: "Etika dan Kode Etik Hakim (KEPPH)",
    category: "peradilan",
    description: "Kode Etik dan Pedoman Perilaku Hakim (KEPPH), peran Komisi Yudisial & Majelis Kehormatan Hakim, serta integritas moral hakim ad hoc.",
    highlights: ["10 Prinsip Dasar Perilaku Hakim", "Penanganan Benturan Kepentingan di Persidangan", "Mekanisme Sidang Majelis Kehormatan Hakim (MKH)", "Independensi Peradilan Tipikor"]
  },
  {
    number: 18,
    title: "Perkembangan Hukum Terkini 2026",
    category: "delik",
    description: "Isu kontemporer penegakan hukum tipikor 2026: korupsi digital, cryptocurrency, yurisprudensi penting Mahkamah Agung, dan tren peradilan.",
    highlights: ["Penelusuran Aset Kripto & Aset Virtual", "Yurisprudensi MA Terkini (2024-2026)", "Tantangan Penegakan Hukum Pasca Transisi", "Benchmarking Kasus Landmark Tipikor"]
  }
];

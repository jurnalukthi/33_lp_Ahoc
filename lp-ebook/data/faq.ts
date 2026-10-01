export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "diff-online-pdf",
    category: "Format & Akses",
    question: "Apa perbedaan mendasar antara opsi 'Baca Online' dan 'Ebook PDF Download'?",
    answer: "Opsi 'Baca Online' memungkinkan Anda membaca langsung melalui platform Lynk di browser pada perangkat apa pun (HP, tablet, laptop) selama terhubung internet. Sedangkan opsi 'Ebook PDF Download' memberikan Anda file PDF master utuh yang dapat disimpan di komputer/HP, diakses offline selamanya tanpa kuota, dan bebas dicetak untuk kebutuhan studi pribadi."
  },
  {
    id: "how-to-buy",
    category: "Pembayaran & Pengiriman",
    question: "Bagaimana alur pembelian dan metode pembayarannya?",
    answer: "Klik tombol 'Beli' pada paket yang Anda pilih, lalu Anda akan diarahkan ke halaman checkout resmi platform Lynk. Pembayaran dapat dilakukan dengan mudah dan otomatis melalui QRIS (GoPay, OVO, Dana, ShopeePay), Transfer Bank (BCA, Mandiri, BRI, BNI, Permata), atau Kartu Kredit. Setelah transaksi berhasil, akses atau tautan unduh file langsung tersedia saat itu juga."
  },
  {
    id: "device-compatibility",
    category: "Format & Akses",
    question: "Apakah ebook ini dapat dibuka dan dicatat di aplikasi seperti GoodNotes atau Notability?",
    answer: "Ya! File PDF yang Anda unduh berformat standar A5 dan sepenuhnya kompatibel dengan semua aplikasi pembaca PDF seperti Adobe Acrobat Reader, Apple Books, GoodNotes, Notability, Samsung Notes, Foxit Reader, dan browser web. Dokumen juga dilengkapi fitur bookmark dan teks yang dapat disorot (highlightable/searchable)."
  },
  {
    id: "update-policy",
    category: "Konten & Materi",
    question: "Apakah materi buku ini sudah disesuaikan dengan KUHP Nasional (UU No. 1 Tahun 2023)?",
    answer: "Ya, buku ini secara khusus ditulis dan disesuaikan dengan transisi hukum 2026, membedah secara rinci implementasi Pasal 603 dan Pasal 604 KUHP Nasional, aturan peralihan, asas lex mitior, harmonisasi dengan UU No. 31/1999 jo. UU No. 20/2001, serta yurisprudensi Mahkamah Agung terkini."
  },
  {
    id: "printing-permission",
    category: "Lisensi & Penggunaan",
    question: "Apakah saya diperbolehkan mencetak (print) isi file PDF buku ini?",
    answer: "Ya, pembeli versi PDF diberikan izin untuk mencetak dokumen dalam bentuk fisik demi keperluan belajar atau riset pribadi. Namun, penggandaan untuk tujuan komersial atau penyebaran kembali file secara publik tetap dilarang sesuai undang-undang hak cipta."
  },
  {
    id: "who-is-author",
    category: "Kredibilitas",
    question: "Siapa penyusun buku ini dan bagaimana kualitas akurasi hukumnya?",
    answer: "Buku disusun oleh Tim Penyusun yang terdiri dari praktisi dan akademisi hukum pidana. Seluruh 300 butir soal dan jawaban telah melewati proses telaah yuridis mendalam terhadap peraturan perundang-undangan positif, doktrin ahli hukum terkemuka, serta putusan Mahkamah Agung."
  },
  {
    id: "refund-policy",
    category: "Layanan Pelanggan",
    question: "Bagaimana jika saya mengalami kendala teknis saat mengunduh atau mengakses?",
    answer: "Jika terdapat kendala pengiriman link unduhan atau akses platform Lynk, tim bantuan transaksi Lynk dan kontak penyusun siap membantu verifikasi manual hingga file/akses berhasil diterima dengan sempurna."
  }
];

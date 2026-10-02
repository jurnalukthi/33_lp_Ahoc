# AGENTS.md

## Batasan Ruang Kerja (Workspace Boundary)
- **ATURAN MUTLAK**: Dilarang keras memodifikasi, menambah, atau menghapus file apa pun yang berada di luar root folder proyek ini (`/mnt/DATASOURCES/My Projects/Projects2026/33_lp_Ahoc`).
- Semua operasi baca, tulis, edit, dan eksekusi skrip wajib dibatasi hanya di dalam repositori ini.

## Ringkasan Proyek
Landing page penjualan ebook *300 Soal Jawab Hukum Pidana Korupsi 2026: Referensi Mahasiswa, Advokat & Calon Hakim Ad Hoc*.

## Tech Stack
- **Framework**: Next.js 15 (App Router, Static Export)
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Typography**: EB Garamond (Heading), Lato (Body)
- **Palette**: Navy Blue (`#1E3A8A`), Gold (`#B45309`), Background (`#F8FAFC`)

## Perintah Kerja (Workdir: `lp-ebook/`)
```bash
npm run dev      # Server pengembangan lokal
npm run build    # Static build ke out/
npm run lint     # Linting kode
```

## Struktur Direktori
- `lp-ebook/`: Aplikasi utama Next.js.
  - `app/`: Routing, layout, metadata SEO, `globals.css`.
  - `components/`: Komponen UI shadcn dan section landing page.
  - `data/`: Data konten statis (`chapters.ts`, `faq.ts`, `pricing.ts`, `features.ts`).
- `design-system/`: Dokumentasi sistem desain UI/UX.
- `.github/workflows/`: Konfigurasi CI/CD deploy ke GitHub Pages.

## Pedoman Penulisan (Copy & Tone)
- Bahasa Indonesia formal, akademis, lugas.
- Hindari kata klise/dramatis: ganti *nyaris* -> *hampir*, *sangat krusial* -> *bernilai penting*, *mubazir* -> *berlebihan*.
- Prioritaskan fakta hukum KUHP Nasional (UU No. 1/2023) dan kejelasan materi.

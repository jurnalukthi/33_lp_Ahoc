# Landing Page Ebook Hukum Pidana Korupsi 2026

Landing page untuk penjualan ebook **300 Soal Jawab Hukum Pidana Korupsi 2026: Referensi Mahasiswa, Advokat & Calon Hakim Ad Hoc**.

## Informasi Produk

- **Judul**: 300 Soal Jawab Hukum Pidana Korupsi 2026
- **Target**: Mahasiswa Hukum, Advokat, Calon Hakim Ad Hoc Tipikor
- **Konten**: 18 BAB, 300 soal jawab, 20 diagram alur, 50 rujukan silang
- **Update**: KUHP Nasional 2026 (UU No. 1 Tahun 2023)

## Pilihan Pembelian

### 1. Baca Online (Rp 45.000)
- Akses via platform Lynk
- Multi-device
- Mulai belajar dalam 1 menit
- **Diskon 60%** dari Rp 112.500

### 2. Beli PDF (Rp 145.000)
- Download file PDF lengkap
- Akses offline selamanya
- Bisa dicetak
- **Diskon 60%** dari Rp 362.500

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **UI**: shadcn/ui + Tailwind CSS
- **Typography**: EB Garamond (heading) + Lato (body)
- **Colors**: Navy blue (#1E3A8A) + Gold accent (#B45309)
- **Deployment**: GitHub Pages

## Local Development

```bash
cd lp-ebook
npm install
npm run dev
```

Buka http://localhost:3000

## Build & Deploy

### Build untuk Production
```bash
cd lp-ebook
npm run build
```

Output static files akan ada di `lp-ebook/out/`

### Deploy ke GitHub Pages

1. Push ke GitHub
2. GitHub Actions akan otomatis deploy ke GitHub Pages
3. Akses di: `https://[username].github.io/33_lp_Ahoc/lp-ebook`

Atau manual:
- Enable GitHub Pages di Settings > Pages
- Source: GitHub Actions
- Push ke branch `main`

## Struktur Folder

```
lp-ebook/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Landing page utama
│   └── globals.css         # Design system CSS
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── sections/           # Landing page sections
│       ├── Hero.tsx
│       ├── ProblemStatement.tsx
│       ├── Features.tsx
│       ├── TableOfContents.tsx
│       ├── TargetAudience.tsx
│       ├── WhatYouGet.tsx
│       ├── Comparison.tsx
│       ├── FAQ.tsx
│       ├── CTAFinal.tsx
│       └── Footer.tsx
├── data/
│   ├── chapters.ts         # 18 BAB data
│   ├── features.ts         # Keunggulan buku
│   ├── faq.ts             # FAQ
│   └── pricing.ts         # Pricing & format
└── lib/
    └── utils.ts           # cn() helper
```

## Update Link Lynk

Setelah produk di-listing di Lynk, update URL di `data/pricing.ts`:

```typescript
export const pricing = {
  online: {
    ctaUrl: "https://lynk.id/[product-slug-online]",
    // ...
  },
  pdf: {
    ctaUrl: "https://lynk.id/[product-slug-pdf]",
    // ...
  }
}
```

## Design System

Design system lengkap ada di `design-system/ebook-hukum-pidana-korupsi/MASTER.md`

**Key Design Decisions**:
- **Style**: Trust & Authority (legal, professional)
- **Primary Color**: Navy Blue #1E3A8A (hukum, kepercayaan)
- **Accent Color**: Gold #B45309 (premium)
- **Typography**: EB Garamond (authoritative serif) + Lato (readable sans)
- **Tone**: Formal, akademis, profesional

## SEO Keywords

- hukum pidana korupsi 2026
- KUHP Nasional 2026
- buku tipikor
- soal jawab korupsi
- referensi hukum korupsi
- persiapan ujian advokat
- calon hakim ad hoc tipikor
- pasal 603 604 KUHP
- lex mitior

## Checklist Pre-Launch

- [x] Design system generated
- [x] All sections built
- [x] Responsive mobile-first
- [x] SEO metadata
- [x] FAQ lengkap
- [x] Pricing comparison
- [ ] Link Lynk updated (menunggu URL dari platform)
- [ ] Cover buku image optimized
- [ ] Testing di mobile devices
- [ ] Analytics setup (Google Analytics)
- [ ] Deploy ke GitHub Pages

## Contact

Untuk update atau pertanyaan, hubungi Tim Penyusun.

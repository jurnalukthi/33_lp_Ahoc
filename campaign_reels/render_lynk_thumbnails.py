#!/usr/bin/env python3
"""
Generator for Lynk Product Thumbnails (1028 x 1028 px)
Renders HTML/CSS templates to PNG and WebP using Headless Chrome & PIL.
"""

import os
import subprocess
from pathlib import Path
from PIL import Image

BASE_DIR = Path(__file__).parent.resolve()
OUTPUT_DIR = BASE_DIR / "output" / "lynk_thumbnails"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

HTML_ONLINE = BASE_DIR / "lynk_online.html"
HTML_PDF = BASE_DIR / "lynk_pdf.html"

COVER_REL = "cover.png"
BG_REL = "bg.jpeg"

# Copy asset dependencies if not present
if not (BASE_DIR / "cover.png").exists():
    src_cover = BASE_DIR.parent / "lp-ebook" / "public" / "cover.png"
    if src_cover.exists():
        import shutil
        shutil.copy(src_cover, BASE_DIR / "cover.png")

if not (BASE_DIR / "bg.jpeg").exists():
    src_bg = BASE_DIR / "temp_frames" / "bg_carousel.jpeg"
    if src_bg.exists():
        import shutil
        shutil.copy(src_bg, BASE_DIR / "bg.jpeg")

# HTML Template Generator
def build_html(
    product_type: str,
    badge_label: str,
    badge_color: str,
    title: str,
    subtitle: str,
    benefits: list,
    original_price: str,
    promo_price: str,
    format_sticker: str,
    accent_gradient: str
) -> str:
    benefits_html = "\n".join([
        f"""
        <div class="benefit-item">
            <div class="benefit-icon">✓</div>
            <div class="benefit-text">
                <div class="benefit-title">{b[0]}</div>
                <div class="benefit-desc">{b[1]}</div>
            </div>
        </div>
        """ for b in benefits
    ])

    return f"""<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <style>
        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }}
        body {{
            width: 1028px;
            height: 1028px;
            background: #080E1E;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #FFFFFF;
            overflow: hidden;
            position: relative;
        }}
        .bg-layer {{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('{BG_REL}');
            background-size: cover;
            background-position: center;
            opacity: 0.22;
        }}
        .bg-overlay {{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 75% 35%, rgba(30, 58, 138, 0.45) 0%, rgba(8, 14, 30, 0.94) 75%);
        }}
        .container {{
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            padding: 50px 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }}
        .top-bar {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid rgba(217, 119, 6, 0.35);
            padding-bottom: 20px;
        }}
        .brand-title {{
            font-size: 20px;
            font-weight: 800;
            letter-spacing: 2.5px;
            color: #FBBF24;
            text-transform: uppercase;
        }}
        .edition-badge {{
            background: rgba(217, 119, 6, 0.2);
            border: 1.5px solid #D97706;
            color: #FDE68A;
            padding: 6px 18px;
            border-radius: 20px;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 1px;
        }}
        .main-content {{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            margin-top: 15px;
        }}
        .left-col {{
            flex: 1.2;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }}
        .product-badge {{
            align-self: flex-start;
            background: {badge_color};
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 800;
            letter-spacing: 1.5px;
            padding: 8px 20px;
            border-radius: 8px;
            text-transform: uppercase;
            box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        }}
        .main-heading {{
            font-family: Georgia, "EB Garamond", serif;
            font-size: 42px;
            line-height: 1.15;
            font-weight: 800;
            color: #FFFFFF;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }}
        .sub-heading {{
            font-size: 20px;
            color: #93C5FD;
            font-weight: 500;
            line-height: 1.35;
        }}
        .benefits-list {{
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: rgba(16, 28, 58, 0.75);
            border: 1px solid rgba(59, 130, 246, 0.25);
            padding: 16px 20px;
            border-radius: 16px;
            backdrop-filter: blur(10px);
        }}
        .benefit-item {{
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }}
        .benefit-icon {{
            background: #D97706;
            color: #FFFFFF;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: 800;
            flex-shrink: 0;
            margin-top: 2px;
        }}
        .benefit-title {{
            font-size: 17px;
            font-weight: 700;
            color: #F8FAFC;
        }}
        .benefit-desc {{
            font-size: 14px;
            color: #CBD5E1;
        }}
        .right-col {{
            flex: 0.95;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
        }}
        .book-wrapper {{
            position: relative;
            perspective: 1000px;
        }}
        .book-img {{
            width: 360px;
            height: auto;
            border-radius: 12px;
            box-shadow: -18px 22px 35px rgba(0, 0, 0, 0.75), 0 0 25px rgba(217, 119, 6, 0.3);
            border: 2px solid rgba(251, 191, 36, 0.4);
            transform: rotate(-3deg);
            display: block;
        }}
        .sticker-badge {{
            position: absolute;
            top: -15px;
            right: -15px;
            background: {accent_gradient};
            color: #FFFFFF;
            padding: 12px 18px;
            border-radius: 50px;
            font-size: 15px;
            font-weight: 800;
            box-shadow: 0 6px 16px rgba(0,0,0,0.5);
            border: 2px solid #FFFFFF;
            transform: rotate(6deg);
            letter-spacing: 0.5px;
        }}
        .price-banner {{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: linear-gradient(90deg, #1E3A8A 0%, #172554 100%);
            border: 2px solid #D97706;
            padding: 16px 30px;
            border-radius: 18px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }}
        .price-left {{
            display: flex;
            flex-direction: column;
        }}
        .price-strike {{
            font-size: 16px;
            color: #94A3B8;
            text-decoration: line-through;
            font-weight: 600;
        }}
        .price-actual {{
            font-size: 38px;
            font-weight: 900;
            color: #FBBF24;
            line-height: 1;
        }}
        .price-right {{
            display: flex;
            align-items: center;
            gap: 12px;
        }}
        .discount-pill {{
            background: #DC2626;
            color: #FFFFFF;
            font-size: 17px;
            font-weight: 900;
            padding: 8px 18px;
            border-radius: 12px;
            letter-spacing: 0.5px;
        }}
        .cta-label {{
            font-size: 17px;
            font-weight: 700;
            color: #FFFFFF;
            background: #D97706;
            padding: 10px 24px;
            border-radius: 12px;
            letter-spacing: 0.5px;
        }}
    </style>
</head>
<body>
    <div class="bg-layer"></div>
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="top-bar">
            <div class="brand-title">REFERENSI HUKUM TIPIKOR 2026</div>
            <div class="edition-badge">EDISI KUHP NASIONAL</div>
        </div>

        <div class="main-content">
            <div class="left-col">
                <div class="product-badge">{badge_label}</div>
                <h1 class="main-heading">{title}</h1>
                <div class="sub-heading">{subtitle}</div>

                <div class="benefits-list">
                    {benefits_html}
                </div>
            </div>

            <div class="right-col">
                <div class="book-wrapper">
                    <img src="{COVER_REL}" alt="Cover Ebook" class="book-img">
                    <div class="sticker-badge">{format_sticker}</div>
                </div>
            </div>
        </div>

        <div class="price-banner">
            <div class="price-left">
                <span class="price-strike">{original_price}</span>
                <span class="price-actual">{promo_price}</span>
            </div>
            <div class="price-right">
                <div class="discount-pill">HEMAT 60%</div>
                <div class="cta-label">BELI SEKARANG</div>
            </div>
        </div>
    </div>
</body>
</html>
"""

def generate_html_files():
    # 1. Online Access
    online_html_content = build_html(
        product_type="online",
        badge_label="📱 FORMAT BACA ONLINE",
        badge_color="linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
        title="300 Soal Jawab Tipikor 2026",
        subtitle="Analisis Komprehensif UU No. 1/2023",
        benefits=[
            ("Akses Web Instan", "Baca langsung via HP, Tablet, Laptop tanpa unduh"),
            ("18 BAB & 300 Soal Jawab", "Kupas tuntas seluruh delik kerugian, suap & TPPU"),
            ("20 Diagram Alur Logika", "Memudahkan analisa kasus & strategi pembuktian")
        ],
        original_price="Rp 112.500",
        promo_price="Rp 45.000",
        format_sticker="ONLINE READER",
        accent_gradient="linear-gradient(135deg, #0284C7 0%, #0369A1 100%)"
    )
    with open(HTML_ONLINE, "w") as f:
        f.write(online_html_content)
    print(f"[HTML] Wrote: {HTML_ONLINE}")

    # 2. PDF Download
    pdf_html_content = build_html(
        product_type="pdf",
        badge_label="📥 FORMAT PDF LENGKAP",
        badge_color="linear-gradient(135deg, #059669 0%, #047857 100%)",
        title="300 Soal Jawab Tipikor 2026",
        subtitle="Analisis Komprehensif UU No. 1/2023",
        benefits=[
            ("File PDF High-Res", "Bebas unduh, simpan & cetak fisik (Printable)"),
            ("Akses Offline Selamanya", "Miliki berkas permanen di perangkat Anda"),
            ("Fitur Quick Search (Ctrl+F)", "Mudah temukan pasal, delik & yurisprudensi MA")
        ],
        original_price="Rp 362.500",
        promo_price="Rp 145.000",
        format_sticker="PDF DOWNLOAD",
        accent_gradient="linear-gradient(135deg, #059669 0%, #047857 100%)"
    )
    with open(HTML_PDF, "w") as f:
        f.write(pdf_html_content)
    print(f"[HTML] Wrote: {HTML_PDF}")

def render_image(html_file: Path, output_png: Path, output_webp: Path):
    print(f"\n[Chrome] Rendering screenshot: {html_file.name} -> {output_png.name}...")
    cmd = [
        "google-chrome",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--force-device-scale-factor=1",
        f"--window-size=1028,1028",
        f"--screenshot={str(output_png)}",
        str(html_file.resolve())
    ]
    subprocess.run(cmd, check=True)

    # Convert to WebP using PIL
    im = Image.open(output_png)
    # Ensure exact 1028x1028
    if im.size != (1028, 1028):
        im = im.resize((1028, 1028), Image.Resampling.LANCZOS)
        im.save(output_png, "PNG")

    im.save(output_webp, "WEBP", quality=92)
    print(f"[Export] Saved PNG: {output_png} ({os.path.getsize(output_png)//1024} KB)")
    print(f"[Export] Saved WebP: {output_webp} ({os.path.getsize(output_webp)//1024} KB)")

def main():
    print("=" * 60)
    print("LYNK THUMBNAILS GENERATOR (1028 x 1028 px)")
    print("=" * 60)
    generate_html_files()

    png_online = OUTPUT_DIR / "lynk_thumbnail_online.png"
    webp_online = OUTPUT_DIR / "lynk_thumbnail_online.webp"
    render_image(HTML_ONLINE, png_online, webp_online)

    png_pdf = OUTPUT_DIR / "lynk_thumbnail_pdf.png"
    webp_pdf = OUTPUT_DIR / "lynk_thumbnail_pdf.webp"
    render_image(HTML_PDF, png_pdf, webp_pdf)

    print("\n✅ SELURUH THUMBNAIL LYNK (ONLINE & PDF) SELESAI DIGENERATE!")

if __name__ == "__main__":
    main()

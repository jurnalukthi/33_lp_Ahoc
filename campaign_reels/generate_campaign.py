#!/usr/bin/env python3
"""
Campaign Generator: Ebook 300 Soal Jawab Hukum Pidana Korupsi 2026
Updated: Vertically centered content (rata tengah atas-bawah) for both Carousel and Reels.
"""

import os
import sys
import time
import struct
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# Load .env
env_path = Path(__file__).parent / ".env"
if env_path.exists():
    with open(env_path, "r") as f:
        for line in f:
            if "=" in line and not line.strip().startswith("#"):
                k, v = line.strip().split("=", 1)
                os.environ[k.strip()] = v.strip()

from google import genai
from google.genai import types

GEMINI_API_KEYS = [k.strip() for k in os.environ.get("GEMINI_API_KEYS", "").split(",") if k.strip()]
BASE_DIR = Path(__file__).parent.resolve()
OUTPUT_DIR = BASE_DIR / "output"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
COVER_PATH = BASE_DIR.parent / "lp-ebook" / "public" / "cover.png"

# Color Palette
NAVY_DARK = (10, 18, 38)      # #0A1226
NAVY_BG_BOTTOM = (15, 28, 60) # #0F1C3C
NAVY_PRIMARY = (30, 58, 138)  # #1E3A8A
GOLD_ACCENT = (217, 119, 6)   # #D97706
GOLD_LIGHT = (251, 191, 36)   # #FBBF24
TEXT_WHITE = (255, 255, 255)
TEXT_MUTED = (203, 213, 225)  # #CBD5E1
CARD_BG = (22, 36, 70)
BORDER_GOLD = (180, 83, 9)

# Fonts
FONT_SERIF_BOLD = "/usr/share/fonts/truetype/msttcorefonts/Georgia_Bold.ttf"
FONT_SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SANS_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def get_font(font_path, size):
    try:
        return ImageFont.truetype(font_path, size)
    except Exception:
        return ImageFont.load_default()

def parse_audio_mime_type(mime_type: str) -> dict:
    bits_per_sample = 16
    rate = 24000
    parts = mime_type.split(";")
    for param in parts:
        param = param.strip()
        if param.lower().startswith("rate="):
            try:
                rate = int(param.split("=", 1)[1])
            except Exception:
                pass
        elif param.startswith("audio/L"):
            try:
                bits_per_sample = int(param.split("L", 1)[1])
            except Exception:
                pass
    return {"bits_per_sample": bits_per_sample, "rate": rate}

def convert_to_wav(audio_data: bytes, mime_type: str) -> bytes:
    parameters = parse_audio_mime_type(mime_type)
    bits_per_sample = parameters["bits_per_sample"]
    sample_rate = parameters["rate"]
    num_channels = 1
    data_size = len(audio_data)
    bytes_per_sample = bits_per_sample // 8
    block_align = num_channels * bytes_per_sample
    byte_rate = sample_rate * block_align
    chunk_size = 36 + data_size

    header = struct.pack(
        "<4sI4s4sIHHIIHH4sI",
        b"RIFF",
        chunk_size,
        b"WAVE",
        b"fmt ",
        16,
        1,
        num_channels,
        sample_rate,
        byte_rate,
        block_align,
        bits_per_sample,
        b"data",
        data_size
    )
    return header + audio_data

def generate_voiceover(text: str, output_path: str, voice_name: str = "Puck") -> str:
    # If audio already exists and is non-empty, reuse it to save API rate limits
    if os.path.exists(output_path) and os.path.getsize(output_path) > 1000:
        print(f"[TTS] Using cached voiceover: {output_path}")
        return output_path

    print(f"\n[TTS] Generating Voiceover ({voice_name}): {text[:45]}...")
    model = "gemini-3.1-flash-tts-preview"
    
    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=f"## Transcript:\n{text}")],
        )
    ]
    config = types.GenerateContentConfig(
        temperature=0.6,
        response_modalities=["audio"],
        speech_config=types.SpeechConfig(
            voice_config=types.VoiceConfig(
                prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=voice_name)
            )
        ),
    )

    success = False
    last_error = None

    for attempt in range(4):
        for idx, key in enumerate(GEMINI_API_KEYS):
            try:
                client = genai.Client(api_key=key)
                audio_bytes = bytearray()
                mime_type = "audio/L16;rate=24000"

                for chunk in client.models.generate_content_stream(
                    model=model,
                    contents=contents,
                    config=config,
                ):
                    if chunk.parts and chunk.parts[0].inline_data and chunk.parts[0].inline_data.data:
                        inline_data = chunk.parts[0].inline_data
                        audio_bytes.extend(inline_data.data)
                        if inline_data.mime_type:
                            mime_type = inline_data.mime_type

                if audio_bytes:
                    wav_data = convert_to_wav(bytes(audio_bytes), mime_type)
                    with open(output_path, "wb") as f:
                        f.write(wav_data)
                    print(f"[TTS] Voiceover saved: {output_path}")
                    return output_path
            except Exception as e:
                last_error = e
                print(f"[TTS] Key #{idx+1} warning: {str(e)[:80]}...")
                time.sleep(2)
        print(f"[TTS] Waiting 10s before retry attempt {attempt+2}...")
        time.sleep(10)

    if not success:
        raise Exception(f"Failed to generate TTS after retries: {last_error}")

def get_audio_duration(audio_path: str) -> float:
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", audio_path
    ]
    result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
    return float(result.stdout.strip())

def create_gradient_bg(width: int, height: int, color_top, color_bottom):
    base = Image.new("RGBA", (width, height), color_top)
    draw = ImageDraw.Draw(base)
    for y in range(height):
        ratio = y / height
        r = int(color_top[0] * (1 - ratio) + color_bottom[0] * ratio)
        g = int(color_top[1] * (1 - ratio) + color_bottom[1] * ratio)
        b = int(color_top[2] * (1 - ratio) + color_bottom[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
    return base

def draw_rounded_card(draw, box, radius, fill_color, outline_color=None, outline_width=2):
    draw.rounded_rectangle(box, radius=radius, fill=fill_color, outline=outline_color, width=outline_width)

def wrap_text(text: str, font, max_width: int):
    words = text.split()
    lines = []
    current_line = []
    for word in words:
        test_line = " ".join(current_line + [word])
        bbox = font.getbbox(test_line)
        w = bbox[2] - bbox[0]
        if w <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(" ".join(current_line))
            current_line = [word]
    if current_line:
        lines.append(" ".join(current_line))
    return lines

# -------------------------------------------------------------
# VERTICALLY CENTERED REELS SLIDE RENDERER (1080x1920)
# -------------------------------------------------------------
def render_reels_slide(
    badge: str,
    title: str,
    subtitle: str,
    bullets: list,
    highlight: str,
    show_book: bool = False,
    cta_button: str = None
) -> Image.Image:
    width, height = 1080, 1920
    img = create_gradient_bg(width, height, NAVY_DARK, NAVY_BG_BOTTOM)
    draw = ImageDraw.Draw(img)

    # 1. Fixed Header at Top
    draw.rectangle([(0, 0), (width, 16)], fill=GOLD_ACCENT)
    font_brand = get_font(FONT_SANS_BOLD, 30)
    brand_text = "REFERENSI HUKUM TIPIKOR 2026"
    draw.text((width // 2, 80), brand_text, fill=GOLD_LIGHT, font=font_brand, anchor="mm")
    draw.line([(80, 120), (width - 80, 120)], fill=(40, 60, 100), width=2)

    # 2. Prepare items & calculate total content height for vertical centering
    content_items = []
    total_content_height = 0

    # Badge measurement
    font_badge = get_font(FONT_SANS_BOLD, 32)
    if badge:
        bh = 60
        content_items.append({"type": "badge", "text": badge, "h": bh, "margin_bottom": 35})
        total_content_height += bh + 35

    # Title measurement
    font_title = get_font(FONT_SERIF_BOLD, 54)
    title_lines = wrap_text(title, font_title, width - 140)
    line_h_title = 68
    th = len(title_lines) * line_h_title
    content_items.append({"type": "title", "lines": title_lines, "h": th, "margin_bottom": 25})
    total_content_height += th + 25

    # Subtitle measurement
    font_sub = get_font(FONT_SANS_REG, 34)
    if subtitle:
        sub_lines = wrap_text(subtitle, font_sub, width - 160)
        line_h_sub = 48
        sh = len(sub_lines) * line_h_sub
        content_items.append({"type": "subtitle", "lines": sub_lines, "h": sh, "margin_bottom": 35})
        total_content_height += sh + 35

    # Book Mockup OR Bullets
    cover_resized = None
    target_w, target_h = 0, 0
    if show_book and COVER_PATH.exists():
        cover_img = Image.open(COVER_PATH).convert("RGBA")
        target_w = 460
        aspect = cover_img.height / cover_img.width
        target_h = int(target_w * aspect)
        cover_resized = cover_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        content_items.append({"type": "book", "w": target_w, "h": target_h, "margin_bottom": 40})
        total_content_height += target_h + 40
    elif bullets:
        bullet_card_h = len(bullets) * 135 + 50
        content_items.append({"type": "bullets", "items": bullets, "h": bullet_card_h, "margin_bottom": 35})
        total_content_height += bullet_card_h + 35

    # Highlight Banner measurement
    if highlight:
        hl_h = 88
        content_items.append({"type": "highlight", "text": highlight, "h": hl_h, "margin_bottom": 35})
        total_content_height += hl_h + 35

    # CTA Button measurement
    if cta_button:
        btn_h = 96
        content_items.append({"type": "cta", "text": cta_button, "h": btn_h, "margin_bottom": 0})
        total_content_height += btn_h

    # 3. Compute Centered Vertical Start Position
    # Available canvas area: from y=150 to y=1850 (height = 1700)
    top_limit = 150
    bottom_limit = 1850
    avail_h = bottom_limit - top_limit
    start_y = top_limit + max(0, (avail_h - total_content_height) // 2)

    # 4. Render All Elements Vertically Centered
    cur_y = start_y

    for item in content_items:
        itype = item["type"]

        if itype == "badge":
            bbox = font_badge.getbbox(item["text"])
            bw = bbox[2] - bbox[0] + 60
            bh = item["h"]
            bx0 = (width - bw) // 2
            draw_rounded_card(draw, [bx0, cur_y, bx0 + bw, cur_y + bh], 30, fill_color=GOLD_ACCENT)
            draw.text((width // 2, cur_y + bh // 2), item["text"], fill=TEXT_WHITE, font=font_badge, anchor="mm")
            cur_y += bh + item["margin_bottom"]

        elif itype == "title":
            for line in item["lines"]:
                draw.text((width // 2, cur_y), line, fill=TEXT_WHITE, font=font_title, anchor="mt")
                cur_y += line_h_title
            cur_y += item["margin_bottom"]

        elif itype == "subtitle":
            for line in item["lines"]:
                draw.text((width // 2, cur_y), line, fill=TEXT_MUTED, font=font_sub, anchor="mt")
                cur_y += line_h_sub
            cur_y += item["margin_bottom"]

        elif itype == "book":
            shadow_box = [
                (width - target_w) // 2 - 12,
                cur_y + 12,
                (width + target_w) // 2 + 12,
                cur_y + target_h + 24
            ]
            draw_rounded_card(draw, shadow_box, 16, fill_color=(0, 0, 0, 160))
            img.paste(cover_resized, ((width - target_w) // 2, cur_y), cover_resized)
            cur_y += target_h + item["margin_bottom"]

        elif itype == "bullets":
            card_w = width - 120
            card_x0 = 60
            card_y0 = cur_y
            card_h = item["h"]
            draw_rounded_card(
                draw,
                [card_x0, card_y0, card_x0 + card_w, card_y0 + card_h],
                24,
                fill_color=CARD_BG,
                outline_color=NAVY_PRIMARY,
                outline_width=2
            )
            font_bullet_title = get_font(FONT_SANS_BOLD, 34)
            font_bullet_desc = get_font(FONT_SANS_REG, 28)
            b_y = card_y0 + 30

            for b_item in item["items"]:
                draw.ellipse([card_x0 + 35, b_y + 4, card_x0 + 75, b_y + 44], fill=GOLD_ACCENT)
                draw.text((card_x0 + 55, b_y + 24), "✓", fill=TEXT_WHITE, font=font_bullet_title, anchor="mm")

                if isinstance(b_item, tuple):
                    b_head, b_sub = b_item
                    draw.text((card_x0 + 95, b_y), b_head, fill=TEXT_WHITE, font=font_bullet_title, anchor="lt")
                    draw.text((card_x0 + 95, b_y + 44), b_sub, fill=TEXT_MUTED, font=font_bullet_desc, anchor="lt")
                else:
                    draw.text((card_x0 + 95, b_y + 10), str(b_item), fill=TEXT_WHITE, font=font_bullet_title, anchor="lt")
                b_y += 135
            cur_y += card_h + item["margin_bottom"]

        elif itype == "highlight":
            hl_box = [70, cur_y, width - 70, cur_y + item["h"]]
            draw_rounded_card(draw, hl_box, 20, fill_color=(45, 25, 12), outline_color=GOLD_ACCENT, outline_width=2)
            font_hl = get_font(FONT_SANS_BOLD, 34)
            draw.text((width // 2, cur_y + item["h"] // 2), item["text"], fill=GOLD_LIGHT, font=font_hl, anchor="mm")
            cur_y += item["h"] + item["margin_bottom"]

        elif itype == "cta":
            btn_box = [80, cur_y, width - 80, cur_y + item["h"]]
            draw_rounded_card(draw, btn_box, 28, fill_color=GOLD_ACCENT)
            font_btn = get_font(FONT_SANS_BOLD, 38)
            draw.text((width // 2, cur_y + item["h"] // 2), item["text"], fill=TEXT_WHITE, font=font_btn, anchor="mm")
            cur_y += item["h"]

    return img

def render_reels_video(scenes_data: list, audio_path: str, output_video: str):
    temp_dir = BASE_DIR / "temp_frames"
    temp_dir.mkdir(exist_ok=True)

    total_duration = get_audio_duration(audio_path)
    dur_per_scene = total_duration / len(scenes_data)

    images_txt = temp_dir / "images.txt"
    frame_paths = []

    for idx, scene in enumerate(scenes_data):
        slide_img = render_reels_slide(
            badge=scene.get("badge", ""),
            title=scene.get("title", ""),
            subtitle=scene.get("subtitle", ""),
            bullets=scene.get("bullets", []),
            highlight=scene.get("highlight", ""),
            show_book=scene.get("show_book", False),
            cta_button=scene.get("cta_button", None)
        )
        frame_path = temp_dir / f"scene_{idx:02d}.png"
        slide_img.save(frame_path, "PNG")
        frame_paths.append(frame_path)

    with open(images_txt, "w") as f:
        for fp in frame_paths:
            f.write(f"file '{fp.resolve()}'\n")
            f.write(f"duration {dur_per_scene:.3f}\n")
        f.write(f"file '{frame_paths[-1].resolve()}'\n")

    filter_complex = (
        "[0:v]fps=30,scale=1080:1920,format=yuv420p[v]"
    )

    cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", str(images_txt),
        "-i", audio_path,
        "-filter_complex", filter_complex,
        "-map", "[v]", "-map", "1:a",
        "-c:v", "libx264", "-preset", "fast", "-crf", "22",
        "-c:a", "aac", "-b:a", "192k",
        "-shortest",
        str(output_video)
    ]

    print(f"\n[FFmpeg] Rendering video: {output_video}...")
    subprocess.run(cmd, check=True)
    print(f"[FFmpeg] Video successfully rendered: {output_video}")

    # Cleanup temp frames
    for fp in frame_paths:
        if fp.exists():
            fp.unlink()
    if images_txt.exists():
        images_txt.unlink()

# -------------------------------------------------------------
# VERTICALLY CENTERED CAROUSEL SLIDE RENDERER (1080x1350)
# -------------------------------------------------------------
def generate_carousel_slides(carousel_data: list, output_folder: Path):
    output_folder.mkdir(parents=True, exist_ok=True)
    width, height = 1080, 1350  # 4:5 Instagram Portrait

    for idx, slide in enumerate(carousel_data, start=1):
        img = create_gradient_bg(width, height, NAVY_DARK, NAVY_BG_BOTTOM)
        draw = ImageDraw.Draw(img)

        # 1. Top Decorative line & Header
        draw.rectangle([(0, 0), (width, 12)], fill=GOLD_ACCENT)
        font_cat = get_font(FONT_SANS_BOLD, 26)
        font_num = get_font(FONT_SANS_BOLD, 28)
        draw.text((60, 60), "REFERENSI KUHP NASIONAL 2026", fill=GOLD_LIGHT, font=font_cat, anchor="lt")
        draw.text((width - 60, 60), f"{idx}/{len(carousel_data)}", fill=GOLD_LIGHT, font=font_num, anchor="rt")
        draw.line([(60, 105), (width - 60, 105)], fill=(40, 60, 100), width=2)

        # 2. Measure all middle content elements
        content_items = []
        total_content_height = 0

        # Title
        font_title = get_font(FONT_SERIF_BOLD, 52)
        title_lines = wrap_text(slide["title"], font_title, width - 140)
        line_h_title = 68
        th = len(title_lines) * line_h_title
        content_items.append({"type": "title", "lines": title_lines, "h": th, "margin_bottom": 30})
        total_content_height += th + 30

        # Body text
        font_body = get_font(FONT_SANS_REG, 36)
        line_h_body = 52
        if slide.get("body"):
            body_lines = wrap_text(slide["body"], font_body, width - 140)
            bh = len(body_lines) * line_h_body
            content_items.append({"type": "body", "lines": body_lines, "h": bh, "margin_bottom": 35})
            total_content_height += bh + 35

        # Bullets
        if slide.get("bullets"):
            card_h = len(slide["bullets"]) * 125 + 40
            content_items.append({"type": "bullets", "items": slide["bullets"], "h": card_h, "margin_bottom": 35})
            total_content_height += card_h + 35

        # Highlight or CTA on last slide
        has_cta = (idx == len(carousel_data))
        if has_cta:
            btn_h = 96
            content_items.append({"type": "cta", "text": "KLIK LINK DI BIO (DISKON 60%)", "h": btn_h, "margin_bottom": 0})
            total_content_height += btn_h

        # 3. Calculate Vertical Center Start Y
        top_limit = 130
        bottom_limit = 1270
        avail_h = bottom_limit - top_limit
        start_y = top_limit + max(0, (avail_h - total_content_height) // 2)

        # 4. Render All Elements
        cur_y = start_y
        for item in content_items:
            itype = item["type"]

            if itype == "title":
                for line in item["lines"]:
                    draw.text((60, cur_y), line, fill=TEXT_WHITE, font=font_title, anchor="lt")
                    cur_y += line_h_title
                cur_y += item["margin_bottom"]

            elif itype == "body":
                for line in item["lines"]:
                    draw.text((60, cur_y), line, fill=TEXT_MUTED, font=font_body, anchor="lt")
                    cur_y += line_h_body
                cur_y += item["margin_bottom"]

            elif itype == "bullets":
                card_w = width - 120
                card_h = item["h"]
                draw_rounded_card(
                    draw,
                    [60, cur_y, 60 + card_w, cur_y + card_h],
                    20,
                    fill_color=CARD_BG,
                    outline_color=NAVY_PRIMARY,
                    outline_width=2
                )
                font_b = get_font(FONT_SANS_BOLD, 32)
                font_bsub = get_font(FONT_SANS_REG, 28)
                by = cur_y + 30
                for b_item in item["items"]:
                    draw.ellipse([85, by + 4, 115, by + 34], fill=GOLD_ACCENT)
                    draw.text((100, by + 19), "•", fill=TEXT_WHITE, font=font_b, anchor="mm")
                    if isinstance(b_item, tuple):
                        draw.text((135, by), b_item[0], fill=TEXT_WHITE, font=font_b, anchor="lt")
                        draw.text((135, by + 40), b_item[1], fill=TEXT_MUTED, font=font_bsub, anchor="lt")
                    else:
                        draw.text((135, by + 8), str(b_item), fill=TEXT_WHITE, font=font_b, anchor="lt")
                    by += 120
                cur_y += card_h + item["margin_bottom"]

            elif itype == "cta":
                btn_box = [60, cur_y, width - 60, cur_y + item["h"]]
                draw_rounded_card(draw, btn_box, 25, fill_color=GOLD_ACCENT)
                font_btn = get_font(FONT_SANS_BOLD, 36)
                draw.text((width // 2, cur_y + item["h"] // 2), item["text"], fill=TEXT_WHITE, font=font_btn, anchor="mm")
                cur_y += item["h"]

        out_path = output_folder / f"carousel_slide_{idx:02d}.png"
        img.save(out_path, "PNG")
        print(f"[Carousel] Saved centered slide: {out_path}")

def main():
    print("=" * 60)
    print("RE-GENERATING CAMPAIGN: PERFECT VERTICAL CENTERING")
    print("=" * 60)

    # 1. REELS 1: "Transisi KUHP 2026 & Ancaman Delik Korupsi"
    vo_text_1 = (
        "Masih pakai pasal KUHP lama untuk membedah tindak pidana korupsi? "
        "Hati-hati, mulai 2026 KUHP Nasional resmi berlaku. Ada pergeseran pasal, "
        "rekonstruksi delik, hingga perubahan batasan kerugian negara. "
        "Kuasai transisinya secara mendalam di buku 300 Soal Jawab Hukum Pidana Korupsi. "
        "Lengkap dengan 20 diagram alur dan komparasi pasal. Klik link di bio sekarang!"
    )

    scenes_1 = [
        {
            "badge": "PERINGATAN HUKUM 2026",
            "title": "Jangan Salah Pakai Pasal Korupsi!",
            "subtitle": "KUHP Nasional (UU 1/2023) mulai berlaku penuh.",
            "bullets": [
                ("Pasal 2 & 3 Bertransisi", "Kini diatur dalam Pasal 603 & 604 KUHP Baru."),
                ("Prinsip Lex Mitior Berlaku", "Hukum yang lebih meringankan wajib dipahami.")
            ],
            "highlight": "BEDA PASAL, BEDA ANCAMAN PIDANA"
        },
        {
            "badge": "BEDAH KOMPREHENSIF",
            "title": "Pahami Logika Hukumnya",
            "subtitle": "Bukan sekadar hafalan undang-undang, tapi pemahaman studi kasus.",
            "bullets": [
                ("18 BAB Materi Lengkap", "Dari Suap, Gratifikasi, hingga TPPU."),
                ("20 Diagram Alur Logika", "Memudahkan analisa kasus & pembuktian."),
                ("50 Rujukan Silang Putusan", "Kombinasi yurisprudensi & doktrin hukum.")
            ],
            "highlight": "REFERENSI MAHASISWA & ADVOKAT"
        },
        {
            "badge": "EDISI KHUSUS 2026",
            "title": "300 Soal Jawab Tipikor",
            "subtitle": "Tersedia format Baca Online (Lynk) dan Download PDF.",
            "show_book": True,
            "highlight": "DISKON 60% HARI INI",
            "cta_button": "KLIK LINK DI BIO SEKARANG"
        }
    ]

    audio_path_1 = str(OUTPUT_DIR / "voiceover_reels_1.wav")
    video_path_1 = str(OUTPUT_DIR / "reels_1_transisi_kuhp.mp4")

    generate_voiceover(vo_text_1, audio_path_1, voice_name="Puck")
    render_reels_video(scenes_1, audio_path_1, video_path_1)

    # 2. REELS 2: "Persiapan Seleksi Hakim Ad Hoc & UPA"
    vo_text_2 = (
        "Mau lolos seleksi Hakim Ad Hoc Tipikor atau Ujian Profesi Advokat? "
        "Materi hukum korupsi tahun 2026 menuntut ketelitian analisis tinggi. "
        "Buku 300 Soal Jawab Hukum Pidana Korupsi dirancang sistematis dari tingkat dasar "
        "hingga analisis putusan Mahkamah Agung. "
        "Persiapkan diri Anda sekarang. Dapatkan diskon 60 persen di link bio!"
    )

    scenes_2 = [
        {
            "badge": "PERSIAPAN SELEKSI 2026",
            "title": "Target Lolos Hakim Ad Hoc & Advokat?",
            "subtitle": "Kuasai materi hukum korupsi paling krusial.",
            "bullets": [
                ("Standar Soal Ujian Terkini", "Kombinasi teori, asas hukum, dan studi kasus."),
                ("Pembahasan Tuntas & Rinci", "Dilengkapi rujukan doktrin dan putusan MA.")
            ],
            "highlight": "DIRANCANG UNTUK PRAKTISI & AKADEMISI"
        },
        {
            "badge": "STRUKTUR MATERI",
            "title": "18 BAB Pembahasan Kunci",
            "subtitle": "Semua topik penting dirangkum secara aplikatif.",
            "bullets": [
                ("Delik Kerugian Keuangan Negara", "Pasal 603 KUHP & putusan MK terkait."),
                ("Suap, Pemerasan & Gratifikasi", "Batasan delik dan pembuktian terbalik."),
                ("Pencucian Uang (TPPU)", "Korelasi predicate crime dengan tipikor.")
            ],
            "highlight": "300 SOAL & JAWABAN LENGKAP"
        },
        {
            "badge": "INVESTASI ILMU HUKUM",
            "title": "Mulai Belajar Sekarang",
            "subtitle": "Akses instan di semua perangkat.",
            "show_book": True,
            "highlight": "DISKON 60% - MULAI RP 45.000",
            "cta_button": "DAPATKAN EBOOK DI LINK BIO"
        }
    ]

    audio_path_2 = str(OUTPUT_DIR / "voiceover_reels_2.wav")
    video_path_2 = str(OUTPUT_DIR / "reels_2_persiapan_ujian.mp4")

    generate_voiceover(vo_text_2, audio_path_2, voice_name="Leda")
    render_reels_video(scenes_2, audio_path_2, video_path_2)

    # 3. INSTAGRAM CAROUSEL SLIDES (5 Slides)
    carousel_data = [
        {
            "title": "5 Perubahan Delik Korupsi di KUHP Nasional 2026",
            "body": "Mulai 2026, penegakan hukum tindak pidana korupsi memasuki era baru dengan berlakunya UU No. 1 Tahun 2023. Simak 5 poin penting perubahannya! (Geser ke kiri)"
        },
        {
            "title": "1. Rekonstruksi Pasal 2 & 3 UU Tipikor",
            "body": "Delik memperkaya diri sendiri dan penyalahgunaan kewenangan dialihkan ke Pasal 603 dan 604 KUHP Nasional dengan penyesuaian formulasi unsur delik."
        },
        {
            "title": "2. Penerapan Asas Lex Mitior",
            "body": "Jika terjadi perubahan peraturan hukum setelah perbuatan dilakukan, diberlakukan ketentuan yang paling meringankan bagi terdakwa sesuai Pasal 3 KUHP 2026."
        },
        {
            "title": "3. Standar Uang Pengganti & Denda",
            "body": "KUHP 2026 mengatur sistem kategori denda pidana dan pengetatan sanksi pembayaran uang pengganti secara lebih proporsional bagi terpidana."
        },
        {
            "title": "Kuasai Seluruhnya di Ebook 300 Soal Jawab Tipikor 2026",
            "body": "Referensi terpercaya untuk Mahasiswa Hukum, Advokat, dan Calon Hakim Ad Hoc Tipikor.",
            "bullets": [
                ("18 BAB Materi Lengkap", "Membahas seluruh spektrum delik korupsi."),
                ("20 Diagram Alur Logika", "Mudah dipahami tanpa menghafal manual."),
                ("Format Fleksibel", "Tersedia Online (Lynk) & Download PDF.")
            ]
        }
    ]

    generate_carousel_slides(carousel_data, OUTPUT_DIR / "carousel_post")

    print("\n✅ PEMBARUAN SELESAI: SEMUA SLIDE & VIDEO SUDAH RATA TENGAH ATAS-BAWAH!")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Generate placeholder images for the portfolio (projects, team, testimonials, videos, og-image)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

BASE = Path("/opt/data/portfolio-template/public")

def font(size, bold=True):
    candidates = [
        Path("/opt/data/crypto-tools/poster-gen/fonts/Poppins-SemiBold.ttf"),
        Path("/opt/data/crypto-tools/poster-gen/fonts/DejaVuSans-Bold.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ]
    for c in candidates:
        if c.exists():
            try:
                return ImageFont.truetype(str(c), size)
            except Exception:
                continue
    return ImageFont.load_default()

def rounded(draw, box, radius, fill):
    draw.rounded_rectangle(box, radius=radius, fill=fill)

def gradient_bg(w, h, c1, c2, horizontal=False):
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    for i in range(max(w, h) if horizontal else h):
        t = i / max(w, h)
        r = int(c1[0] + (c2[0] - c1[0]) * t)
        g = int(c1[1] + (c2[1] - c1[1]) * t)
        b = int(c1[2] + (c2[2] - c1[2]) * t)
        if horizontal:
            d.line([(i, 0), (i, h)], fill=(r, g, b))
        else:
            d.line([(0, i), (w, i)], fill=(r, g, b))
    return img

def add_decor(draw, w, h):
    for _ in range(12):
        import random
        random.seed(7)
    for x, y, r in [(w*0.85, h*0.15, 60), (w*0.1, h*0.8, 90), (w*0.6, h*0.9, 40)]:
        draw.ellipse([x-r, y-r, x+r, y+r], outline=(255, 255, 255, 60), width=2)

def project_img(name, label, c1, c2):
    img = gradient_bg(800, 450, c1, c2, horizontal=True)
    d = ImageDraw.Draw(img, "RGBA")
    add_decor(d, 800, 450)
    # dark overlay bar
    d.rectangle([0, 320, 800, 450], fill=(13, 18, 36, 200))
    d.text((40, 350), label, font=font(34), fill=(255, 255, 255))
    d.text((40, 400), "Ibnu WM • Software Development", font=font(18, bold=False), fill=(160, 170, 210))
    img.save(BASE / "projects" / name)
    print("project", name)

def team_img(name, initials, c1, c2):
    img = gradient_bg(400, 400, c1, c2)
    d = ImageDraw.Draw(img, "RGBA")
    add_decor(d, 400, 400)
    # circular avatar area
    d.ellipse([100, 80, 300, 280], fill=(13, 18, 36, 90), outline=(255, 255, 255, 120), width=4)
    # initials
    txt = font(72)
    bbox = d.textbbox((0, 0), initials, font=txt)
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    d.text(((400-tw)/2 - bbox[0], (400-th)/2 - bbox[1] + 20), initials, font=txt, fill=(255, 255, 255))
    # name bar
    d.rectangle([0, 300, 400, 400], fill=(13, 18, 36, 200))
    d.text((150, 330), name, font=font(22), fill=(255, 255, 255))
    img.save(BASE / "team" / name)
    print("team", name)

def testimonial_img(name, initials, c1, c2):
    img = gradient_bg(200, 200, c1, c2)
    d = ImageDraw.Draw(img, "RGBA")
    d.ellipse([40, 30, 160, 150], fill=(13, 18, 36, 90), outline=(255, 255, 255, 120), width=3)
    txt = font(40)
    bbox = d.textbbox((0, 0), initials, font=txt)
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    d.text(((200-tw)/2 - bbox[0], (200-th)/2 - bbox[1] - 10), initials, font=txt, fill=(255, 255, 255))
    img.save(BASE / "testimonials" / name)
    print("testimonial", name)

def video_img(name, label, c1, c2):
    img = gradient_bg(640, 360, c1, c2, horizontal=True)
    d = ImageDraw.Draw(img, "RGBA")
    add_decor(d, 640, 360)
    # play button
    d.ellipse([270, 130, 370, 230], fill=(255, 255, 255, 230))
    d.polygon([(295, 155), (295, 205), (345, 180)], fill=(13, 18, 36))
    d.rectangle([0, 270, 640, 360], fill=(13, 18, 36, 200))
    d.text((24, 295), label, font=font(24), fill=(255, 255, 255))
    d.text((24, 330), "Video Portfolio • Ibnu WM", font=font(14, bold=False), fill=(160, 170, 210))
    img.save(BASE / "videos" / name)
    print("video", name)

def og_image():
    img = gradient_bg(1200, 630, (124, 58, 237), (236, 72, 153), horizontal=True)
    d = ImageDraw.Draw(img, "RGBA")
    add_decor(d, 1200, 630)
    d.rectangle([0, 430, 1200, 630], fill=(13, 18, 36, 210))
    d.text((80, 90), "IBNU WM", font=font(88), fill=(255, 255, 255))
    d.text((82, 200), "Software Developer & AI Automation", font=font(44), fill=(22, 242, 179))
    d.text((80, 270), "Solusi Digital untuk UMKM & Startup Indonesia", font=font(30, bold=False), fill=(220, 225, 240))
    d.text((80, 470), "AI Chatbot • Web Development • n8n Automation • Crypto Tools", font=font(26), fill=(200, 210, 235))
    d.text((80, 520), "WhatsApp: +62 812-3456-7890  |  ibnuwm.com", font=font(22, bold=False), fill=(150, 160, 200))
    img.save(BASE / "og-image.png")
    print("og-image done")

projects = [
    ("ai-chatbot.png", "AI Chatbot UMKM - Qwen + Llama.cpp", (124, 58, 237), (22, 242, 179)),
    ("n8n-workflows.png", "n8n Automation Dashboard", (236, 72, 153), (249, 115, 22)),
    ("dca-simulator.png", "DCA Simulator Crypto", (59, 130, 246), (22, 242, 179)),
    ("crypto-poster.png", "Crypto Poster Generator", (16, 185, 129), (124, 58, 237)),
    ("laravel-saas.png", "Laravel SaaS - VPS AI Ready", (249, 115, 22), (236, 72, 153)),
    ("tiktok-auto.png", "TikTok Shop Auto Workflow", (238, 130, 238), (59, 130, 246)),
]

team = [
    ("ibnu.jpg", "Ibnu WM", "IW", (124, 58, 237), (236, 72, 153)),
    ("backend.jpg", "Sarah Wijaya", "SW", (59, 130, 246), (22, 242, 179)),
    ("ai.jpg", "Ahmad Rizki", "AR", (16, 185, 129), (249, 115, 22)),
    ("auto.jpg", "Dewi Lestari", "DL", (249, 115, 22), (236, 72, 153)),
]

testimonials = [
    ("budi.jpg", "Budi", "BS", (124, 58, 237), (22, 242, 179)),
    ("siti.jpg", "Siti", "SR", (236, 72, 153), (249, 115, 22)),
    ("ahmad.jpg", "Ahmad", "AF", (59, 130, 246), (22, 242, 179)),
    ("dewi.jpg", "Dewi", "DP", (16, 185, 129), (124, 58, 237)),
    ("rudi.jpg", "Rudi", "RH", (249, 115, 22), (236, 72, 153)),
    ("lisa.jpg", "Lisa", "LK", (238, 130, 238), (59, 130, 246)),
]

videos = [
    ("n8n-wa.jpg", "n8n + WhatsApp Automation", (16, 185, 129), (124, 58, 237)),
    ("chatbot-demo.jpg", "AI Chatbot UMKM Demo", (124, 58, 237), (22, 242, 179)),
    ("dca-sim.jpg", "DCA Simulator Demo", (59, 130, 246), (22, 242, 179)),
    ("crypto-poster.jpg", "Crypto Poster Pipeline", (236, 72, 153), (249, 115, 22)),
    ("laravel-deploy.jpg", "Laravel + VPS AI Deploy", (249, 115, 22), (236, 72, 153)),
    ("tiktok-workflow.jpg", "TikTok Affiliate Workflow", (238, 130, 238), (59, 130, 246)),
]

(BASE / "projects").mkdir(exist_ok=True)
(BASE / "team").mkdir(exist_ok=True)
(BASE / "testimonials").mkdir(exist_ok=True)
(BASE / "videos").mkdir(exist_ok=True)

for name, label, c1, c2 in projects:
    project_img(name, label, c1, c2)
for name, label, ini, c1, c2 in team:
    team_img(name, ini, c1, c2)
for name, label, ini, c1, c2 in testimonials:
    testimonial_img(name, ini, c1, c2)
for name, label, c1, c2 in videos:
    video_img(name, label, c1, c2)
og_image()

print("ALL DONE")

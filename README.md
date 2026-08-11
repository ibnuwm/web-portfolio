# Ibnu WM - Developer Portfolio

Portfolio website untuk **Ibnu WM** - Software Developer & AI Automation Specialist fokus pada solusi digital untuk UMKM & startup Indonesia.

## 🚀 Fitur Utama

### Trust Building Elements (Khusus Pasar Indonesia)
- **WhatsApp Button Prominent** - Floating widget + navbar + hero + contact section
- **Alamat Kantor Fisik** - Dengan link Google Maps & jam operasional
- **Team Section** - Foto & profil tim (4 orang: Founder, Backend, AI/ML, Automation)
- **Multiple Contact Options** - WA, Telepon, Email, Maps, Sosial Media
- **Testimonials dengan Video** - 6 testimoni klien real, support video YouTube/Instagram

### Content Strategy
- **Pricing Packages** - Basic (Rp5jt), Standard (Rp15jt), Premium (Rp50jt) dengan tabel perbandingan
- **Promo/Discount Banner** - Component reusable dengan countdown
- **Blog Bahasa Indonesia** - Fetch dari dev.to, format tanggal lokal, read time
- **Video Portfolio** - 6 video demo project dengan modal player
- **Add-ons Services** - 6 layanan tambahan dengan harga transparan

### Design Preferences Indonesia
- **Warna Cerah & Bold** - Violet/Pink/Orange/Green palette (bukan minimalis gelap)
- **Mobile-First** - Responsive breakpoints xs, sm, md, lg, xl, 4k
- **Loading Cepat** - Next.js 15, Image optimization, font display:swap
- **Visual Heavy** - Hero code animation, project cards, team photos, video thumbnails
- **Animations** - Framer-motion style CSS animations, reduced-motion support

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript / JavaScript (JSX)
- **Icons**: React Icons (FA, FA6, BS, IO, RI, SI, TB, MD, CI, BI, CG)
- **Forms**: React Hook Form ready, Axios, Nodemailer
- **Notifications**: React Toastify, Telegram Bot API
- **Fonts**: Inter (Google Fonts, display:swap)
- **Deployment**: Vercel, Docker ready

## 📦 Project Structure

```
├── app/
│   ├── components/
│   │   ├── homepage/
│   │   │   ├── about/           # About section + services + stats
│   │   │   ├── blog/            # Blog index + blog card
│   │   │   ├── contact/         # Contact form + info + WA prominent
│   │   │   ├── experience/      # Timeline experience
│   │   │   ├── hero-section/    # Hero + WA button + code animation
│   │   │   ├── pricing/         # 3 packages + add-ons + promo banner
│   │   │   ├── projects/        # Sticky scroll project cards
│   │   │   ├── skills/          # Marquee skills
│   │   │   ├── team/            # Team grid 4 members
│   │   │   ├── testimonials/    # Carousel + video modal
│   │   │   ├── video-portfolio/ # Video grid + modal player
│   │   │   ├── education/       # Education + lottie
│   │   │   └── whats-app-float.jsx  # Floating WA widget
│   │   ├── helper/              # Animation, glow-card, scroll-to-top
│   │   ├── navbar.jsx           # Responsive navbar + WA CTA
│   │   └── footer.jsx           # Footer + links + social + WA CTA
│   ├── api/
│   │   ├── contact/route.js     # Email + Telegram notification
│   │   └── ...
│   ├── blog/page.js             # Blog listing page
│   ├── layout.js                # Root layout + SEO + fonts
│   ├── page.js                  # Home page composition
│   └── globals.scss             # Global styles + custom scrollbar
├── utils/data/
│   ├── personal-data.js         # Personal info + WA + office
│   ├── skills.js                # 30+ tech skills
│   ├── projects-data.js         # 6 featured projects
│   ├── team.js                  # 4 team members
│   ├── testimonials.js          # 6 client testimonials
│   ├── pricing.js               # 3 packages + 6 add-ons + promo
│   ├── educations.js            # Education history
│   └── experience.js            # Work experience
├── public/                      # Images, SVGs, videos
├── tailwind.config.js           # Custom Indonesian color palette
├── next.config.js               # Image domains, sass
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) / npm / yarn

### Installation

```bash
# Clone & install
git clone <repo-url>
cd portfolio-template
pnpm install

# Copy env
cp .env.example .env.local
# Edit .env.local with your credentials

# Development
pnpm dev

# Build
pnpm build

# Production
pnpm start
```

### Environment Variables

```env
# App
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_GTM=GTM-XXXXXX

# Email (Gmail SMTP)
EMAIL_ADDRESS=your@gmail.com
GMAIL_PASSKEY=your-app-password

# Telegram Bot (for contact form notifications)
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_CHAT_ID=-1001234567890

# Optional Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
```

## 🎨 Customization

### 1. Personal Data
Edit `utils/data/personal-data.js`:
```js
export const personalData = {
  name: "NAMA ANDA",
  designation: "Software Developer & AI Specialist",
  whatsapp: "+628xxxxxxxxxx",
  whatsappMessage: "Custom message...",
  officeAddress: "Alamat kantor lengkap",
  officeHours: "Senin - Jumat: 09:00 - 18:00 WIB",
  googleMapsUrl: "https://maps.google.com/...",
  // ... sosial media links
}
```

### 2. Projects
Edit `utils/data/projects-data.js` - tambah project Anda

### 3. Team
Edit `utils/data/team.js` - ganti foto & bio tim

### 4. Testimonials
Edit `utils/data/testimonials.js` - testimoni klien real

### 5. Pricing
Edit `utils/data/pricing.js` - sesuaikan paket & harga

### 6. Colors (Tailwind)
Edit `tailwind.config.js` - palette `primary`, `secondary`, `accent`, `success`

## 📱 Mobile-First Checklist

- [x] Breakpoint `xs: 480px` added
- [x] Touch targets ≥ 44px (WA button, nav links)
- [x] Font sizes responsive (text-sm → text-base → text-lg)
- [x] Grid layouts: 1 col → 2 col → 3/4 col
- [x] Hamburger menu dengan slide animation
- [x] Floating WA widget auto-hide prompt after 8s
- [x] Images: `sizes` prop untuk responsive loading
- [x] Reduced motion support (`prefers-reduced-motion`)

## ⚡ Performance Optimizations

- **Next.js Image** - Priority loading hero/profile, lazy others
- **Font Display Swap** - Inter font non-blocking
- **Code Splitting** - Automatic per route
- **Static Generation** - Blog pages pre-rendered
- **Compression** - gzip/brotli via Vercel
- **Cache Headers** - Static assets 1 year

## 🔧 API Routes

### Contact Form (`POST /api/contact`)
```json
{
  "name": "Nama Lengkap",
  "email": "email@domain.com",
  "message": "Pesan..."
}
```
Response: Email via Gmail SMTP + Telegram Bot notification

## 🐳 Docker Deployment

Image production multi-stage (Next.js standalone — runtime minim, non-root user, healthcheck).

```bash
# 1. Build & jalankan (join network NPM: npm_default)
docker compose up -d --build

# 2. Cek status
docker compose ps

# 3. Logs
docker compose logs -f portfolio
```

**Setup Nginx Proxy Manager:**
1. Pastikan network sama: `docker network ls` → sesuaikan `name: npm_default` di `docker-compose.yml` dengan network NPM kamu.
2. NPM Admin (`http://npm:81`) → **Hosts → Proxy Hosts → Add Proxy Host**:
   - Domain Names: `portfolio.ibnuwm.com`
   - Forward Hostname: `portfolio` (nama service)
   - Forward Port: `3000`
   - Centang **Block Common Exploits** + **Websockets Support**
3. Save → situs live.

**Build manual:**
```bash
docker build -t ibnuwm-portfolio .
docker run -d --name portfolio -p 3100:3000 --restart unless-stopped ibnuwm-portfolio
```

**Env vars** (opsional, untuk contact form): salin `.env.example` → `.env`, isi `EMAIL_ADDRESS`, `GMAIL_PASSKEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`. Tanpa `.env` situs tetap jalan, API kontak hanya balas error 400.

## 📄 License

MIT License - bebas digunakan untuk portfolio pribadi/komersial.

## 🤝 Credits

Template base: [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio)
Customized for Indonesian market by Ibnu WM.

---

**Ready to deploy?** Push ke GitHub → Import di Vercel → Add env vars → Deploy! 🚀
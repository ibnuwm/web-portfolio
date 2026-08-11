export const projectsData = [
  {
    id: 1,
    name: "AI Chatbot UMKM",
    description: "Chatbot AI lokal untuk UMKM Indonesia menggunakan Qwen/Llama.cpp, deployment VPS siap pakai dengan proxy chat ke model lokal. Fitur: multi-tenant, billing otomatis, dashboard admin.",
    tools: ["Next.js", "Python", "Llama.cpp", "Docker", "PostgreSQL", "WhatsApp API"],
    role: "Fullstack Developer & AI Engineer",
    github: "https://github.com/ibnuwm/ai-chatbot-umkm",
    liveDemo: "https://vps-ai.ibnuwm.com",
    image: "/projects/ai-chatbot.png",
    featured: true,
    category: "AI Automation"
  },
  {
    id: 2,
    name: "TikTok Shop Affiliate Automation",
    description: "Sistem semi-otomatis produksi video affiliate TikTok Shop: riset trending harian → script AI → TTS edge-tts → edit FFmpeg → upload scheduler. Target komisi Rp100jt/bulan.",
    tools: ["n8n", "Python", "FFmpeg", "Edge TTS", "Whisper", "TikTok API", "Google Sheets"],
    role: "Automation Engineer",
    github: "https://github.com/ibnuwm/tiktok-affiliate-auto",
    liveDemo: null,
    image: "/projects/tiktok-auto.png",
    featured: true,
    category: "Content Automation"
  },
  {
    id: 3,
    name: "Crypto Content Generator",
    description: "Poster generator otomatis untuk Instagram/X/Telegram: alert harga, digest pasar, edukasi kripto. Monetisasi via afiliasi exchange. Cron harian 07:00 WIB, Pillow + CoinGecko API.",
    tools: ["Python", "Pillow", "CoinGecko API", "Cron", "Instagram API", "Telegram Bot"],
    role: "Content Pipeline Developer",
    github: "https://github.com/ibnuwm/crypto-poster-gen",
    liveDemo: "https://t.me/kriptocermat",
    image: "/projects/crypto-poster.png",
    featured: true,
    category: "Crypto Tools"
  },
  {
    id: 4,
    name: "DCA Simulator & Portfolio Tracker",
    description: "Simulator Dollar Cost Averaging untuk aset kripto & saham Indonesia. Backtest historis, proyeksi return, rebalancing otomatis, export laporan PDF untuk klien.",
    tools: ["React", "TypeScript", "Chart.js", "Yahoo Finance API", "pdfmake", "Vercel"],
    role: "Frontend Developer",
    github: "https://github.com/ibnuwm/dca-simulator",
    liveDemo: "https://dca.ibnuwm.com",
    image: "/projects/dca-simulator.png",
    featured: false,
    category: "FinTech"
  },
  {
    id: 5,
    name: "Laravel SaaS Boilerplate",
    description: "Starter kit Laravel + Livewire untuk SaaS multi-tenant: billing (Midtrans/Xendit), auth, tim management, API tokens, admin panel, deployment Docker siap VPS Indonesia.",
    tools: ["Laravel", "Livewire", "MySQL", "Redis", "Docker", "Midtrans", "Xendit"],
    role: "Backend Developer & DevOps",
    github: "https://github.com/ibnuwm/laravel-saas-boilerplate",
    liveDemo: "https://saas.ibnuwm.com",
    image: "/projects/laravel-saas.png",
    featured: false,
    category: "Web Development"
  },
  {
    id: 6,
    name: "n8n Workflow Templates Indonesia",
    description: "Koleksi workflow n8n siap pakai untuk bisnis Indonesia: WA Broadcast, Google Sheets Sync, Midtrans Invoice, TikTok Shop Order Sync, Crypto Price Alert. Import 1-klik.",
    tools: ["n8n", "JavaScript", "WhatsApp API", "Google Sheets API", "Midtrans API"],
    role: "Automation Engineer",
    github: "https://github.com/ibnuwm/n8n-indonesia-workflows",
    liveDemo: null,
    image: "/projects/n8n-workflows.png",
    featured: false,
    category: "Automation"
  }
]
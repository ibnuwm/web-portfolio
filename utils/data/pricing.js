export const pricingData = {
  currency: "IDR",
  period: "per project",
  promo: {
    active: true,
    label: "PROMO MERDEKA",
    discount: 15,
    description: "Diskon 15% untuk project dimulai bulan ini",
    validUntil: "2026-08-31"
  },
  packages: [
    {
      id: "basic",
      name: "Basic",
      subtitle: "Untuk UMKM & Personal Branding",
      price: 5000000,
      originalPrice: 6000000,
      features: [
        "Website Company Profile (5 halaman)",
        "Responsive Mobile & Desktop",
        "SEO Basic (Meta tags, Sitemap)",
        "Form Kontak + WhatsApp Integration",
        "Google Maps Embed",
        "SSL & Hosting 1 Tahun",
        "2x Revisi Desain",
        "Support Email 30 Hari"
      ],
      notIncluded: [
        "CMS / Admin Panel",
        "E-commerce / Payment Gateway",
        "Blog System",
        "Multi-language",
        "Custom Animation"
      ],
      cta: "Mulai Project",
      popular: false,
      color: "from-blue-500 to-blue-600",
      icon: "🚀"
    },
    {
      id: "standard",
      name: "Standard",
      subtitle: "Untuk Bisnis Berkembang & SaaS MVP",
      price: 15000000,
      originalPrice: 18000000,
      features: [
        "Semua fitur Basic",
        "CMS / Admin Panel (Kelola Konten)",
        "Blog System + Kategori + Tag",
        "E-commerce Basic (Produk, Keranjang, Checkout)",
        "Payment Gateway (Midtrans/Xendit)",
        "User Auth (Login, Register, Role)",
        "Dashboard Admin (Analytics, Orders)",
        "WhatsApp Business API Integration",
        "Email Notification System",
        "5x Revisi Desain",
        "Support Priority 60 Hari",
        "Deploy VPS + Domain Setup"
      ],
      notIncluded: [
        "Multi-tenant Architecture",
        "Advanced AI Features",
        "Custom Mobile App",
        "Load Balancing / Auto-scaling"
      ],
      cta: "Pesan Sekarang",
      popular: true,
      color: "from-violet-500 to-pink-500",
      icon: "⭐"
    },
    {
      id: "premium",
      name: "Premium",
      subtitle: "Enterprise & AI-Powered Solutions",
      price: 50000000,
      originalPrice: 60000000,
      features: [
        "Semua fitur Standard",
        "Multi-tenant / White-label Ready",
        "AI Chatbot / LLM Integration",
        "n8n Workflow Automation Custom",
        "Real-time Features (WebSocket)",
        "Advanced Analytics Dashboard",
        "API Documentation (Swagger/OpenAPI)",
        "CI/CD Pipeline (GitHub Actions/GitLab)",
        "Docker + Kubernetes Ready",
        "Load Testing & Optimization",
        "Security Audit Basic",
        "Unlimited Revisi",
        "Support Dedicated 1 Tahun",
        "Training Tim Client (2 Sesi)",
        "SLA 99.9% Uptime"
      ],
      notIncluded: [],
      cta: "Konsultasi Gratis",
      popular: false,
      color: "from-amber-500 to-orange-500",
      icon: "👑"
    }
  ],
  addOns: [
    {
      name: "Mobile App (React Native/Flutter)",
      price: 25000000,
      description: "iOS & Android dari codebase web"
    },
    {
      name: "AI Chatbot Custom Training",
      price: 10000000,
      description: "Fine-tuning LLM dengan data bisnis Anda"
    },
    {
      name: "n8n Advanced Workflow",
      price: 5000000,
      description: "Automasi kompleks multi-step & integrasi"
    },
    {
      name: "Maintenance Bulanan",
      price: 2000000,
      description: "Update, backup, monitoring, support"
    },
    {
      name: "SEO Advanced (6 Bulan)",
      price: 8000000,
      description: "Keyword research, content, backlink, audit"
    },
    {
      name: "Custom Dashboard Analytics",
      price: 7000000,
      description: "Real-time metrics, export, multi-user"
    }
  ]
}
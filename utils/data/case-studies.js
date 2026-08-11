export const caseStudies = [
  {
    id: 1,
    title: "Chatbot WhatsApp untuk Toko Kue Online",
    client: "Bakery UMKM — Bandung",
    category: "AI Chatbot & Automation",
    summary:
      "Otomatisasi pemesanan kue via WhatsApp: katalog otomatis, checkout ringkas, dan notifikasi stok. Chatbot terhubung ke database order sehingga admin tidak perlu membalas pesan berulang.",
    results: [
      { metric: "Waktu balas pelanggan", value: "-90%" },
      { metric: "Pesanan via chat", value: "+38%" },
      { metric: "Rasio keluar dari chat", value: "-55%" },
    ],
    stack: ["WhatsApp Business API", "n8n", "PostgreSQL", "Node.js"],
    duration: "3 minggu",
    year: 2025,
  },
  {
    id: 2,
    title: "Company Profile & Sistem Booking untuk Klinik Kecantikan",
    client: "Klinik Estetika — Jakarta Selatan",
    category: "Web Development",
    summary:
      "Website company profile dengan sistem booking online, integrasi pembayaran DP, dan reminder otomatis via WhatsApp untuk mengurangi no-show pasien.",
    results: [
      { metric: "Jadwal booking online", value: "+120%" },
      { metric: "Tingkat no-show", value: "-40%" },
      { metric: "Loading page", value: "0.8s" },
    ],
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "WhatsApp API"],
    duration: "5 minggu",
    year: 2025,
  },
  {
    id: 3,
    title: "Automasi n8n untuk Rekap Penjualan Marketplace",
    client: "Distributor FMCG — Surabaya",
    category: "n8n Workflow Automation",
    summary:
      "Workflow n8n yang menarik order dari marketplace ke Google Sheets, mengirim rekap harian ke grup Telegram, dan menyinkronkan stok ke WhatsApp Business.",
    results: [
      { metric: "Waktu admin per hari", value: "-5 jam" },
      { metric: "Error input manual", value: "-100%" },
      { metric: "Laporan harian", value: "Otomatis" },
    ],
    stack: ["n8n", "Google Sheets API", "Telegram Bot", "WhatsApp API"],
    duration: "2 minggu",
    year: 2024,
  },
  {
    id: 4,
    title: "Landing Page Produk untuk Kampanye TikTok Shop",
    client: "Brand Fashion Lokal — Online",
    category: "Web Development & Content",
    summary:
      "Landing page kampanye dengan tautan alur (link in bio), katalog produk, dan integrasi affiliate TikTok Shop. Dilengkapi lead capture ke email list untuk retargeting.",
    results: [
      { metric: "Konversi klik ke pembelian", value: "+22%" },
      { metric: "Lead ter-capture", value: "1.800+/bulan" },
      { metric: "Waktu pengerjaan", value: "1 minggu" },
    ],
    stack: ["Next.js", "TikTok Affiliate", "Email Marketing", "GA4"],
    duration: "1 minggu",
    year: 2024,
  },
];

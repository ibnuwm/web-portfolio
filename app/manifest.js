const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ibnuwm.com";

export default function manifest() {
  return {
    name: "Ibnu WM - Software Developer & AI Automation Specialist",
    short_name: "Ibnu WM",
    description:
      "Solusi digital untuk UMKM & startup Indonesia: AI Chatbot WhatsApp, Web Development, n8n Automation, dan Crypto Tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1224",
    theme_color: "#0d1224",
    lang: "id",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Blog & Insight",
        url: "/blog",
        description: "Artikel teknis dan insight terbaru",
      },
      {
        name: "Hubungi Saya",
        url: "/#contact",
        description: "Konsultasi gratis via WhatsApp",
      },
    ],
    screenshots: [
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
    url: siteUrl,
    id: siteUrl,
  };
}

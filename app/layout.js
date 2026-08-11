import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnalyticsTracker from "./components/analytics-tracker";
import PWARegister from "./components/pwa-register";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ibnuwm.com";
const gtmId = process.env.NEXT_PUBLIC_GTM;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ibnu WM - Software Developer & AI Automation Specialist | Indonesia",
    template: "%s | Ibnu WM Portfolio",
  },
  description: "Software Developer & AI Automation Specialist fokus pada solusi digital untuk UMKM & startup Indonesia. Layanan: AI Chatbot, Web Development, n8n Automation, Crypto Tools, TikTok Shop Affiliate. Konsultasi gratis.",
  keywords: [
    "software developer indonesia",
    "AI automation",
    "chatbot AI indonesia",
    "web development jakarta",
    "n8n workflow",
    "whatsapp business api",
    "tiktok shop affiliate",
    "crypto tools",
    "UMKM digitalisasi",
    "freelance developer indonesia",
  ],
  authors: [{ name: "Ibnu WM", url: siteUrl }],
  creator: "Ibnu WM",
  publisher: "Ibnu WM",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": siteUrl,
      "x-default": siteUrl,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon-192.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Ibnu WM Portfolio",
    title: "Ibnu WM - Software Developer & AI Automation Specialist",
    description: "Solusi digital untuk UMKM & startup Indonesia: AI Chatbot, Web Development, n8n Automation, Crypto Tools. Konsultasi gratis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ibnu WM - Software Developer & AI Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibnu WM - Software Developer & AI Automation Specialist",
    description: "Solusi digital untuk UMKM & startup Indonesia. AI Chatbot, Web Dev, n8n Automation.",
    images: ["/og-image.png"],
    creator: "@ibnuwm",
  },
  verification: googleVerification
    ? { google: googleVerification }
    : undefined,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ibnu WM Portfolio",
      inLanguage: "id-ID",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ibnu WM",
      url: siteUrl,
      jobTitle: "Software Developer & AI Automation Specialist",
      description:
        "Software Developer & AI Automation Specialist untuk UMKM dan startup Indonesia.",
      sameAs: [
        "https://github.com/ibnuwm",
        "https://linkedin.com/in/ibnuwm",
        "https://instagram.com/ibnuwm",
        "https://youtube.com/@ibnuwm",
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      serviceType: "AI Automation & Software Development",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: "ID",
      availableLanguage: ["id", "en"],
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        description: "Paket AI Chatbot, Web Development, dan n8n Automation untuk UMKM.",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa biaya pembuatan chatbot WhatsApp AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya bervariasi tergantung kompleksitas dan integrasi. Lihat halaman paket harga untuk estimasi, atau konsultasi gratis untuk kebutuhan spesifik bisnis Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah tersedia konsultasi gratis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, konsultasi awal gratis untuk membantu menentukan solusi digital yang tepat bagi bisnis Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Teknologi apa saja yang dikuasai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, Docker, Kubernetes, n8n, dan integrasi WhatsApp Business API.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ToastContainer
          position="top-right"
          theme="dark"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toast-container-custom"
          toastClassName="toast-custom"
        />
        <main className="min-h-screen relative pt-16 lg:pt-20">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <AnalyticsTracker />
        <PWARegister />
        <Footer />
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  );
}

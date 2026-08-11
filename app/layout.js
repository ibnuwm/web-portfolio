import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  title: {
    default: "Ibnu WM - Software Developer & AI Automation Specialist | Indonesia",
    template: "%s | Ibnu WM Portfolio"
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
    "freelance developer indonesia"
  ],
  authors: [{ name: "Ibnu WM", url: "https://ibnuwm.com" }],
  creator: "Ibnu WM",
  publisher: "Ibnu WM",
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
    url: "https://ibnuwm.com",
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
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.telegram.org" />
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
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
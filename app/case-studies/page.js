import { personalData } from "@/utils/data/personal-data";
import { caseStudies } from "@/utils/data/case-studies";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Case Studies",
  description:
    "Studi kasus nyata hasil kerja: AI Chatbot WhatsApp, Web Development, dan n8n Automation dengan angka hasil yang terukur untuk UMKM & startup Indonesia.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies - Ibnu WM",
    description:
      "Bukti hasil kerja terukur: chatbot, website, dan automasi untuk UMKM Indonesia.",
    url: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  const whatsappUrl = `https://wa.me/${personalData.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    personalData.whatsappMessage || "Halo, saya ingin hasil serupa dengan case study Anda."
  )}`;

  return (
    <div className="container-page relative z-50 py-12 lg:py-20">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Case Studies
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Hasil Nyata, Bukan Janji
        </h1>
        <p className="text-gray-400">
          Setiap proyek diukur dari dampak bisnis. Berikut beberapa studi kasus dengan
          angka hasil yang bisa Anda bandingkan dengan kebutuhan Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {caseStudies.map((cs) => (
          <article
            key={cs.id}
            className="rounded-2xl border border-[#25213b] bg-[#0d1224] p-6 lg:p-8 flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30 px-3 py-1 text-xs font-medium">
                {cs.category}
              </span>
              <span className="text-xs text-gray-500">
                {cs.client} · {cs.duration} ({cs.year})
              </span>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{cs.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{cs.summary}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {cs.results.map((result) => (
                <div
                  key={result.metric}
                  className="rounded-xl bg-[#1a1443] border border-[#25213b] p-3 text-center"
                >
                  <p className="text-base lg:text-lg font-bold text-[#16f2b3]">
                    {result.value}
                  </p>
                  <p className="text-[10px] lg:text-xs text-gray-400 mt-1">
                    {result.metric}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {cs.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[#10172d] border border-[#353a52] px-2.5 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Ingin hasil serupa untuk bisnis Anda?
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-track="wa_click"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30"
        >
          <FaWhatsapp size={18} />
          <span>Diskusikan Proyek Anda</span>
        </a>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm"
        >
          <span>Kembali ke Beranda</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

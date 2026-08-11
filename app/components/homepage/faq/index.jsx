// @flow strict
"use client";

import { useState } from "react";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import { faqs } from "@/utils/data/faq";
import { personalData } from "@/utils/data/personal-data";

function FAQ() {
  const [openId, setOpenId] = useState(null);
  const whatsappUrl = `https://wa.me/${personalData.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    personalData.whatsappMessage || "Halo, saya punya pertanyaan tentang layanan Anda."
  )}`;

  return (
    <div id="faq" className="container-page relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            FAQ
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="mx-auto max-w-3xl flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#25213b] bg-[#0d1224] overflow-hidden transition-colors hover:border-violet-500/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                >
                  <span className="text-white text-sm sm:text-base font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-violet-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown size={16} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="wa_click"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30"
          >
            <FaWhatsapp size={18} />
            <span>Masih ada pertanyaan? Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

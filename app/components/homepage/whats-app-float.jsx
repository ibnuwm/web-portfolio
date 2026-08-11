"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { personalData } from "@/utils/data/personal-data";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${personalData.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(personalData.whatsappMessage || 'Halo, saya tertarik dengan layanan development Anda. Bisa diskusikan project saya?')}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Prompt bubble */}
        {showPrompt && !isOpen && (
          <div className="absolute bottom-16 right-0 w-72 bg-white text-gray-900 rounded-lg shadow-lg p-4 mb-2 animate-slide-in-right">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FaWhatsapp size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Butuh bantuan project?</p>
                <p className="text-xs text-gray-600 mt-1">Chat langsung via WhatsApp, balasan cepat!</p>
              </div>
              <button
                onClick={() => setShowPrompt(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="absolute bottom-[-6px] right-6 w-0 h-0 border-3 border-transparent border-t-white"></div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110 animate-bounce-subtle ${isOpen ? 'rotate-45' : ''}`}
          aria-label="Chat WhatsApp"
        >
          <FaWhatsapp size={28} className="transition-transform duration-300" />
        </a>

        {/* Expanded options - on hover for desktop, click for mobile */}
        <div className="absolute bottom-20 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2">
          <div className="flex flex-col-reverse gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-green-700 px-4 py-3 rounded-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <FaWhatsapp size={20} />
              <span className="font-medium">Chat WhatsApp</span>
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="flex items-center gap-3 bg-white text-blue-700 px-4 py-3 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="font-medium">Telepon</span>
            </a>
            <a
              href={personalData.email ? `mailto:${personalData.email}` : "#contact"}
              className="flex items-center gap-3 bg-white text-purple-700 px-4 py-3 rounded-lg shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 2s infinite; }
      `}</style>
    </>
  );
}
// @flow strict
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaXmark, FaWhatsapp } from "react-icons/fa6";
import { personalData } from "@/utils/data/personal-data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${personalData.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(personalData.whatsappMessage || 'Halo, saya tertarik dengan layanan development Anda.')}`;

  const navLinks = [
    { href: "/#about", label: "Tentang" },
    { href: "/#experience", label: "Pengalaman" },
    { href: "/#skills", label: "Keahlian" },
    { href: "/#projects", label: "Project" },
    { href: "/#team", label: "Tim" },
    { href: "/#testimonials", label: "Testimoni" },
    { href: "/#pricing", label: "Harga" },
    { href: "/#video-portfolio", label: "Video" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Kontak" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d1224]/95 backdrop-blur-md border-b border-[#25213b] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 lg:py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#16f2b3] text-2xl lg:text-3xl font-bold hover:opacity-80 transition-opacity"
            aria-label="Ibnu WM - Home"
          >
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              IBNU WM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center gap-1 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-500 after:to-pink-500 hover:after:w-full transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            
            {/* WhatsApp CTA in Navbar */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="wa_click"
              data-track-label="navbar-desktop"
              className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:scale-105"
            >
              <FaWhatsapp size={18} />
              <span>Chat WA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="wa_click"
              data-track-label="navbar-mobile"
              className="p-2 bg-green-500/20 text-green-400 rounded-full hover:bg-green-500/40 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gradient-to-b from-[#0d1224] to-[#1a1443] border-b border-[#25213b] rounded-b-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white rounded-lg hover:bg-violet-500/20 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* WhatsApp in Mobile Menu */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="wa_click"
              data-track-label="navbar-menu"
              className="block flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp size={20} />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
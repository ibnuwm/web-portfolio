// @flow strict
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { personalData } from "@/utils/data/personal-data";
import NewsletterForm from "./homepage/newsletter-form";

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${personalData.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(personalData.whatsappMessage || 'Halo, saya tertarik dengan layanan development Anda.')}`;

  const footerLinks = {
    layanan: [
      { label: "AI Chatbot & Automation", href: "/#pricing" },
      { label: "Web Development", href: "/#projects" },
      { label: "n8n Workflow Automation", href: "/#projects" },
      { label: "Crypto Tools Development", href: "/#projects" },
      { label: "Content Automation", href: "/#projects" },
      { label: "Mobile App & PWA", href: "/#contact" },
    ],
    perusahaan: [
      { label: "Tentang Kami", href: "/#about" },
      { label: "Tim Kami", href: "/#team" },
      { label: "Portfolio Project", href: "/#projects" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimoni Klien", href: "/#testimonials" },
      { label: "Blog & Insight", href: "/blog" },
      { label: "Video Portfolio", href: "/#video-portfolio" },
    ],
    dukungan: [
      { label: "Konsultasi Gratis", href: "/#contact" },
      { label: "FAQ", href: "/#faq" },
      { label: "Syarat & Ketentuan", href: "/#contact" },
      { label: "Kebijakan Privasi", href: "/#contact" },
      { label: "SLA & Support", href: "/#pricing" },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: personalData.github, label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaLinkedin, href: personalData.linkedIn, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaTwitter, href: personalData.twitter, label: "Twitter/X", color: "hover:text-sky-400" },
    { icon: FaInstagram, href: personalData.instagram, label: "Instagram", color: "hover:text-pink-400" },
    { icon: FaYoutube, href: personalData.youtube, label: "YouTube", color: "hover:text-red-400" },
    { icon: FaWhatsapp, href: whatsappUrl, label: "WhatsApp", color: "hover:text-green-400" },
  ];

  return (
    <footer className="relative border-t bg-[#0d1224] border-[#25213b] text-white">
      <div className="container-page py-12 lg:py-16">
        {/* Top divider */}
        <div className="flex justify-center mb-12">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Ibnu WM - Home">
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent text-2xl lg:text-3xl font-bold">
                IBNU WM
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Software Developer & AI Automation Specialist. Membangun solusi digital untuk UMKM & startup Indonesia sejak 2018.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track="wa_click"
                data-track-label="footer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <FaWhatsapp className="text-green-400 w-5 h-5 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-sm">Chat WhatsApp</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors group"
              >
                <FaEnvelope className="text-violet-400 w-5 h-5 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-sm">{personalData.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-orange-400 w-5 h-5" size={20} />
                <span className="text-sm">{personalData.address}</span>
              </div>
            </div>
          </div>

          {/* Layanan */}
          <nav aria-label="Layanan">
            <h3 className="font-semibold text-white mb-4">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Perusahaan */}
          <nav aria-label="Perusahaan">
            <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dukungan */}
          <nav aria-label="Dukungan">
            <h3 className="font-semibold text-white mb-4">Dukungan</h3>
            <ul className="space-y-3">
              {footerLinks.dukungan.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Terhubung</h3>
            <p className="text-gray-400 text-sm mb-6">
              Ikuti update terbaru project, tutorial, dan insight teknis kami.
            </p>

            {/* Newsletter */}
            <NewsletterForm />
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-[#1a1443] flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:scale-110 hover:bg-[#25213b}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="wa_click"
              data-track-label="footer-cta"
              className="inline-flex items-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30"
            >
              <FaWhatsapp size={20} />
              <span>Mulai Konsultasi Gratis</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#25213b]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center lg:text-left">
              © {currentYear} Ibnu WM. Hak cipta dilindungi undang-undang.
              <br />
              Dibangun dengan Next.js, Tailwind CSS, & ❤️ untuk ekosistem developer Indonesia.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/ibnuwm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-500 hover:text-violet-400 transition-colors text-sm"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/#contact"
                className="text-gray-500 hover:text-violet-400 transition-colors text-sm"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
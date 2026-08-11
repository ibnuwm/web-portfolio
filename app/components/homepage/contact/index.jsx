// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from './contact-form';

function ContactSection() {
  const whatsappUrl = `https://wa.me/${personalData.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(personalData.whatsappMessage || 'Halo, saya tertarik dengan layanan development Anda. Bisa diskusikan project saya?')}`;

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            {/* WhatsApp - Prominent */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
            >
              <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/40 group-hover:scale-110 transition-all duration-300">
                <FaWhatsapp className="text-green-400" size={36} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Chat Langsung</p>
                <p className="text-lg font-medium text-white">{personalData.phone}</p>
              </div>
            </a>

            <p className="text-sm md:text-base flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>

            <p className="text-sm md:text-base flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>

            {/* Office Address */}
            <div className="group flex items-start gap-4 p-4 bg-gradient-to-r from-violet-500/10 to-pink-500/10 border border-violet-500/20 rounded-xl hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
              <div className="bg-violet-500/20 p-3 rounded-full group-hover:bg-violet-500/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <CiLocationOn className="text-violet-400" size={36} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Kantor Fisik</p>
                <p className="text-base font-medium text-white">{personalData.officeAddress}</p>
                <p className="text-xs text-gray-400 mt-1">{personalData.officeHours}</p>
                <a
                  href={personalData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm font-medium mt-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-16 flex flex-wrap items-center gap-4 lg:gap-6">
            <Link target="_blank" href={personalData.github} aria-label="GitHub">
              <IoLogoGithub
                className="bg-[#1a1443] p-3 rounded-full hover:bg-violet-500/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn">
              <BiLogoLinkedin
                className="bg-[#1a1443] p-3 rounded-full hover:bg-blue-500/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter} aria-label="Twitter/X">
              <FaXTwitter
                className="bg-[#1a1443] p-3 rounded-full hover:bg-sky-500/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.instagram} aria-label="Instagram">
              <FaInstagram
                className="bg-[#1a1443] p-3 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.youtube} aria-label="YouTube">
              <FaYoutube
                className="bg-[#1a1443] p-3 rounded-full hover:bg-red-500/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow} aria-label="Stack Overflow">
              <FaStackOverflow
                className="bg-[#1a1443] p-3 rounded-full hover:bg-orange-500/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook} aria-label="Facebook">
              <FaFacebook
                className="bg-[#1a1443] p-3 rounded-full hover:bg-blue-600/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </Link>

            {/* WhatsApp Social Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp
                className="bg-[#1a1443] p-3 rounded-full hover:bg-green-500/30 hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer group"
                size={44}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
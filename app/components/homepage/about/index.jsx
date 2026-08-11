// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { skillsData } from "@/utils/data/skills";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

function AboutSection() {
  const coreSkills = skillsData.slice(0, 12);
  const services = [
    { icon: "🤖", title: "AI Chatbot & Automation", desc: "Chatbot AI lokal (Llama.cpp/Qwen), n8n workflow, WhatsApp Business API integration" },
    { icon: "🌐", title: "Web Development", desc: "Next.js, React, Laravel, SaaS MVP, E-commerce, CMS custom" },
    { icon: "📱", title: "Mobile & PWA", desc: "React Native, Flutter, Progressive Web App, offline-first" },
    { icon: "☁️", title: "Cloud & DevOps", desc: "Docker, Kubernetes, VPS setup, CI/CD, monitoring, backup" },
    { icon: "💰", title: "FinTech & Crypto Tools", desc: "DCA simulator, trading bot, portfolio tracker, exchange integration" },
    { icon: "🎬", title: "Content Automation", desc: "TikTok Shop affiliate, video generation, poster generator, scheduler" },
  ];

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Siapa Saya?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg mb-8">
            {personalData.description}
          </p>

          {/* Services */}
          <div className="mb-8">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Layanan Utama
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-xl p-5 hover:border-violet-500/50 transition-all duration-300"
                >
                  <span className="text-3xl mb-3 block">{service.icon}</span>
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-violet-500/20 text-violet-300 text-sm rounded-full border border-violet-500/30 hover:bg-violet-500/40 hover:border-violet-500/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
              <span className="px-3 py-1 bg-gray-700 text-gray-400 text-sm rounded-full border border-gray-600">
                +{skillsData.length - coreSkills.length} lebih
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard value="50+" label="Project Selesai" icon="🚀" />
            <StatCard value="30+" label="Klien Puas" icon="🤝" />
            <StatCard value="5+" label="Tahun Pengalaman" icon="💼" />
            <StatCard value="100%" label="Komitmen Deadline" icon="⏰" />
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2 relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse-slow" />
            <Image
              src={personalData.profile}
              alt={personalData.name}
              className="relative rounded-2xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer border-4 border-violet-500/30 object-cover"
              fill
              sizes="(max-width: 640px) 280px, 320px"
              priority
            />
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl shadow-lg shadow-green-500/30 animate-bounce-subtle">
              <p className="font-bold text-lg">Tersedia Project</p>
              <p className="text-xs opacity-90">Mulai minggu ini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-xl p-4 text-center hover:border-violet-500/50 transition-all duration-300">
      <span className="text-2xl mb-2 block">{icon}</span>
      <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

export default AboutSection;
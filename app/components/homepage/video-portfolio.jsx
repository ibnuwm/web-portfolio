// @flow strict
"use client";

import { useState } from "react";
import { FaPlayCircle, FaYoutube, FaFilm } from "react-icons/fa";
import Image from "next/image";

const videoData = [
  {
    id: 1,
    title: "AI Chatbot UMKM - Demo Lengkap",
    description: "Demo chatbot AI lokal untuk toko online fashion. Menjawab pertanyaan produk, cek stok, proses order via WhatsApp 24/7.",
    thumbnail: "/videos/chatbot-demo.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    category: "AI Automation",
    duration: "8:42",
    views: "1.2K",
    date: "2026-07-15"
  },
  {
    id: 2,
    title: "TikTok Shop Affiliate Automation Workflow",
    description: "Walkthrough sistem otomasi: riset trending → script AI → TTS → edit video → scheduler upload. Hasil: 50 video/hari.",
    thumbnail: "/videos/tiktok-workflow.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    category: "Content Automation",
    duration: "12:15",
    views: "3.4K",
    date: "2026-07-20"
  },
  {
    id: 3,
    title: "Crypto Poster Generator - Setup & Demo",
    description: "Cara setup poster generator otomatis untuk Instagram/Telegram. Alert harga, digest pasar, edukasi - jalan cron harian.",
    thumbnail: "/videos/crypto-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    category: "Crypto Tools",
    duration: "6:30",
    views: "890",
    date: "2026-07-25"
  },
  {
    id: 4,
    title: "DCA Simulator - Backtest & Proyeksi",
    description: "Demo simulator Dollar Cost Averaging untuk Bitcoin & saham IDX. Backtest 5 tahun, proyeksi return, export PDF.",
    thumbnail: "/videos/dca-sim.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
    category: "FinTech",
    duration: "10:22",
    views: "2.1K",
    date: "2026-08-01"
  },
  {
    id: 5,
    title: "Laravel SaaS Boilerplate - Deploy ke VPS",
    description: "Tutorial deploy Laravel + Livewire SaaS ke VPS Indonesia (DigitalOcean/Vultr). Docker, Nginx, SSL, CI/CD.",
    thumbnail: "/videos/laravel-deploy.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    category: "Web Development",
    duration: "25:40",
    views: "5.6K",
    date: "2026-08-05"
  },
  {
    id: 6,
    title: "n8n Workflow: WhatsApp Broadcast Otomatis",
    description: "Import workflow n8n broadcast WA ke 2000+ kontak dari Google Sheets. Schedule, template, tracking delivery.",
    thumbnail: "/videos/n8n-wa.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
    category: "Automation",
    duration: "15:10",
    views: "1.8K",
    date: "2026-08-08"
  }
];

function VideoPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const categories = ["all", ...new Set(videoData.map(v => v.category))];

  const filteredVideos = filterCategory === "all"
    ? videoData
    : videoData.filter(v => v.category === filterCategory);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div id="video-portfolio" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex items-center gap-2">
            <FaFilm size={20} />
            Video Portfolio
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto text-base lg:text-lg px-4">
          Kumpulan video demo project, tutorial, dan case study kami. 
          Subscribe <a href={personalData.youtube} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">channel YouTube</a> untuk update terbaru.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-[#1a1443] border border-[#25213b] text-gray-300 hover:border-violet-500/50 hover:text-white'
              }`}
            >
              {cat === "all" ? "Semua" : cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={openVideo} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={personalData.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/30"
          >
            <FaYoutube size={20} />
            <span>Lihat Semua di YouTube</span>
          </a>
        </div>

        {/* Video Modal */}
        {showModal && selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
            onClick={closeModal}
          >
            <div className="relative w-full max-w-5xl mx-4 animate-slide-up" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Tutup video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                <p className="text-gray-400 mt-1">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 0.2s ease-out; }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.3s ease-out; }
        `}</style>
      </div>
    </div>
  );
}

function VideoCard({ video, onClick }) {
  return (
    <article
      className="group bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500 cursor-pointer"
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors scale-95 group-hover:scale-100 transition-transform duration-300">
            <FaPlayCircle size={32} />
          </button>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        <div className="absolute top-3 left-3 bg-violet-500/90 text-white text-xs px-2 py-1 rounded-full">
          {video.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-white text-base lg:text-lg mb-2 line-clamp-2 group-hover:text-violet-400 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{video.description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaPlayCircle size={12} />
            {video.views} views
          </span>
          <span>{new Date(video.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
      </div>
    </article>
  );
}

// Import personalData for youtube link
import { personalData } from "@/utils/data/personal-data";

export default VideoPortfolio;
// @flow strict
"use client";

import { testimonialsData } from "@/utils/data/testimonials";
import { FaStar, FaPlayCircle, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModal, setVideoModal] = useState(null);

  const itemsPerView = typeof window !== 'undefined' ? (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1) : 3;
  const maxIndex = Math.max(0, testimonialsData.length - itemsPerView);

  const next = () => setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  const prev = () => setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);

  const openVideo = (url) => setVideoModal(url);
  const closeVideo = () => setVideoModal(null);

  return (
    <div id="testimonials" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Testimoni Klien
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-base lg:text-lg">
          Lebih dari 50+ klien UMKM & startup Indonesia percaya pada solusi kami. 
          Lihat apa yang mereka katakan tentang pengalaman bekerja sama dengan kami.
        </p>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full px-4 flex ${itemsPerView === 3 ? 'basis-1/3' : itemsPerView === 2 ? 'basis-1/2' : 'basis-full'}`}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    onVideoClick={openVideo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#1a1443] border border-[#25213b] text-white flex items-center justify-center hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
              aria-label="Testimoni sebelumnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(1, testimonialsData.length - itemsPerView + 1) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-violet-500 w-6'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial group ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#1a1443] border border-[#25213b] text-white flex items-center justify-center hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
              aria-label="Testimoni selanjutnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {videoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
            onClick={closeVideo}
          >
            <div className="relative w-full max-w-4xl mx-4 animate-slide-up" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Tutup video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={videoModal}
                  title="Video testimoni klien"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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

function TestimonialCard({ testimonial, onVideoClick }) {
  return (
    <div className="h-full bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-2xl p-6 lg:p-8 hover:border-violet-500/50 transition-all duration-500 flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className="text-amber-400" size={18} />
        ))}
      </div>

      <FaQuoteLeft className="text-violet-500/50 text-4xl mb-4" />

      <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 flex-1">
        {testimonial.content}
      </p>

      {testimonial.videoUrl && (
        <button
          onClick={() => onVideoClick(testimonial.videoUrl)}
          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium mb-4 transition-colors"
        >
          <FaPlayCircle size={20} />
          <span>Tonton Video Testimoni</span>
        </button>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-[#25213b]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            fill
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-[#16f2b3] text-sm">{testimonial.role}</p>
          <p className="text-gray-500 text-xs">{testimonial.company}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-[#25213b]">
        <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full border border-violet-500/30">
          {testimonial.projectType}
        </span>
      </div>
    </div>
  );
}

export default TestimonialsSection;
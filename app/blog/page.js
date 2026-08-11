// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";
import { FaArrowLeft, FaTag, FaCalendar, FaClock, FaEye } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Blog & Insight",
  description:
    "Artikel teknis, case study, dan tutorial tentang AI Automation, Web Development, Crypto Tools, dan solusi digital untuk bisnis Indonesia.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog & Insight | Ibnu WM Portfolio",
    description:
      "Artikel teknis, case study, dan tutorial AI Automation, Web Development, dan solusi digital untuk bisnis Indonesia.",
  },
};

async function getBlogs() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.warn(`dev.to API returned ${res.status}, using empty blog list`);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.warn('Failed to fetch blogs from dev.to, using empty list:', error.message);
    return [];
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const formatReadTime = (minutes) => {
  return `${minutes} min baca`;
};

async function page() {
  const blogs = await getBlogs();
  const filteredBlogs = blogs.filter(blog => blog?.cover_image);

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors mb-8"
        >
          <FaArrowLeft size={20} />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md flex items-center gap-2">
              <FaTag size={24} />
              Semua Artikel
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Koleksi artikel teknis, case study, dan tutorial tentang AI Automation, 
            Web Development, Crypto Tools, dan solusi digital untuk bisnis Indonesia.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">{filteredBlogs.length}</p>
            <p className="text-gray-400 text-sm">Total Artikel</p>
          </div>
          <div className="bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">
              {filteredBlogs.reduce((acc, b) => acc + (b.reading_time_minutes || 0), 0)}
            </p>
            <p className="text-gray-400 text-sm">Total Menit Baca</p>
          </div>
          <div className="bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">
              {filteredBlogs.reduce((acc, b) => acc + (b.public_reactions_count || 0), 0).toLocaleString('id-ID')}
            </p>
            <p className="text-gray-400 text-sm">Total Reaksi</p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {
            filteredBlogs.map((blog, i) => (
              <BlogCard
                blog={blog}
                key={i}
                priority={i < 3}
                formatDate={formatDate}
                formatReadTime={formatReadTime}
              />
            ))
          }
        </div>

        {/* Empty state */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <FaTag className="text-gray-600 text-6xl mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Belum Ada Artikel</h3>
            <p className="text-gray-400">Artikel akan muncul di sini setelah dipublikasikan di dev.to</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
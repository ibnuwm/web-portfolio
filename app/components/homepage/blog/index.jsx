// @flow strict
import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaClock, FaTag, FaEye } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  // Indonesian month names
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

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex items-center gap-2">
            <FaTag size={20} />
            Blog & Insight
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto text-base lg:text-lg px-4">
        Artikel teknis, case study, dan tutorial tentang AI Automation, Web Development, 
        Crypto Tools, dan solusi digital untuk bisnis Indonesia. Ditulis dalam Bahasa Indonesia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
        {
          blogs.slice(0, 6).map((blog, i) =>
            blog?.cover_image && <BlogCard blog={blog} key={i} formatDate={formatDate} formatReadTime={formatReadTime} />
          )
        }
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>Baca Selengkapnya</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
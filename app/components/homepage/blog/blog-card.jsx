// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt, FaEye, FaClock, FaCalendar, FaArrowRight } from 'react-icons/fa';

function BlogCard({ blog, priority = false, formatDate, formatReadTime }) {
  const pubDate = formatDate ? formatDate(blog.published_at) : timeConverter(blog.published_at);
  const readTime = formatReadTime ? formatReadTime(blog.reading_time_minutes) : `${blog.reading_time_minutes} min baca`;

  return (
    <article className="group bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500">
      <Link target='_blank' href={blog.url} className="block" aria-label={blog.title}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={blog?.cover_image}
            alt={blog.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category tag */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
              {blog.tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} className="px-2 py-1 bg-violet-500/90 text-white text-xs rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Read time */}
          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <FaClock size={10} />
            {readTime}
          </div>
        </div>
      </Link>

      <div className="p-5 lg:p-6 flex flex-col">
        <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
          <time dateTime={blog.published_at} className="flex items-center gap-1">
            <FaCalendar size={14} />
            {pubDate}
          </time>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
              <BsHeartFill size={14} />
              <span>{blog.public_reactions_count || 0}</span>
            </span>
            {blog.comments_count > 0 && (
              <span className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                <FaCommentAlt size={14} />
                <span>{blog.comments_count}</span>
              </span>
            )}
            <span className="flex items-center gap-1 text-gray-400">
              <FaEye size={14} />
              <span>{blog.page_views_count ? blog.page_views_count.toLocaleString('id-ID') : '0'}</span>
            </span>
          </div>
        </div>

        <Link target='_blank' href={blog.url} className="block">
          <h3 className="text-white text-base lg:text-xl font-semibold mb-3 line-clamp-2 group-hover:text-violet-400 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm lg:text-base line-clamp-3 mb-4 flex-1">
          {blog.description}
        </p>

        <Link
          target='_blank'
          href={blog.url}
          className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors self-start"
        >
          Baca Selengkapnya
          <FaArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
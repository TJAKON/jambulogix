"use client";
import React from "react";
import { useParams } from "next/navigation";
import { blogPosts } from "../data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Blog post not found.
      </div>
    );
  }

  // Suggested posts (excluding current one)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-20 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 text-gray-200 mt-4 text-sm md:text-base"
          >
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {post.read}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Article Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto py-16 px-6 md:px-0"
      >
        {/* Blog Content */}
         <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 mb-8"></div>

        {/* Back to Blogs */}
        <div className="flex justify-start">
          <Link
            href="/pages/resources/blogs"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline hover:text-blue-700 transition"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
        </div>
      </motion.div>

      {/* Related Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white border-t py-16"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((p, index) => (
              <Link
                key={index}
                href={`/pages/resources/blogs/${p.slug}`}
                className="group bg-gray-50 hover:bg-gray-100 rounded-xl overflow-hidden shadow-sm transition"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 mt-2 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-4 text-sm text-gray-400">
                    {p.date} • {p.read}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

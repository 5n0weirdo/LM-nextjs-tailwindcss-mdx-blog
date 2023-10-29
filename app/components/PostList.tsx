"use client";
import React from "react";
import { allPosts, Post } from "@/.contentlayer/generated";
import { motion } from "framer-motion";
import Image from "@/app/components/mdx/Image";
import Link from "next/link";
import { BlogCardAnimation } from "@/app/components/animations/FramerMotionVariants";

const PostList = (post: Post) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Posts
          </h1>
        </div>

        <ul className="">
          <Link
            href={post.url}
            key={post.url}
            className="mt-5 flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12"
          >
            <motion.article
              variants={BlogCardAnimation}
              viewport={{ once: true }}
              className="bg-white dark:bg-background-secondary rounded-2xl p-2 flex flex-col sm:flex-row items-center w-ull sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg"
            >
              <div className="w-full">
                <Image
                  alt={post.title}
                  src={post.banner}
                  width={1200}
                  height={630}
                  blurDataURL={post.banner}
                  quality={25}
                  className="my-auto transition-all duration-300 backdrop-blur-xl rounded-xl"
                />
              </div>

              <div className="flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 2xl:py-5 md:pr-5">
                <Link
                  href={post.url}
                  className="font-bold text-neutral-900 md:text-xl dark:text-neutral-200 hover:underline line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="mt-3 text-sm sm:text-xs md:text-sm  text-gray-600 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                  {post.description}
                </p>

                {/* <AuthorComponent/> */}
              </div>
            </motion.article>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default PostList;

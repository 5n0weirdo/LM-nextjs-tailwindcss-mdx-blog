import React from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "@/app/components/mdx/Image";

const Header = (post: Post) => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-bold leading-5 text-2xl text-slate-900 dark:text-white">
          {post.title}
        </h1>
        <p className="font-semibold leading-5 text-sm text-slate-900 dark:text-white">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </p>
      </div>
      <Image
        src={post.banner}
        alt={post.title}
        width={800}
        height={230}
        blurDataURL={post.banner}
        quality={25}
        className="transition-all duration-300 backdrop-blur-xl rounded-xl"
      />
    </div>
  );
};

export default Header;

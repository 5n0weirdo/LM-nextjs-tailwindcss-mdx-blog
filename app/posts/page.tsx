import React from "react";
import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostList from "../components/PostList";
import type { Metadata } from "next";
import ThemeSwitch from "../components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Posts",
  description: "All posts from the Next.js Blog.",
};

const page = (post: Post) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="">
        <ThemeSwitch />
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Posts
          </h1>
        </div>
        {posts.map((post, idx) => (
          <div className="">
            <PostList key="idx" {...post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;

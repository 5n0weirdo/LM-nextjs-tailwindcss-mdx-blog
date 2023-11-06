import React from "react";
import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostList from "../components/PostList";
import ThemeSwitch from "../components/ThemeSwitcher";
import { genPageMetadata } from "../components/SEO";
import PageTitle from "../components/PageTitle";

export const metadata = genPageMetadata({ title: "Posts" });

const page = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="">
        <PageTitle>Posts</PageTitle>
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

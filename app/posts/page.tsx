import React from "react";
import { allPosts, Post } from "@/.contentlayer/generated";
import PostCard from "../components/PostCard";
import { compareDesc } from "date-fns";

const page = (post: Post) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="grid md:grid-cols-2">
        {posts.map((post, idx) => (
          <div className="">
            <PostCard key="idx" {...post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;

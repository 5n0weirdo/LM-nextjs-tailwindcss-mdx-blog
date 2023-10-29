import React from "react";
import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostList from "../components/PostList";

const page = (post: Post) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="">
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

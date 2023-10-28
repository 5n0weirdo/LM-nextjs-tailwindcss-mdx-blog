import React from "react";
import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "next/link";

const PostCard = (post: Post) => {
  return (
    <div className="group relative flex flex-col rounded-lg border border-rose-400 m-5 p-5">
      <div className="text-2xl hover:underline">
        <Link href={post.url}>{post.title}</Link>
      </div>
      <p className="text-base">{post.description}</p>
    </div>
  );
};

export default PostCard;

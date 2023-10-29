import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { components } from "@/app/components/mdx/MDXComponents";
import { MDXLayoutRenderer } from "@/app/components/mdx/MDXLayoutRenderer";

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // const components = {
  // pre: Pre,
  // CodeSnippet: CodeSnippet,
  // CopyButton: CopyButton,
  // };
  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{format(parseISO(post.date), "LLLL d, yyyy")}</p>
      <article>
        {/* <MDXContent components={{ ...components }} /> */}
        <MDXLayoutRenderer code={post.body.code} components={components} />{" "}
      </article>
    </div>
  );
};

export default PostLayout;

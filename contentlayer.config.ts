import {
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkCodeTitles } from "pliny/mdx-plugins/index.js";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The desription of the post",
      required: true,
    },
    banner: {
      type: "string",
      description: "The banner of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
   
  },
}));

const rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "github-dark",
  // Set to true to keep the background color
  keepBackground: true,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any, id: any) {
    node.properties.className = ["word"];
  },
};

export default makeSource({
  contentDirPath: "content/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
});

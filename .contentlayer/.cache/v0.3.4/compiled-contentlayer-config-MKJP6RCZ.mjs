// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkCodeTitles } from "pliny/mdx-plugins/index.js";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The desription of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    }
  }
}));
var rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "dracula",
  // Set to true to keep the background color
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ["word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "content/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MKJP6RCZ.mjs.map

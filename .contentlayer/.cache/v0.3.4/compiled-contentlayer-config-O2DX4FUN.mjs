// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkCodeTitles } from "pliny/mdx-plugins/index.js";
import getLanguageIconByExtension from "@/utils/get-language-icon-by-extension";
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
    },
    banner: {
      type: "string",
      description: "The banner of the post",
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
var rehypeAddLanguageIconToCodeBlocks = () => {
  return () => {
    visit("element", (node) => {
      if (node.properties?.["data-rehype-pretty-code-title"] === void 0)
        return;
      node.children.unshift(
        getLanguageIconByExtension(node.properties["data-language"])
      );
    });
  };
};
var rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "github-dark",
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
    rehypePlugins: [
      [rehypePrettyCode, rehypeoptions],
      rehypeAddLanguageIconToCodeBlocks
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-O2DX4FUN.mjs.map

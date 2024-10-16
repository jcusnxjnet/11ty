---
title: Markdown-it
templateEngineOverride: md
eleventyNavigation:
    key: Markdown-it
    parent: Eleventy
    order: 2
---
#### Installation
```hmtl
npm install markdown-it
```
#### Configuration
```js
import markdownIt from "markdown-it";

export default function(eleventyConfig) {
  // Configure markdown-it
  const md = markdownIt({
    html: true, // Enable HTML tags in Markdown
    linkify: true, // Convert URLs to links automatically
    typographer: true, // Enable smart quotes and other typography enhancements
  });

  // Set markdown-it as the markdown parser for Eleventy
  eleventyConfig.setLibrary("md", md);
}
```

#### Sources
- [Markdown-it documentation](https://github.com/markdown-it/markdown-it)
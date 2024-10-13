import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {

	  // method creates a file/folder copy in the output directory
	  eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

    //plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin); //Eleventy Navigation
    eleventyConfig.addPlugin(syntaxHighlight); //Syntax Highlight
};

export const config = {
    
    // default directories
    dir: {
      input: "views",
      layouts: "_layouts",
      output: "dist"
    },

    // default template engine
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };

  
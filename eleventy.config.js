export default function (eleventyConfig) {

	// method creates a file/folder copy in the output directory
	eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");
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

  
module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('./src/css/');
  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

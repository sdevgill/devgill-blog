const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('./src/css/');
  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  eleventyConfig.addPassthroughCopy("./src/js/");

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  eleventyConfig.addFilter('shortDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL'
    );
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

const { DateTime } = require('luxon');
const readingTime = require('reading-time');

module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('./src/css/');
  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  eleventyConfig.addPassthroughCopy("./src/js/");
  // Date formatting (human readable)
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
  // Reading time
  eleventyConfig.addFilter('readingTime', (text) => {
    return readingTime(text).text;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

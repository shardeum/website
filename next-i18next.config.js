/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    // locales: ["en", "hi", "id", "it", "ja", "kn", "ko", "ru", "ta", "te"],
    locales: ["en"],
    localePath: path.resolve("./public/locales"),
  },
};

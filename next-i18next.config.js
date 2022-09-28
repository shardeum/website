const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi", "id", "it", "ja", "kn", "ko", "ru", "ta", "te"],
    localePath: path.resolve('./public/locales')
  },
};

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es'],
    localePath: path.resolve('./public/locales'),
  },
  fallbackLng: 'en',
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: true,
  },
  returnEmptyString: false,
};
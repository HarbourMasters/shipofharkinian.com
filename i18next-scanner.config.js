module.exports = {
  options: {
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx']
    },
    lngs: ['en', 'de', 'fr', 'es'],
    ns: ['common'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue: '',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  }
}
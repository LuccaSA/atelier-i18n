const fs = require('fs');
const path = require('path');

const assets = path.join(__dirname, 'src', 'assets', 'i18n');
const app = path.join(__dirname, 'src', 'app');
const locales = ['de', 'en', 'es', 'fr', 'it', 'nl', 'pt'];

function generateTranslations(module, locale, length) {
  const result = {};

  for (let index = 0; index < length; index++) {
    result[`${module.toUpperCase()}_${index}`] = `${module} ${locale.toUpperCase()} ${index}`;
  }

  return result;
}

function generateJSONFile(filename, keys) {
  const file = path.join(assets, filename);
  fs.writeFileSync(file, JSON.stringify(keys, undefined, '  '));
}

function generateTSFile(file, keys) {
  fs.writeFileSync(file, `export const Translations = ${JSON.stringify(keys, undefined, '  ')}`);
}

const keys = {
  common: {
    de: generateTranslations('common', 'de', 100),
    en: generateTranslations('common', 'en', 100),
    es: generateTranslations('common', 'es', 100),
    fr: generateTranslations('common', 'fr', 100),
    it: generateTranslations('common', 'it', 100),
    nl: generateTranslations('common', 'nl', 100),
    pt: generateTranslations('common', 'pt', 100),
  },
  foo: {
    de: generateTranslations('foo', 'de', 1000),
    en: generateTranslations('foo', 'en', 1000),
    es: generateTranslations('foo', 'es', 1000),
    fr: generateTranslations('foo', 'fr', 1000),
    it: generateTranslations('foo', 'it', 1000),
    nl: generateTranslations('foo', 'nl', 1000),
    pt: generateTranslations('foo', 'pt', 1000),
  },
  bar: {
    de: generateTranslations('bar', 'de', 10000),
    en: generateTranslations('bar', 'en', 10000),
    es: generateTranslations('bar', 'es', 10000),
    fr: generateTranslations('bar', 'fr', 10000),
    it: generateTranslations('bar', 'it', 10000),
    nl: generateTranslations('bar', 'nl', 10000),
    pt: generateTranslations('bar', 'pt', 10000),
  }
}

const mergedKeys = locales.reduce((acc, locale) => ({
  ...acc,
  [locale]: {
    ...keys.common[locale],
    ...keys.foo[locale],
    ...keys.bar[locale],
  }
}), {});

// 1 file = 1 locale and 1 module
for (const locale of locales) {
  generateJSONFile(`common/${locale}.json`, keys.common[locale]);
  generateJSONFile(`foo/${locale}.json`, keys.foo[locale]);
  generateJSONFile(`bar/${locale}.json`, keys.bar[locale]);
  generateTSFile(path.join(app, 'i18n', 'common', `translations.${locale}.ts`), keys.common[locale]);
  generateTSFile(path.join(app, 'pages', 'foo', 'i18n', `translations.${locale}.ts`), keys.foo[locale]);
  generateTSFile(path.join(app, 'pages', 'bar', 'i18n', `translations.${locale}.ts`), keys.bar[locale]);
}

// 1 file = 1 module
generateJSONFile(`i18n.common.json`, keys.common);
generateJSONFile(`i18n.foo.json`, keys.foo);
generateJSONFile(`i18n.bar.json`, keys.bar);
generateTSFile(path.join(app, 'i18n', 'common', 'translations.ts'), keys.common);
generateTSFile(path.join(app, 'pages', 'foo', 'i18n', 'translations.ts'), keys.foo);
generateTSFile(path.join(app, 'pages', 'bar', 'i18n', 'translations.ts'), keys.bar);

// 1 file to rule them all
generateJSONFile(`i18n.json`, mergedKeys);
generateTSFile(path.join(app, 'i18n', 'translations.ts'), mergedKeys);

// 1 file = 1 locale
for (const locale of locales) {
  generateJSONFile(`i18n.${locale}.json`, mergedKeys[locale]);
  generateTSFile(path.join(app, 'i18n', `translations.${locale}.ts`), mergedKeys[locale]);
}
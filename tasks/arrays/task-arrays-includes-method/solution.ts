const supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'ja'];

function isLangSupported(langCode) {
  return supportedLanguages.includes(langCode);
}

console.log(isLangSupported('ru'));
console.log(isLangSupported('foobar'));
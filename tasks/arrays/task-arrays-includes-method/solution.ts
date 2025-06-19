const supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'ja'];

// Решение для обычного массива
function isLangSupported(langCode) {
  return supportedLanguages.includes(langCode);
}

// Решение для объектов
function isLangSupported(langCode) {
  return supportedLanguages.some(lang => lang.code === langCode);
}

console.log(isLangSupported('ru'));
console.log(isLangSupported('foobar'));
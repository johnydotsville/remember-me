const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/postz',  // 404
  'https://jsonplaceholder.typikode.com/'        // Исключение от fetch
];

async function processUrls(url) {
  // Ваше решение
}

urls.forEach(url => processUrls(url));
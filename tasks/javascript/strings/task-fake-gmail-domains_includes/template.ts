const emails = [
  "alexander@yandex.ru",
  "maria@gmail.tu",  // <- fake gmail
  "maxim@mail.ru",
  "anna@outlook.com",
  "dmitry@gmail.nl",  // <- fake gmail
  "ekaterina@yahoo.com",
  "ivan@protonmail.com",
  "olga@gmail.com",  // <- true gmail
  "dev.sergey@icloud.com",
  "natalia@rambler.ru"
];

function isFakeGmail(email) {
  // Ваше решние
}

function isAllowedEmail(email) {
  // Ваше решние
}

const fakes = // Ваше решние
console.log('Фейковые gmail:');
fakes.forEach(fake => console.log(fake));

const allowed = // Ваше решние
console.log('Разрешена регистрация:');
allowed.forEach(x => console.log(x));
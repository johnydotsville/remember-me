const emails = [
  "alexander@yandex.ru",
  "maria@gmail.tu",  // <- fake gmail
  "maxim@mail.ru",
  "anna@outlook.com",
  "dmitry@gmail.nl",  // <- fake gmail
  "ekaterina@yahoo.com",
  "ivan@protonmail.com",
  "olga@gmail.com",  // <- true gmail, можно
  "dev.sergey@icloud.com",  // <-- можно
  "dev.sonya@gmail.kl",  // <-- нельзя
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
fakes.forEach(fake => console.log(fake));  // Мария, Дмитрий, Соня

const allowed = // Ваше решние
console.log('Разрешена регистрация:');  // Ольга, Сергей
allowed.forEach(x => console.log(x));
TODO: оформить в виде задачи нормально.

Задача: напишите функцию, которая принимает массив донатеров и  возвращает благодарственное сообщение "Дорогие {имена пользователей}! В  общей сложности вы задонатили {сумма}. Это очень помогает мне развивать  канал. Спасибо вам большое!". Имена пользователей должны быть разделены  запятой, а последние два имени - буквой "и". Сумма должна быть суммой  пожертвований от всех пользователей.

```javascript
const donors = [
  { username: 'kuzzya', donated: 100 },
  { username: 'alex.ivanov', donated: 50 },
  { username: 'elena.k', donated: 200 },
  { username: 'pavel_n', donated: 75 }
];
```

```javascript
function generateThankYouMessage(donors) {
  // 1. Собираем имена донатеров
  const names = donors.map(donor => donor.username);
  
  // 2. Форматируем список имен
  let namesList;
  if (names.length === 1) {
    namesList = names[0];
  } else {
    const firstPart = names.slice(0, -2).join(', ');
    const lastTwo = names.slice(-2).join(' и ');
    namesList = [firstPart, lastTwo].filter(Boolean).join(', ');
  }
  
  // 3. Считаем общую сумму донатов
  const totalAmount = donors.reduce((sum, donor) => sum + donor.donated, 0);
  
  // 4. Формируем сообщение
  return `Дорогие ${namesList}! В общей сложности вы задонатили ${totalAmount}. Это очень помогает мне развивать канал. Спасибо вам большое!`;
}

// Проверка
console.log(generateThankYouMessage(donors));
```


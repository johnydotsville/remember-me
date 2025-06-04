Есть массив учетных записей пользователей:

```javascript
const userAccounts = [
  { id: 1, username: 'ivan.petrov', isActive: true, lastVisitDaysAgo: 5 },
  { id: 2, username: 'mariya.sidorova', isActive: false, lastVisitDaysAgo: 120 },
  { id: 3, username: 'alex.ivanov', isActive: true, lastVisitDaysAgo: 2 },
  { id: 4, username: 'elena.kuznetsova', isActive: true, lastVisitDaysAgo: 7 },
  { id: 5, username: 'dmitriy.smirnov', isActive: false, lastVisitDaysAgo: 90 },
  { id: 6, username: 'olga.vasnetsova', isActive: true, lastVisitDaysAgo: 1 },
  { id: 7, username: 'sergey.lebedev', isActive: false, lastVisitDaysAgo: 60 },
  { id: 8, username: 'anna.zhukova', isActive: true, lastVisitDaysAgo: 20 },  // <-- deactivate
  { id: 9, username: 'pavel.novikov', isActive: false, lastVisitDaysAgo: 150 },
  { id: 10, username: 'natalya.morozova', isActive: true, lastVisitDaysAgo: 3 },
];
```

Задача:

* Напишите функцию, которая возвращает массив идентификаторов пользователей, чьи учетные записи подлежат деактивации.
* Критерий деактивации - последнее посещение сайта больше N дней назад. По умолчанию - 14.
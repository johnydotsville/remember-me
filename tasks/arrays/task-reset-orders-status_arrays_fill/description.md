У вас есть массив со статусами заказов:

```javascript
const orderStatuses = [
  "delivered",   // 0
  "shipped",     // 1
  "processing",  // 2 (сбойный)
  "processing",  // 3 (сбойный)
  "processing",  // 4 (сбойный)
  "processing",  // 5 (сбойный)
  "processing",  // 6 (сбойный)
  "delivered",   // 7
  "shipped",     // 8
  "pending"      // 9
];
```

По ошибке заказы со 2 до 6 ячейки получили статус 'processing', хотя должны быть 'pending'.

### Задача

* Измените сбойные статусы заказов на 'pending'.
  * Изменения проводите прямо в исходном массиве.
* Поменяйте статус вообще всех заказов в массиве на 'delivered'.
У вас есть мапа с заказами клиентов. Ключ - это id заказа. Значение - объект с именем и почтой клиента:

```javascript
const orders = new Map([
  ["AA-XK5GT", { name: 'John Doe', email: 'john.doe@example.com' }],
  ["BB-YHF8N", { name: 'Jane Smith', email: 'jane.smith@example.com' }],
  ["AA-UQZ9W", { name: 'Michael Johnson', email: 'michael.johnson@example.com' }],
  ["AA-PKV2R", { name: 'Emma Williams', email: 'emma.williams@example.com' }],
  ["BB-JTM6P", { name: 'David Brown', email: 'david.brown@example.com' }],
  ["AA-LNH3D", { name: 'Sarah Davis', email: 'sarah.davis@example.com' }],
  ["AA-CWX7F", { name: 'William Miller', email: 'william.miller@example.com' }],
  ["BB-RTS4B", { name: 'Olivia Taylor', email: 'olivia.taylor@example.com' }],
  ["CC-VGH1E", { name: 'James Anderson', email: 'james.anderson@example.com' }],
  ["AA-NMZ9Q", { name: 'Ava Wilson', email: 'ava.wilson@example.com' }],
  ["BB-XD5JP", { name: 'John Doe', email: 'john.doe@example.com' }], // Повторный заказ от John Doe (склад BB)
  ["CC-UYT2W", { name: 'David Brown', email: 'david.brown@example.com' }]  // Повторный заказ от David Brown (склад CC)
]);
```

Задача:

* Напишите реализацию для функции, которая возвращает массив с id заказов, сделанных указанным клиентом.
* Напишите реализацию для функции, которая возвращает число заказов, сделанных указанным клиентом.
* Напишите реализацию функции, которая возвращает число заказов, находящихся на указанном складе.
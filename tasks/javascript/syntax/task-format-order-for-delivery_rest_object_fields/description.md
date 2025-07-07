У вас есть объект заказа:

```javascript
const order = {
  id: 500,
  customer: {
    name: "Emily Johnson",
    email: "emily.j@example.com",
    address: "350 5th Ave, New York, NY 10118, USA"
  },
  items: [
    "The Great Gatsby by F. Scott Fitzgerald",
    "SanDisk Ultra 128GB USB 3.0 Flash Drive"
  ],
  discount: 10,
  date: "2023-05-01"
};
```

Вам поручили написать функцию, которая трансформирует объект заказа в формат, более удобный для курьера. В нем должны быть поля с именем клиента и адресом, а вся остальная информация - в поле деталей.

### Задача

* Модифицируйте функцию так, чтобы возвращала объект в таком виде:

```javascript
{
  "name": "Emily Johnson",
  "address": "350 5th Ave, New York, NY 10118, USA",
  "details": {
    "id": 500,
    "items": [
      "The Great Gatsby by F. Scott Fitzgerald",
      "SanDisk Ultra 128GB USB 3.0 Flash Drive"
    ],
    "discount": 10,
    "date": "2023-05-01"
  }
} 
```
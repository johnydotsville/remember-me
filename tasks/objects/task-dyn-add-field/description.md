Дана функция:

```javascript
function createUser(login, firstname, lastname, role = 'user') {
  if (!login) throw new Error('login является обязательным.');
  return {
    login,
    role,
  }
}

const huck = createUser('hfinn', 'Huck', 'Finn');
console.log(huck);
```

Задача:

* Доработать функцию так, чтобы поля firstname и lastname добавлялись в объект динамически - только если они переданы и не являются пустыми строками.
* Поле lastname должно попасть в объект под названием surname.
### Брифинг

В системе есть пользователи, для которых используются такие данные:

* Имя пользователя (username) - обязательно. Строка.
* Почта (email) - обязательно. Строка.
* Роль (role) - обязательно. Строка.
  * Может принимать любое из этих значений: "user", "admin", "guest".
* Имя (firstname) - опционально. Строка.
* Фамилия (lastname) - опционально. Строка.
* Год рождения (year) - опционально. Число, например 1998, без месяца и дня.

### Задача

* Составьте тип UserProfile, исходя из перечисленных требований.
  * Роль оформите отдельным типом UserRole.
  * Имя, фамилию и год рождения тоже выделите в отдельный тип PersonalInfo.
* Создайте переменную, типизируйте ее и положите объект.
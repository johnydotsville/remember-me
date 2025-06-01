Есть два объекта конфигурации:

```javascript
const defaultConfig = {
  cacheTime: 30_000,
  staleTime: 0
}

const myConfig = {
  timeout: 1000,
  refetchOnFail: false
}
```

 Задачи:

* Объединить два конфига в новый.
* Заменить параметр `refetchOnFail` на true.

Доп. условия:

* Сначала сделать это за две операции, потом за одну.
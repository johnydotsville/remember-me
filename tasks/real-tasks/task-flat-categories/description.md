Есть объект типа 'Категория':

```typescript
type Category = {
  name: string,
  subcategories: Category[]
}
```

У категории есть имя и массив вложенных в нее категорий ("подкатегории").

Задача:

* Напишите функцию, которая возвращает плоский массив с именами всех категорий и вложенных в них подкатегорий.

Например для такой структуры:

```javascript
{
  name: 'javascript',
  subcategories: [
    {
      name: 'strings',
      subcategories: []
    },
    {
      name: 'objects',
      subcategories: [
        {
          name: 'arrays',
          subcategories: []
        }
      ]
    },
  ]
}
```

Должно получиться:

```javascript
['javascript', 'strings', 'objects', 'arrays']
```


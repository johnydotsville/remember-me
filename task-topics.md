# Javascript

- [ ] Операторы ||, && и ??, ||=, &&=, XOR
  - [x] ||
- [ ] Тернарный оператор
- [ ] Трюки
  - [ ] !! для преобразования в boolean
  - [ ] filter(Boolean)
  - [ ] Преобразование в число через + или ++
- [ ] for of
- [ ] rest и spread
  - [x] rest
    - [x] Параметры функции
    - [x] При деструктуризации массива
    - [x] При деструктуризации объекта
  - [ ] spread
    - [x] Объектов
    - [x] Массивов
    - [ ] Строк
- [x] switch
- [ ] Деструктуризация
  - [x] Объектов
    - [x] В переменные, которые совпадают с названиями полей.
    - [x] В переменные с названиями, которые отличаются от названий полей.
    - [x] Значения по умолчанию при деструктуризации полей.
    - [x] Вложенная деструктуризация.
    - [x] Деструктуризация в заранее объявленные переменные.
    - [x] Сбор оставшихся полей в отдельный объект.
    - [x] Деструктуризация динамического свойства.
  - [ ] Массивов.
- [x] Опциональная цепочка.
  - [x] Для свойств объекта.
  - [x] Для элементов массива.
- [x] Map
  - [x] Методы get, set, has, size, forEach.
- [x] Set
- [ ] Очередь
- [ ] Стек
- [x] entries, keys, values
  - [x] Для Map. Для остальных не особо надо.
- [ ] apply, call, bind
  - [ ] apply
  - [x] call
  - [ ] bind
- [ ] API промисов
- [ ] Объекты
  - [ ] ~~hasOwnProperty?~~ legacy
  - [x] Оператор in (проверка наличия свойства)
  - [ ] hasOwn?
  - [ ] Создание нового объекта?
    - [ ] На основе другого - чтобы он стал прототипом.
- [ ] Исключения.
  - [x] Создание собственного класса исключения, базовое.
  - [ ] Создание собственного класса исключения с дополнительными данными.
    - [ ] Тут разобраться как лучше делать - фабричные методы?
- [ ] Классы
  - [ ] Наследование
- [ ] Преобразования
  - [ ] parseInt
- [ ] Массивы
  - [ ] Методы
    - [x] findIndex, findLastIndex
    - [x] indexOf, lastIndexOf
    - [x] every, some
    - [x] from
    - [x] find, findLast
    - [x] includes
    - [x] map
    - [x] filter
    - [x] reduce
    - [ ] forEach
    - [ ] of
    - [ ] isArray
    - [x] join
    - [x] slice
    - [ ] splice
    - [x] fill
    - [x] flat
    - [x] flatMap
    - [ ] sort
    - [ ] reverse
    - [ ] at
- [ ] Строки
  - [x] split
  - [ ] join
  - [ ] String
  - [ ] reverse
  - [ ] sort
  - [x] slice
  - [x] includes
  - [ ] indexOf
  - [x] trim, trimStart, trimEnd
  - [ ] regexp
  - [ ] charAt
  - [ ] concat
  - [x] endsWith, startsWith
  - [ ] repeat
  - [ ] replace, replaceAll
  - [ ] match
- [x] Math
  - [x] ceil, floor
  - [x] random
  - [x] min, max
  - [x] round
  - [x] trunc
- [ ] Даты

# Typescript

- [x] type, interface
  - [ ] Объединение типов через &
- [x] keyof
- [ ] utility-types
  - [ ] Partial, Require
- [ ] Классы
  - [ ] Объявление класса
  - [ ] extends
  - [ ] конструкторы
  - [ ] поля
  - [ ] модификаторы доступа

# Браузер API

- [ ] localStorage, sessionStorage
- [ ] AbortController
- [x] setTimeout, clearTimeout
- [ ] setInterval
- [ ] fetch
  - [x] .json()
  - [x] status
  - [x] ok
- [x] URL
- [x] URLSearchParams
- [ ] new Event, подписка \ отписка на события.

# HTML, CSS

- [ ] flex
  
  - [x] display: flex
    
    - [ ] display: inline-flex
  
  - [x] flex-direction: row | column
  
  - [x] flex-wrap: nowrap | wrap
  
  - [ ] flex-flow: направление перенос;
  
  - [x] gap
    
    - [ ] row-gap, column-gap
  
  - [x] justify-content
  
  - [x] align-items
  
  - [ ] align-content
  
  - [x] flex-grow: 0;
  
  - [x] flex-shrink: 1;
  
  - [x] flex-basis: auto;
  
  - [x] flex, Растягивание + сужение + базис
- [ ] grid
  - [x] grid-auto-flow
  - [x] grid-template-rows, grid-template-columns
  - [x] gap
  - [ ] Размерности
    - [x] px
    - [x] fr
    - [x] auto
    - [x] minmax
  - [ ] repeat
    - [x] auto-fill
    - [x] auto-fit
  - [ ] Растяжение элемента на несколько клеток.
  - [ ] Шаблоны областей.
- [ ] Списки ul
- [ ] Элементы управления
  
  - [ ] checkbox
  
  - [ ] radio button
- [x] media запросы
- [x] Позиционирование
  - [x] static
  - [x] relative
  - [x] absolute
  - [x] fixed
  - [x] sticky
- [x] Блочная модель
  - [x] box-sizing
- [x] overflow
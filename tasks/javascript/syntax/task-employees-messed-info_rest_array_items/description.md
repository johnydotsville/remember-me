У вас есть массив с информацией о сотрудниках:

```javascript
const employees = [
  ['EMP-001', 'David', 'Jones', 'Senior Developer', 'internal:1234', 'david.j@company.com', 'home:NYC', 'skype:david-jones'],
  ['BADGE-002', 'Sarah', 'Smith', 'Content Manager', 'sarah.s@company.com', 'remote', 'internal:5678', 'home:Boston'],
  ['ID-789', 'Michael', 'Brown', 'HR Lead', 'full-time', 'michael.b@company.com', 'home:Chicago', 'internal:9012', '5 years exp'],
  ['CARD-XYZ', 'Emily', 'Davis', 'Junior Dev', 'intern', 'emily.d@company.com', 'internal:3456'],
  ['PASS-123', 'James', 'Wilson', 'Accountant', 'james.w@company.com', 'part-time', 'cpa', 'home:Seattle', 'internal:7890'],
  ['TOKEN-456', 'Lisa', 'Taylor', 'Team Lead', '24/7', 'lisa.t@company.com', 'internal:1234', 'emergency:555-1234']
];
```

Проблема в том, что только первые четыре поля имеют четкую структуру: модель доступа, имя, фамилия, должность. Остальная информация перепуталась и данные потеряли порядок.

### Задача

* Напишите реализацию функции, чтобы каждый элемент стал объектом с полями firstname, lastname, position, details.

* Модель доступа пропустите - она не нужна.

* В details соберите всю перепутанную информацию о сотруднике - ее разберут позже.

Должно получиться вот так:

```javascript
{
  "firstname": "James",
  "lastname": "Wilson",
  "position": "Accountant",
  "details": [
    "james.w@company.com",s
    "part-time",
    "cpa",
    "home:Seattle",
    "internal:7890"
  ]
} 
```
// Auto-generated file (2025-06-04T12:03:53.718Z)
import type { Task, Category } from "@/src/types/model";

export const rootcat: Category = 
{
  name: 'root',
  title: '',
  subcategories: [
    {
      name: 'arrays',
      title: 'Массивы',
      subcategories: []
    },
    {
      name: 'javascript',
      title: '',
      subcategories: [
        {
          name: 'http',
          title: '',
          subcategories: []
        }
      ]
    },
    {
      name: 'objects',
      title: '',
      subcategories: []
    },
    {
      name: 'real-tasks',
      title: '',
      subcategories: []
    },
    {
      name: 'refactoring',
      title: '',
      subcategories: []
    },
    {
      name: 'strings',
      title: '',
      subcategories: []
    },
    {
      name: 'typescript',
      title: '',
      subcategories: [
        {
          name: 'utility-types',
          title: '',
          subcategories: []
        }
      ]
    }
  ]
}

export const tasks: Task[] = [
  {
    id: "f5c414e80e7a29ca",
    name: "task-arrays-create-from-1",
    title: "Создание массива",
    description: "Задания:\r\n\r\n* Создайте массив из 10 элементов со строками \"Элемент 1\", \"Элемент 2\" и т.д.\r\n\r\n* Создайте массив из 10 элементов с объектами вида:\r\n\r\n  ```javascript\r\n  {\r\n    id: 0,\r\n    value: 'Элемент 1'\r\n  }\r\n  ```\r\n\r\nОграничения:\r\n\r\n* Нельзя использовать циклы.\r\n* Нельзя использовать return.",
    template: ``,
    solution: `const foo = Array.from({ length: 10 }, (cur, ind) => \`Элемент \${ind+1}\`);

const bar = Array.from({ length: 10 }, (cur, ind) => ({
  id: ind,
  value: \`Элемент \${ind + 1}\`
}));`,
    categories: ['arrays'],
    tags: []
  },
  {
    id: "5fe5e598d245060f",
    name: "task-arrays-every-some-methods",
    title: "",
    description: "### Вводные\r\n\r\n* Дан массив из объектов, которые содержат название месяца и массив средних температур по неделям:\r\n\r\n```javascript\r\nconst stat = [\r\n  {\r\n    month: 'Февраль',\r\n    avgWeeksTemp: [-8, -5, -10, -3]\r\n  },\r\n  {\r\n    month: 'Март',\r\n    avgWeeksTemp: [-2, 3, 1, 5]\r\n  },\r\n  {\r\n    month: 'Апрель',\r\n    avgWeeksTemp: [7, 10, 12, 9]\r\n  }\r\n];\r\n```\r\n\r\n### Задача\r\n\r\n* Найти первый месяц, в котором все недели были теплые (t > 0).\r\n* Найти первый месяц, в котором была хотя бы одна теплая неделя.\r\n* Вывести название найденного месяца.\r\n* Если таких месяцев не было, сообщить об этом.",
    template: ``,
    solution: `// Месяц, в котором все недели теплые
const fullyWarm = stat.find(s => s.avgWeeksTemp.every(temp => temp > 0));
console.log(fullyWarm?.month ?? 'Не было ни одного полностью теплого месяца.');

// Месяц, в котором хотя бы одна неделя теплая
const partiallyWarm = stat.find(s => s.avgWeeksTemp.some(temp => temp > 0));
console.log(partiallyWarm?.month ?? 'Не было ни одного хотя бы частичного теплого месяца.');`,
    categories: ['arrays'],
    tags: []
  },
  {
    id: "11fb4bd0b1121b76",
    name: "task-arrays-filter-method",
    title: "Деактивация пользователей",
    description: "Есть массив учетных записей пользователей:\r\n\r\n```javascript\r\nconst userAccounts = [\r\n  { id: 1, username: 'ivan.petrov', isActive: true, lastVisitDaysAgo: 5 },\r\n  { id: 2, username: 'mariya.sidorova', isActive: false, lastVisitDaysAgo: 120 },\r\n  { id: 3, username: 'alex.ivanov', isActive: true, lastVisitDaysAgo: 2 },\r\n  { id: 4, username: 'elena.kuznetsova', isActive: true, lastVisitDaysAgo: 7 },\r\n  { id: 5, username: 'dmitriy.smirnov', isActive: false, lastVisitDaysAgo: 90 },\r\n  { id: 6, username: 'olga.vasnetsova', isActive: true, lastVisitDaysAgo: 1 },\r\n  { id: 7, username: 'sergey.lebedev', isActive: false, lastVisitDaysAgo: 60 },\r\n  { id: 8, username: 'anna.zhukova', isActive: true, lastVisitDaysAgo: 20 },  // <-- deactivate\r\n  { id: 9, username: 'pavel.novikov', isActive: false, lastVisitDaysAgo: 150 },\r\n  { id: 10, username: 'natalya.morozova', isActive: true, lastVisitDaysAgo: 3 },\r\n];\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите функцию, которая возвращает массив идентификаторов пользователей, чьи учетные записи подлежат деактивации.\r\n* Критерий деактивации - последнее посещение сайта больше N дней назад. По умолчанию - 14.",
    template: ``,
    solution: `function getUserAccountsToDeactivate(accounts, daysThreshold = 14) {
  return accounts
    .filter(account => account.isActive && account.lastVisitDaysAgo > daysThreshold)
    .map(account => account.id);
}

const idsDeactivate = getUserAccountsToDeactivate(userAccounts);
console.log(idsDeactivate);`,
    categories: ['arrays'],
    tags: []
  },
  {
    id: "b240f68f222d5799",
    name: "task-arrays-find-index-method",
    title: "",
    description: "### Вводные\r\n\r\n* Дан массив дней недели и массив средних температур в эти дни соответственно:\r\n\r\n```javascript\r\nconst daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];\r\nconst temperatures1 = [2, 1, -5, 3, 0, -1, 2];\r\nconst temperatures2 = [2, 1, 5, 3, 0, 1, 2];\r\n```\r\n\r\n### Задача\r\n\r\n* Написать функцию, которая выводит в консоль отчет:\r\n  * Первый холодный день на неделе. Вывести название дня и какая была температура.\r\n  * Если холодных дней не было, тоже сообщить об этом.\r\n* Функция принимает массив дней, массив температур и порог температуры, который считается холодным (параметр опциональный, по умолчанию дб 0).\r\n* Поправить функцию, чтобы было то же самое, но только для последнего холодного дня недели.",
    template: ``,
    solution: `// Первый холодный
function weekTemperatureReport(weekDays, temps, thres) {
  const firstColdInd = temps.findIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(\`Первый холодный день на этой неделе: \${weekDays[firstColdInd]}. Температура была: \${temps[firstColdInd]}C\`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}


// Последний холодный
function weekTemperatureReport(weekDays, temps, thres) {
  const firstColdInd = temps.findLastIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(\`Первый холодный день на этой неделе: \${weekDays[firstColdInd]}. Температура была: \${temps[firstColdInd]}C\`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}`,
    categories: ['arrays'],
    tags: []
  },
  {
    id: "27daa17fd930b723",
    name: "task-arrays-includes-method",
    title: "Поддерживаемые языки",
    description: "Сайт поддерживает несколько языков. Эти языки находятся в массиве:\r\n\r\n```javascript\r\nconst supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'ja'];\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите утилитарную функцию, которая принимает код языка и возвращает true | false в зависимости от того, поддерживается язык или нет.",
    template: ``,
    solution: `const supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'ja'];

function isLangSupported(langCode) {
  return supportedLanguages.includes(langCode);
}

console.log(isLangSupported('ru'));
console.log(isLangSupported('foobar'));`,
    categories: ['arrays'],
    tags: []
  },
  {
    id: "e90dbe808439efb4",
    name: "task-arrays-merge-1",
    title: "",
    description: "### Вводные\r\n\r\nЕсть два массива:\r\n\r\n* Активные пользователи, которые пользовались приложением в течение месяца:\r\n\r\n```javascript\r\nconst activeUsers = [\r\n  { id: 1, name: 'Alice', lastLogin: '2023-10-15' },\r\n  { id: 2, name: 'Bob', lastLogin: '2023-10-20' }\r\n];\r\n```\r\n\r\n* Новые пользователи, которые зарегистрировались на этой неделе:\r\n\r\n```javascript\r\nconst newUsers = [\r\n  { id: 3, name: 'Charlie', signupDate: '2023-10-25' },\r\n  { id: 4, name: 'Dave', signupDate: '2023-10-26' }\r\n];\r\n```\r\n\r\n### Задача\r\n\r\n* Объединить обе категории пользователей в новый массив так, чтобы новые были в начале.",
    template: `const activeUsers = [
  { id: 1, name: 'Alice', lastLogin: '2023-10-15' },
  { id: 2, name: 'Bob', lastLogin: '2023-10-20' }
];

const newUsers = [
  { id: 3, name: 'Charlie', signupDate: '2023-10-25' },
  { id: 4, name: 'Dave', signupDate: '2023-10-26' }
];`,
    solution: `const allUsers = [...newUsers, ...activeUsers];
console.log(allUsers);`,
    categories: ['arrays'],
    tags: []
  },
  {
    id: "b7ce4a1a9a82cf6e",
    name: "task-fetch-with-query-string",
    title: "",
    description: "### Вводные\r\n\r\nЭндпоинт `https://jsonplaceholder.typicode.com/posts`, возвращает массив таких объектов:\r\n\r\n```javascript\r\n{\r\n  userId,\r\n  id,\r\n  title,\r\n  body\r\n}\r\n```\r\n\r\nЭндпоинт поддерживает пагинацию через строку запроса, параметры `_page` и `_limit`, оба - целые числа.\r\n\r\n### Задача\r\n\r\n* Написать функцию, которая принимает эти параметры, делает запрос на сервер и выводит заголовки постов в консоль.\r\n\r\n### Уточнения\r\n\r\nЗадача на умение разными способами добавлять query string к url. Внимание акцентировать именно на этом, а не на обработке возможных ошибок и т.д.",
    template: ``,
    solution: `async function fetchData(page, limit) {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';

  const url = new URL(endpoint);
  url.searchParams.append('_page', String(page));
  url.searchParams.append('_limit', String(limit));

  const response = await fetch(url);
  const data = await response.json();
  data.forEach(p =>console.log(p.title));
}

fetchData(5, 3);


// Вариант 2
async function fetchData(page, limit) {
  const params = new URLSearchParams();
  params.append('_page', String(page));
  params.append('_limit', String(limit));

  const endpoint = 'https://jsonplaceholder.typicode.com/posts';
  const url = new URL(endpoint);
  url.search = params.toString();

  const response = await fetch(url);
  const data = await response.json();
  data.forEach(p =>console.log(p.title));
}

fetchData(5, 3);`,
    categories: ['javascript', 'http'],
    tags: []
  },
  {
    id: "d913f8145b51249f",
    name: "task-dyn-add-field",
    title: "",
    description: "Дана функция:\r\n\r\n```javascript\r\nfunction createUser(login, firstname, lastname, role = 'user') {\r\n  if (!login) throw new Error('login является обязательным.');\r\n  return {\r\n    login,\r\n    role,\r\n  }\r\n}\r\n\r\nconst huck = createUser('hfinn', 'Huck', 'Finn');\r\nconsole.log(huck);\r\n```\r\n\r\nЗадача:\r\n\r\n* Доработать функцию так, чтобы поля firstname и lastname добавлялись в объект динамически - только если они переданы и не являются пустыми строками.\r\n* Поле lastname должно попасть в объект под названием surname.",
    template: ``,
    solution: `function createUser(login, firstname, lastname, role = 'user') {
  if (!login) throw new Error('login является обязательным.');
  return {
    login,
    role,
    ...(firstname && firstname.length > 0 && { firstname }),
    ...(lastname && lastname.length > 0 && { surname: lastname }),
  }
}

const huck = createUser('hfinn', 'Huck', 'Finn');
console.log(huck);`,
    categories: ['objects'],
    tags: []
  },
  {
    id: "36637079d6213b2f",
    name: "task-merge-objects-1",
    title: "",
    description: "Есть два объекта конфигурации:\r\n\r\n```javascript\r\nconst defaultConfig = {\r\n  cacheTime: 30_000,\r\n  staleTime: 0\r\n}\r\n\r\nconst myConfig = {\r\n  timeout: 1000,\r\n  refetchOnFail: false\r\n}\r\n```\r\n\r\n Задачи:\r\n\r\n* Объединить два конфига в новый.\r\n* Заменить параметр `refetchOnFail` на true.\r\n\r\nДоп. условия:\r\n\r\n* Сначала сделать это за две операции, потом за одну.",
    template: ``,
    solution: `// За две
const config = {
  ...defaultConfig,
  ...myConfig
}

const rewritten = {
  ...config,
  refetchOnFail: true
}

// За одну
const config = {
  ...defaultConfig,
  ...myConfig,
  refetchOnFail: true
}`,
    categories: ['objects'],
    tags: []
  },
  {
    id: "47dc1357ae09209a",
    name: "task-classic-simple-debounce-user-input",
    title: "",
    description: "На странице находится поле ввода. Когда пользователь вводит в него текст, на сервер уходит запрос поиска.\r\n\r\nЗадача:\r\n\r\n* Сделать так, чтобы запрос уходил не сразу, а с задержкой в 1.5с после того как пользователь прекратил вводить запрос.\r\n\r\nДля решения воспользуйтесь любой online-песочницей с поддержкой html+js, например:\r\n\r\n```\r\nhttps://playcode.io/javascript\r\n```\r\n\r\n",
    template: `// html
<input id="userSearch" />


// javascript
const userInput = document.querySelector('#userSearch');

userInput.addEventListener('input', () => goSearch(userInput.value));

function goSearch(value) {
  console.log(\`Запрос поиска на сервер: \${value}\`)
}`,
    solution: `const userInput = document.querySelector('#userSearch');

userInput.addEventListener('input', debounce((event) => goSearch(event.target.value), 1500));

function goSearch(value) {
  console.log(\`Запрос поиска на сервер: \${value}\`)
}

function debounce(func, delayMs) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delayMs);
  }
}`,
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "e605a49167ed6568",
    name: "task-dotaters-thanks",
    title: "",
    description: "TODO: оформить в виде задачи нормально.\r\n\r\nЗадача: напишите функцию, которая принимает массив донатеров и  возвращает благодарственное сообщение \"Дорогие {имена пользователей}! В  общей сложности вы задонатили {сумма}. Это очень помогает мне развивать  канал. Спасибо вам большое!\". Имена пользователей должны быть разделены  запятой, а последние два имени - буквой \"и\". Сумма должна быть суммой  пожертвований от всех пользователей.\r\n\r\n```javascript\r\nconst donors = [\r\n  { username: 'kuzzya', donated: 100 },\r\n  { username: 'alex.ivanov', donated: 50 },\r\n  { username: 'elena.k', donated: 200 },\r\n  { username: 'pavel_n', donated: 75 }\r\n];\r\n```\r\n\r\n```javascript\r\nfunction generateThankYouMessage(donors) {\r\n  // 1. Собираем имена донатеров\r\n  const names = donors.map(donor => donor.username);\r\n  \r\n  // 2. Форматируем список имен\r\n  let namesList;\r\n  if (names.length === 1) {\r\n    namesList = names[0];\r\n  } else {\r\n    const firstPart = names.slice(0, -2).join(', ');\r\n    const lastTwo = names.slice(-2).join(' и ');\r\n    namesList = [firstPart, lastTwo].filter(Boolean).join(', ');\r\n  }\r\n  \r\n  // 3. Считаем общую сумму донатов\r\n  const totalAmount = donors.reduce((sum, donor) => sum + donor.donated, 0);\r\n  \r\n  // 4. Формируем сообщение\r\n  return `Дорогие ${namesList}! В общей сложности вы задонатили ${totalAmount}. Это очень помогает мне развивать канал. Спасибо вам большое!`;\r\n}\r\n\r\n// Проверка\r\nconsole.log(generateThankYouMessage(donors));\r\n```\r\n\r\n",
    template: ``,
    solution: ``,
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "8c5114116f200b9f",
    name: "task-flat-categories",
    title: "",
    description: "Есть объект типа 'Категория':\r\n\r\n```typescript\r\ntype Category = {\r\n  name: string,\r\n  subcategories: Category[]\r\n}\r\n```\r\n\r\nУ категории есть имя и массив вложенных в нее категорий (\"подкатегории\").\r\n\r\nЗадача:\r\n\r\n* Напишите функцию, которая возвращает плоский массив с именами всех категорий и вложенных в них подкатегорий.\r\n\r\nНапример для такой структуры:\r\n\r\n```javascript\r\n{\r\n  name: 'javascript',\r\n  subcategories: [\r\n    {\r\n      name: 'strings',\r\n      subcategories: []\r\n    },\r\n    {\r\n      name: 'objects',\r\n      subcategories: [\r\n        {\r\n          name: 'arrays',\r\n          subcategories: []\r\n        }\r\n      ]\r\n    },\r\n  ]\r\n}\r\n```\r\n\r\nДолжно получиться:\r\n\r\n```javascript\r\n['javascript', 'strings', 'objects', 'arrays']\r\n```\r\n\r\n",
    template: `const rootcat = 
{
  name: 'root',
  subcategories: [
    {
      name: 'javascript',
      subcategories: [
        {
          name: 'http',
          subcategories: []
        },
        {
          name: 'objects',
          subcategories: []
        },
        {
          name: 'strings',
          subcategories: []
        },
        {
          name: 'arrays',
          subcategories: []
        }
      ]
    },
    {
      name: 'real-tasks',
      subcategories: []
    },
    {
      name: 'refactoring',
      subcategories: []
    },
    
    {
      name: 'typescript',
      subcategories: [
        {
          name: 'utility-types',
          subcategories: []
        }
      ]
    }
  ]
}


// Реализуйте функцию flatCategories

const categories = flatCategories(rootcat);
categories.forEach(category => console.log(category));`,
    solution: `function flatCategories(category) {
  const names = [];
  names.push(category.name);

  category.subcategories.forEach(sub => names.push(...(flatCategories(sub))));

  return names;
}`,
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "d279c4b5be657b71",
    name: "task-merge-user-info",
    title: "",
    description: "### Вводные\r\n\r\nДаны два массива:\r\n\r\n* Основные пользователи в базе данных:\r\n\r\n```javascript\r\nconst dbUsers = [\r\n  { id: 1, name: \"Alice\", email: \"alice@example.com\" },\r\n  { id: 2, name: \"Bob\", role: \"admin\" },\r\n  { id: 3, name: \"Charlie\" }\r\n];\r\n```\r\n\r\n* И дополнительные данные из соцсетей:\r\n\r\n```javascript\r\nconst socialUsers = [\r\n  { id: 1, hobby: \"chess\", email: \"alice123@social.com\" },\r\n  { id: 4, name: \"Dave\", role: \"user\" }\r\n];\r\n```\r\n\r\nВ дополнительных данных может быть как новый пользователь, так и дополнительная информация об уже существующих пользователях.\r\n\r\n### Задача\r\n\r\n* Объединить два массива так, чтобы получился новый массив, в котором будут все пользователи - и старые, и новые, плюс у старых пользователей появится дополнительная информация.\r\n\r\n### Дополнительные условия\r\n\r\n* Постараться сделать без мутирования исходных массивов и объектов.",
    template: `// Основные пользователи (из БД)
const dbUsers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie" }
];

// Дополнительные данные (из соцсетей)
const socialUsers = [
  { id: 1, hobby: "chess", email: "alice123@social.com" },
  { id: 4, name: "Dave", role: "user" }
];


function mergeUsers(databaseUsers, socialUsers) {
  // Ваш код здесь
}

const merged = mergeUsers(dbUsers, socialUsers);
console.log(merged);`,
    solution: `// Основные пользователи (из БД)
const dbUsers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie" }
];

// Дополнительные данные (из соцсетей)
const socialUsers = [
  { id: 1, hobby: "chess", email: "alice123@social.com" },
  { id: 4, name: "Dave", role: "user" }
];


function mergeUsers(databaseUsers, socialUsers) {
  return socialUsers.reduce((mergedUsers, socialUser) => {
    const existingUserIndex = databaseUsers.findIndex(dbUser => dbUser.id === socialUser.id);
    return existingUserIndex === -1
      ? [...mergedUsers, socialUser]
      : mergedUsers.map((u, ind) => ind === existingUserIndex ? { ...u, ...socialUser } : u)
  }, databaseUsers);
}

const merged = mergeUsers(dbUsers, socialUsers);
console.log(merged);`,
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "62bb7163a6460b30",
    name: "task-fetch-to-ent",
    title: "",
    description: "### Вводные\r\n\r\nОтрефакторить указанную функцию, чтобы она больше походила на промышленное решение. Ограничений нет, рефакторить на сколько хватит фантазии. Приведенное решение - просто ориентир, а не идеал.",
    template: `async function fetchData(page, limit) {
  const params = new URLSearchParams();
  params.append('_page', page.toString());
  params.append('_limit', limit.toString());

  const endpoint = 'https://jsonplaceholder.typicode.com/posts';
  const url = new URL(endpoint);
  url.search = params.toString();

  const response = await fetch(url);
  const data = await response.json();
  data.forEach(p =>console.log(p.title));
}

fetchData(5, 3);`,
    solution: `async function fetchData(baseUrl, page, limit) {
  try {
    const url = new URL(baseUrl);
    url.searchParams.append('_page', String(page));
    url.searchParams.append('_limit', String(limit));

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`Ошибка выбора данных. HTTP-status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

async function show() {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';
  const data = await fetchData(endpoint, 5, 10);

  if (!data || !Array.isArray(data)) {
    throw new Error(\`Ожидался массив, а получено \${typeof data}\`)
  }

  data.forEach(p => {
    if (p?.title) {
      console.log(p.title)
    }
  });
}

show();`,
    categories: ['refactoring'],
    tags: []
  },
  {
    id: "a30c8fd86874b15f",
    name: "task-partial-1",
    title: "",
    description: "### Сделайте чтобы было четко, u know?\r\n\r\nЭффектный рецепт плова:\r\n\r\n* Берем сперва укропу;\r\n* Потом кошачью жопу.\r\n* Двадцать пять картошек;\r\n* Семнадцать мандавошек;\r\n* Ведро воды и хуй туды;\r\n* Охапку дров - и плов готов!\r\n\r\nПочти по рецепту пахома. Подавать со сладким хлебом.\r\n\r\n\r\n\r\n## Wjta\r\n\r\nda fuck\r\n\r\n\r\n\r\n### you kono\r\n\r\nknow waht the heck\r\n\r\n```typescript\r\nconsole.log('hello, world!');\r\n\r\ninterface Cat {\r\n  meow();\r\n  scratch();\r\n}\r\n```\r\n\r\n",
    template: `type UserProfile = {
  id: string;
  name: string;
  email: string;
  age: number;
  isVerified: boolean;
};

function updateProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...profile, ...updates };
}

const alice: UserProfile = {
  id: "user-1",
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isVerified: false,
};

console.log(alice);

const upedAlice = updateProfile(alice, {
  email: "mynameisalice@umbrella.com",  // <-- Передаем "обгрызанный" объект
  isVerified: true
});

console.log(upedAlice);`,
    solution: `type UserProfile = {
  id: string;
  name: string;
  email: string;
  age: number;
  isVerified: boolean;
};

function updateProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...profile, ...updates };
}

const alice: UserProfile = {
  id: "user-1",
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isVerified: false,
};

console.log(alice);

const upedAlice = updateProfile(alice, {
  email: "mynameisalice@umbrella.com",  // <-- Передаем "обгрызанный" объект
  isVerified: true
});

console.log(upedAlice);`,
    categories: ['typescript', 'utility-types'],
    tags: []
  },
  {
    id: "3259fca9146620fd",
    name: "task-pick-2",
    title: "",
    description: "# Сывow?\r\n\r\nЭщкере, мазафака, дёрти щет!\r\n\r\n\r\n\r\n## Wjta\r\n\r\nda fuck\r\n\r\n\r\n\r\n### you kono\r\n\r\nknow waht the heck\r\n\r\n```typescript\r\nconsole.log('hello, world!');\r\n\r\ninterface Cat {\r\n  meow();\r\n  scratch();\r\n}\r\n```\r\n\r\n",
    template: `type UserProfile = {
  id: string;
  name: string;
  email: string;
  age: number;
  isVerified: boolean;
};

function updateProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...profile, ...updates };
}

const alice: UserProfile = {
  id: "user-1",
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isVerified: false,
};

console.log(alice);

const upedAlice = updateProfile(alice, {
  email: "mynameisalice@umbrella.com",  // <-- Передаем "обгрызанный" объект
  isVerified: true
});

console.log(upedAlice);`,
    solution: ``,
    categories: ['typescript', 'utility-types'],
    tags: []
  }
];

export default tasks;

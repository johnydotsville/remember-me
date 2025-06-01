// Auto-generated file (2025-06-01T06:55:32.636Z)

export interface ITask {
  id: string;
  description: string;
  template: string;
  solution: string;
  categories: string[];
}

export interface ICategory {
  name: string,
  subcategories: ICategory[]
}

export const rootcat: ICategory = 
{
  name: 'root',
  subcategories: [
    {
      name: 'arrays',
      subcategories: []
    },
    {
      name: 'javascript',
      subcategories: [
        {
          name: 'http',
          subcategories: []
        }
      ]
    },
    {
      name: 'objects',
      subcategories: []
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
      name: 'strings',
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

export const tasks: Task[] = [
  {
    id: "arrays-task-array-create-from-1",
    description: "Задания:\r\n\r\n* Создайте массив из 10 элементов со строками \"Элемент 1\", \"Элемент 2\" и т.д.\r\n\r\n* Создайте массив из 10 элементов с объектами вида:\r\n\r\n  ```javascript\r\n  {\r\n    id: 0,\r\n    value: 'Элемент 1'\r\n  }\r\n  ```\r\n\r\nОграничения:\r\n\r\n* Нельзя использовать циклы.\r\n* Нельзя использовать return.",
    template: ``,
    solution: `const foo = Array.from({ length: 10 }, (cur, ind) => \`Элемент \${ind+1}\`);

const bar = Array.from({ length: 10 }, (cur, ind) => ({
  id: ind,
  value: \`Элемент \${ind + 1}\`
}));`,
    categories: ['arrays']
  },
  {
    id: "arrays-task-arrays-merge-1",
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
    categories: ['arrays']
  },
  {
    id: "javascript-http-task-fetch-with-query-string",
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
    categories: ['javascript', 'http']
  },
  {
    id: "objects-task-dyn-add-field",
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
    categories: ['objects']
  },
  {
    id: "objects-task-merge-objects-1",
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
    categories: ['objects']
  },
  {
    id: "real-tasks-task-debounce-user-input",
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
    categories: ['real-tasks']
  },
  {
    id: "real-tasks-task-flat-categories",
    description: "Есть объект типа 'Категория':\r\n\r\n```\r\ntype Category = {\r\n  name: string,\r\n  subcategories: Category[]\r\n}\r\n```\r\n\r\nУ категории есть имя и массив вложенных в нее категорий (\"подкатегории\").\r\n\r\nЗадача:\r\n\r\n* Напишите функцию, которая возвращает плоский массив с именами категорий.\r\n\r\nНапример для такой структуры:\r\n\r\n```javascript\r\n{\r\n  name: 'javascript',\r\n  subcategories: [\r\n    {\r\n      name: 'strings',\r\n      subcategories: []\r\n    },\r\n    {\r\n      name: 'objects',\r\n      subcategories: [\r\n        {\r\n          name: 'arrays',\r\n          subcategories: []\r\n        }\r\n      ]\r\n    },\r\n  ]\r\n}\r\n```\r\n\r\nДолжно получиться:\r\n\r\n```javascript\r\n['javascript', 'strings', 'objects', 'arrays']\r\n```\r\n\r\n",
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
    categories: ['real-tasks']
  },
  {
    id: "real-tasks-task-merge-user-info",
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
    categories: ['real-tasks']
  },
  {
    id: "refactoring-task-fetch-to-ent",
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
    categories: ['refactoring']
  },
  {
    id: "typescript-utility-types-task-partial-1",
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
    categories: ['typescript', 'utility-types']
  },
  {
    id: "typescript-utility-types-task-pick-2",
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
    categories: ['typescript', 'utility-types']
  }
];

export default tasks;

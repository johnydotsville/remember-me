// Auto-generated file (2025-05-29T17:56:35.046Z)

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

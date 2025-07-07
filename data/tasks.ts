// Auto-generated file (2025-07-07T18:34:11.771Z)
import type { Task, Category } from "@/src/types/model";

export const rootcat: Category = 
{
  name: 'root',
  title: '',
  hidden: false,
  subcategories: [
    {
      name: 'arrays',
      title: 'Массивы',
      hidden: false,
      subcategories: []
    },
    {
      name: 'browser-api',
      title: '',
      hidden: false,
      subcategories: [
        {
          name: 'http',
          title: 'Http',
          hidden: false,
          subcategories: []
        }
      ]
    },
    {
      name: 'javascript',
      title: 'Javascript',
      hidden: false,
      subcategories: [
        {
          name: 'destruction',
          title: 'Деструктуризация',
          hidden: false,
          subcategories: []
        },
        {
          name: 'exceptions',
          title: 'Exceptions',
          hidden: false,
          subcategories: []
        },
        {
          name: 'map',
          title: 'Map',
          hidden: false,
          subcategories: []
        },
        {
          name: 'math',
          title: 'Math',
          hidden: false,
          subcategories: []
        },
        {
          name: 'other',
          title: 'Прочее',
          hidden: false,
          subcategories: []
        },
        {
          name: 'set',
          title: 'Set',
          hidden: false,
          subcategories: []
        },
        {
          name: 'strings',
          title: 'Строки',
          hidden: false,
          subcategories: []
        },
        {
          name: 'syntax',
          title: 'Синтаксис',
          hidden: true,
          subcategories: []
        }
      ]
    },
    {
      name: 'objects',
      title: 'Объекты',
      hidden: false,
      subcategories: []
    },
    {
      name: 'real-tasks',
      title: 'Комбинированные задачи',
      hidden: false,
      subcategories: []
    },
    {
      name: 'refactoring',
      title: 'Рефакторинг',
      hidden: false,
      subcategories: []
    },
    {
      name: 'typescript',
      title: 'Typescript',
      hidden: false,
      subcategories: [
        {
          name: 'operators-and-constructions',
          title: '',
          hidden: false,
          subcategories: []
        },
        {
          name: 'type-interface',
          title: 'type и interface',
          hidden: false,
          subcategories: []
        },
        {
          name: 'utility-types',
          title: 'Utility-типы',
          hidden: false,
          subcategories: []
        }
      ]
    }
  ]
}

export const tasks: Task[] = [
  {
    id: "b72c1cedfba6ed64",
    name: "task-app-users_arrays_spread",
    path: "tasks\\arrays\\task-app-users_arrays_spread",
    title: "Пользователи программы",
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
    tags: ['spread', '...', 'массивы', 'array']
  },
  {
    id: "8a9b8d3392471290",
    name: "task-cold-days_arrays_findIndex_findLastIndex_indexOf_lastIndexOf",
    path: "tasks\\arrays\\task-cold-days_arrays_findIndex_findLastIndex_indexOf_lastIndexOf",
    title: "Холодные дни на неделе",
    description: "### Вводные\r\n\r\n* Дан массив дней недели и массив средних температур в эти дни соответственно:\r\n\r\n```javascript\r\nconst daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];\r\nconst temperatures1 = [2, 1, -5, 3, 0, -1, 2];\r\nconst temperatures2 = [2, 1, 5, 3, 0, 1, 2];\r\n```\r\n\r\n### Задача\r\n\r\n* Написать функцию, которая выводит в консоль отчет:\r\n  * Первый холодный день на неделе. Вывести название дня и какая была температура.\r\n  * Если холодных дней не было, тоже сообщить об этом.\r\n  * Функция принимает массив дней, массив температур и порог температуры, который считается холодным (параметр опциональный, по умолчанию дб 0).\r\n* Сделать такую же функцию, но только для последнего холодного дня недели.\r\n  * Сделать такую же функцию, которая ищет первый день с конкретной температурой, по умолчанию 0.\r\n    * И последний день с конкретной температурой.",
    template: ``,
    solution: `// Первый холодный
function weekTemperatureReport(days, temps, thres) {
  const firstColdInd = temps.findIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(\`Первый холодный день на этой неделе: \${days[firstColdInd]}. Температура была: \${temps[firstColdInd]}C\`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}


// Последний холодный
function weekTemperatureReport(days, temps, thres) {
  const firstColdInd = temps.findLastIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(\`Последний холодный день на этой неделе: \${days[firstColdInd]}. Температура была: \${temps[firstColdInd]}C\`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}


// Первый день с конкретной температурой
function weekTemperatureReport(days, temps, temp = 0) {
  const tempInd = temps.indexOf(temp);
  if (tempInd !== -1) {
    console.log(\`Первый день с температурой \${temp}: \${days[tempInd]}\`);
  } else {
    console.log(\`На этой неделе не было дней с температурой \${temp}C.\`);
  }
}


// Последний день с конкретной температурой
function weekTemperatureReport(days, temps, temp = 0) {
  const tempInd = temps.lastIndexOf(temp);
  if (tempInd !== -1) {
    console.log(\`Последний день с температурой \${temp}: \${days[tempInd]}\`);
  } else {
    console.log(\`На этой неделе не было дней с температурой \${temp}C.\`);
  }
}`,
    categories: ['arrays'],
    tags: ['findIndex', 'findLastIndex', 'indexOf', 'lastIndexOf', 'массивы', 'array']
  },
  {
    id: "3d5e0a711c944e66",
    name: "task-create-via-static-from_arrays_from",
    path: "tasks\\arrays\\task-create-via-static-from_arrays_from",
    title: "Создание массива",
    description: "Задания:\r\n\r\n* Создайте массив из 10 элементов со строками \"Элемент 1\", \"Элемент 2\" и т.д.\r\n\r\n* Создайте массив из 10 элементов с объектами вида:\r\n\r\n  ```javascript\r\n  {\r\n    id: 0,\r\n    value: 'Элемент 1'\r\n  }\r\n  ```\r\n\r\nОграничения:\r\n\r\n* Нельзя использовать циклы.\r\n* Нельзя использовать return.",
    template: ``,
    solution: `const foo = Array.from({ length: 10 }, (cur, ind) => \`Элемент \${ind+1}\`);

const bar = Array.from({ length: 10 }, (cur, ind) => ({
  id: ind,
  value: \`Элемент \${ind + 1}\`
}));`,
    categories: ['arrays'],
    tags: ['массивы', 'array', 'легко', 'синтаксис']
  },
  {
    id: "d8d3d77e755d2d3d",
    name: "task-deactivate-users_arrays_filter",
    path: "tasks\\arrays\\task-deactivate-users_arrays_filter",
    title: "Деактивация пользователей",
    description: "Есть массив учетных записей пользователей:\r\n\r\n```javascript\r\nconst userAccounts = [\r\n  { id: 1, username: 'ivan.petrov', isActive: true, lastVisitDaysAgo: 5 },\r\n  { id: 2, username: 'mariya.sidorova', isActive: false, lastVisitDaysAgo: 120 },\r\n  { id: 3, username: 'alex.ivanov', isActive: true, lastVisitDaysAgo: 2 },\r\n  { id: 4, username: 'elena.kuznetsova', isActive: true, lastVisitDaysAgo: 7 },\r\n  { id: 5, username: 'dmitriy.smirnov', isActive: false, lastVisitDaysAgo: 90 },\r\n  { id: 6, username: 'olga.vasnetsova', isActive: true, lastVisitDaysAgo: 1 },\r\n  { id: 7, username: 'sergey.lebedev', isActive: false, lastVisitDaysAgo: 60 },\r\n  { id: 8, username: 'anna.zhukova', isActive: true, lastVisitDaysAgo: 20 },  // <-- deactivate\r\n  { id: 9, username: 'pavel.novikov', isActive: false, lastVisitDaysAgo: 150 },\r\n  { id: 10, username: 'natalya.morozova', isActive: true, lastVisitDaysAgo: 3 },\r\n];\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите функцию, которая возвращает массив идентификаторов пользователей, чьи учетные записи подлежат деактивации.\r\n* Критерий деактивации - последнее посещение сайта больше N дней назад. По умолчанию - 14.\r\n  * Некоторые пользователи уже деактивированы (у них isActive = false), их идентификаторы нас не интересуют.",
    template: ``,
    solution: `function shouldBeDeactivated(accounts, daysThreshold = 14) {
  return accounts
    .filter(account => account.isActive && account.lastVisitDaysAgo > daysThreshold)
    .map(account => account.id);
}

const deactivateIds = shouldBeDeactivated(userAccounts);
console.log(deactivateIds);`,
    categories: ['arrays'],
    tags: ['map', 'filter', 'легко', 'массивы', 'array']
  },
  {
    id: "6102486f7d9faa42",
    name: "task-edge-effect-arrays_slice_join",
    path: "tasks\\arrays\\task-edge-effect-arrays_slice_join",
    title: "Проверка психологического 'эффекта края'",
    description: "В психологии есть так называемый \"эффект края\", согласно которому человек лучше запоминает начало и конец текста. Профессор поручил вам написать функцию, которая выбрасывает из предложения первое и последнее слово, чтобы проверить этот психологический эффект.\r\n\r\n### Задача\r\n\r\n* Выбросить из предложения первое и последнее слово, заменив их на три вопросительных знака ???.\r\n* Предложения короткие, слова строго разделены пробелом.\r\n* В предложениях гарантировано не меньше пяти слов.",
    template: `const phrase = 'Кошка спит на тёплом диване';

function edgeEffect(phrase) {
  // Ваше решение
}

console.log(edgeEffect(phrase));`,
    solution: `function edgeEffect(phrase) {
  const edged = phrase.split(' ').slice(1, -1);
  return ['???', ...edged, '???'].join(' ');
}`,
    categories: ['arrays'],
    tags: ['slice', 'join', 'массивы', 'array']
  },
  {
    id: "f5d854cfcd6c467d",
    name: "task-last-exam_arrays_findLast",
    path: "tasks\\arrays\\task-last-exam_arrays_findLast",
    title: "Последний экзамен в месяце",
    description: "В школе решили растянуть сдачу экзаменов на несколько месяцев. Расписание выглядит примерно так:\r\n\r\n```javascript\r\nconst exams = [\r\n  { course: 'Математика', month: 'Март' },\r\n  { course: 'Физика', month: 'Март' },\r\n  { course: 'Информатика', month: 'Апрель' },\r\n  { course: 'Химия', month: 'Апрель' },\r\n  { course: 'История', month: 'Май' },\r\n  { course: 'Литература', month: 'Май' },\r\n  { course: 'Английский язык', month: 'Май' },\r\n  { course: 'География', month: 'Июнь' }\r\n];\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите реализацию для функции, которая принимает список экзаменов и месяц и выдает, какой экзамен в этом месяце последний.",
    template: `const exams = [
  { course: 'Математика', month: 'Март' },
  { course: 'Физика', month: 'Март' },
  { course: 'Информатика', month: 'Апрель' },
  { course: 'Химия', month: 'Апрель' },
  { course: 'История', month: 'Май' },
  { course: 'Литература', month: 'Май' },
  { course: 'Английский язык', month: 'Май' },
  { course: 'География', month: 'Июнь' }
];

function lastCourseInMonth(exams, month) {
  // Ваше решение
}

console.log(lastCourseInMonth(exams, 'Май'));
console.log(lastCourseInMonth(exams, 'Июль'));`,
    solution: `function lastCourseInMonth(exams, month) {
  return exams.findLast(exam => exam.month === month)?.course
    || \`В \${month} нет экзаменов\`;
}`,
    categories: ['arrays'],
    tags: ['findLast', 'массивы', 'array']
  },
  {
    id: "f6320a5a46f06301",
    name: "task-lucky-player_arrays_find",
    path: "tasks\\arrays\\task-lucky-player_arrays_find",
    title: "Игрок, которому повезло",
    description: "Есть таблица лидеров региона по игре \"Strike Back\":\r\n\r\n```javascript\r\nconst esportsPlayers = [\r\n  { player: \"Ninja\", score: 24500 },\r\n  { player: \"Shroud\", score: 18900 },\r\n  { player: \"Faker\", score: 32000 },\r\n  { player: \"s1mple\", score: 27800 },\r\n  { player: \"Bugha\", score: 15400 },\r\n  { player: \"Rookie\", score: 8500 },\r\n  { player: \"ZywOo\", score: 7200 },\r\n  { player: \"Meteos\", score: 4300 },\r\n  { player: \"xPeke\", score: 6800 },\r\n  { player: \"BoxBox\", score: 9200 }\r\n];\r\n```\r\n\r\nОрганизация \"Team Clear It\" решила провести благотворительную акцию, в рамках которой любой игрок с рейтингом ниже 10_000 получит шанс сыграть в благотворительном матче в составе профессиональной команды.\r\n\r\nЗадача:\r\n\r\n* Напишите реализацию функции, которая выберет из списка первого подходящего игрока.\r\n* Порог рейтинга передается вторым параметром и по умолчанию 10_000.\r\n\r\nДополнительно:\r\n\r\n* Модифицируйте функцию так, чтобы выбирался случайный из всех подходящих кандидатов.",
    template: `const esportsPlayers = [
  { player: "Ninja", score: 24500 },
  { player: "Shroud", score: 18900 },
  { player: "Faker", score: 32000 },
  { player: "s1mple", score: 27800 },
  { player: "Bugha", score: 15400 },
  { player: "Rookie", score: 8500 },
  { player: "ZywOo", score: 7200 },
  { player: "Meteos", score: 4300 },
  { player: "xPeke", score: 6800 },
  { player: "BoxBox", score: 9200 }
];

function getLucker(players) {
  // Ваше решение
}

console.log(getLucker(esportsPlayers));`,
    solution: `// Решение 1: первый попавшийся подходящий игрок
function getLucker(players, threshold = 10_000) {
  return players.find(p => p.score < threshold) || 'Нет подходящих игроков';
}

// Решение 2: случайный игрок из всех подходящих
function getLucker(players, threshold = 10_000) {
  const candidates = players.filter(p => p.score < threshold);
  return candidates.length 
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : 'Нет подходящих игроков';
}`,
    categories: ['arrays'],
    tags: ['find', 'массивы', 'array']
  },
  {
    id: "0d8e3bc4c6e4ff5b",
    name: "task-month-temperatures_arrays_every_some",
    path: "tasks\\arrays\\task-month-temperatures_arrays_every_some",
    title: "Температуры по месяцам",
    description: "### Вводные\r\n\r\n* Дан массив из объектов, которые содержат название месяца и массив средних температур по неделям:\r\n\r\n```javascript\r\nconst stat = [\r\n  {\r\n    month: 'Февраль',\r\n    avgWeeksTemp: [-8, -5, -10, -3]\r\n  },\r\n  {\r\n    month: 'Март',\r\n    avgWeeksTemp: [-2, 3, 1, 5]\r\n  },\r\n  {\r\n    month: 'Апрель',\r\n    avgWeeksTemp: [7, 10, 12, 9]\r\n  }\r\n];\r\n```\r\n\r\n### Задача\r\n\r\n* Найти первый месяц, в котором не было холодных недель (t > 0).\r\n* Найти первый месяц, в котором была как минимум одна теплая неделя.\r\n* Вывести название найденного месяца, а если таких месяцев не было, так и написать.",
    template: ``,
    solution: `// Месяц, в котором все недели теплые
const fullyWarm = stat.find(s => s.avgWeeksTemp.every(temp => temp > 0));
console.log(fullyWarm?.month ?? 'Не было ни одного полностью теплого месяца.');

// Месяц, в котором хотя бы одна неделя теплая
const partiallyWarm = stat.find(s => s.avgWeeksTemp.some(temp => temp > 0));
console.log(partiallyWarm?.month ?? 'Не было ни одного хотя бы частичного теплого месяца.');`,
    categories: ['arrays'],
    tags: ['find', 'some', 'every', '?.', '??', 'массивы', 'array']
  },
  {
    id: "f73e3cb7d9af31af",
    name: "task-reset-orders-status_arrays_fill",
    path: "tasks\\arrays\\task-reset-orders-status_arrays_fill",
    title: "Сброс забагованных статусов заказов",
    description: "У вас есть массив со статусами заказов:\r\n\r\n```javascript\r\nconst orderStatuses = [\r\n  \"delivered\",   // 0\r\n  \"shipped\",     // 1\r\n  \"processing\",  // 2 (сбойный)\r\n  \"processing\",  // 3 (сбойный)\r\n  \"processing\",  // 4 (сбойный)\r\n  \"processing\",  // 5 (сбойный)\r\n  \"processing\",  // 6 (сбойный)\r\n  \"delivered\",   // 7\r\n  \"shipped\",     // 8\r\n  \"pending\"      // 9\r\n];\r\n```\r\n\r\nПо ошибке заказы со 2 до 6 ячейки получили статус 'processing', хотя должны быть 'pending'.\r\n\r\n### Задача\r\n\r\n* Измените сбойные статусы заказов на 'pending'.\r\n  * Изменения проводите прямо в исходном массиве.",
    template: `const orderStatuses = [
  "delivered",   // 0
  "shipped",     // 1
  "processing",  // 2 (сбойный)
  "processing",  // 3 (сбойный)
  "processing",  // 4 (сбойный)
  "processing",  // 5 (сбойный)
  "processing",  // 6 (сбойный)
  "delivered",   // 7
  "shipped",     // 8
  "pending"      // 9
];

function printStatuses(statuses, from, to) {
  console.log(\`Статусы заказов в ячейках с \${from} по \${to}:\`);
  for (let i = from; i <= to; i++) {
    console.log(\`Ячейка [\${i}]: \${statuses[i]}\`);
  }
}

printStatuses(orderStatuses, 2, 6);

// Измените статусы

printStatuses(orderStatuses, 2, 6);`,
    solution: `orderStatuses.fill('pending', 2, 7);`,
    categories: ['arrays'],
    tags: ['fill', 'массивы', 'array']
  },
  {
    id: "ae4ee0ed9cd5b39b",
    name: "task-supported-languages_arrays_includes",
    path: "tasks\\arrays\\task-supported-languages_arrays_includes",
    title: "Поддерживаемые языки",
    description: "Сайт поддерживает несколько языков. Эти языки находятся в массиве:\r\n\r\n```javascript\r\nconst supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'ja'];\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите утилитарную функцию, которая принимает код языка и возвращает true | false в зависимости от того, поддерживается язык или нет.\r\n\r\nДополнительно:\r\n\r\n* Сделайте то же самое (верните true | false), если языки хранятся в виде объектов:\r\n\r\n```typescript\r\nconst supportedLanguages = [\r\n  { code: 'en' }, \r\n  { code: 'ru' },\r\n  { code: 'de' },\r\n  { code: 'fr' },\r\n  { code: 'es' },\r\n  { code: 'zh' },\r\n  { code: 'ja' }\r\n];\r\n```\r\n\r\n",
    template: ``,
    solution: `const supportedLanguages = ['en', 'ru', 'de', 'fr', 'es', 'zh', 'ja'];

// Решение для обычного массива
function isLangSupported(langCode) {
  return supportedLanguages.includes(langCode);
}

// Решение для объектов
function isLangSupported(langCode) {
  return supportedLanguages.some(lang => lang.code === langCode);
}

console.log(isLangSupported('ru'));
console.log(isLangSupported('foobar'));`,
    categories: ['arrays'],
    tags: ['includes', 'some', 'синтаксис', 'легко', 'массивы', 'array']
  },
  {
    id: "94b6a5fc5aa16ec7",
    name: "task-weekly-food-list_arrays_flat_flatMap",
    path: "tasks\\arrays\\task-weekly-food-list_arrays_flat_flatMap",
    title: "Список продуктов на неделю",
    description: "Ваша жена составила список продуктов на неделю в мобильном приложении, а после обновления оно сломалось. Остался только файл с данными вот в таком виде:\r\n\r\n```javascript\r\nconst weeklyPurchases = [\r\n  // Понедельник\r\n  [\r\n    [\"Молоко\", \"Кефир\"],          // Напитки\r\n    [\"Яблоки\", \"Бананы\"],         // Фрукты\r\n    [\"Рис\", \"Гречка\"]             // Крупы\r\n  ],\r\n  // Вторник\r\n  [\r\n    [\"Кофе\", \"Чай\"],              // Напитки\r\n    [\"Груши\", \"Апельсины\"],       // Фрукты\r\n    [\"Соль\", \"Перец\"]             // Приправы\r\n  ],\r\n  // Среда\r\n  [\r\n    [\"Сок\"],                      // Напитки\r\n    [\"Мандарины\"],                // Фрукты\r\n    [\"Овсянка\"]                   // Крупы\r\n  ],\r\n  // Четверг\r\n  [\r\n    [\"Минеральная вода\"],         // Напитки\r\n    [\"Виноград\"],                 // Фрукты\r\n    [\"Горох\", \"Фасоль\"]           // Бобовые\r\n  ],\r\n  // Пятница\r\n  [\r\n    [\"Молоко\"],                   // Напитки\r\n    [\"Ананас\"],                   // Фрукты\r\n    [\"Гречка\", \"Пшено\"]           // Крупы\r\n  ],\r\n  // Суббота\r\n  [\r\n    [\"Компот\"],                   // Напитки\r\n    [\"Персики\"],                  // Фрукты\r\n    [\"Мука\", \"Сахар\"]             // Бакалея\r\n  ],\r\n  // Воскресенье\r\n  [\r\n    [\"Квас\"],                     // Напитки\r\n    [\"Арбуз\"],                    // Фрукты\r\n    [\"Макароны\"]                  // Бакалея\r\n  ]\r\n];\r\n\r\n\r\nconst daysMapper = {\r\n  0: 'Понедельник',\r\n  1: 'Вторник',\r\n  2: 'Среда',\r\n  3: 'Четверг',\r\n  4: 'Пятница',\r\n  5: 'Суббота',\r\n  6: 'Воскресенье'\r\n};\r\n```\r\n\r\nПокупки на каждый день - это массив, где продукты также сгруппированы в массивы по категориям. Судя по всему, позиция в массиве имеет значение - вы заметили, что например напитки всегда в 0 элементе. Одному разработчику известно, зачем он так сделал, но жена попросила вас сделать следующее:\r\n\r\n### Задача\r\n\r\n* Сделай так, чтобы продукты на каждый день были вот в таком виде: \"Понедельник: Молоко, Кефир, Яблоки, Бананы, Рис, Гречка\", чтобы я могла видеть, что запланировала купить в какой день.\r\n\r\n* Сделай список всех покупок за неделю просто единым списком \"Яблоки, Груши\". И чтобы дублей не было.\r\n\r\n* А, и еще отдельно сделай список купленных напитков за всю неделю.",
    template: ``,
    solution: `const byDays = weeklyPurchases.map((purchase, i) => \`\${daysMapper[i]}: \` + purchase.flat().join(', '));
byDays.forEach(d => console.log(d));

const weekTotal = [...new Set(weeklyPurchases.flat(Infinity))].join(', ');
console.log(weekTotal);

const beverages = weeklyPurchases.flatMap(purchase => purchase[0]).join(', ');
console.log(\`Напитки: \${beverages}\`);`,
    categories: ['arrays'],
    tags: ['flat', 'flatMap', 'массивы', 'array']
  },
  {
    id: "769467c9abc72b09",
    name: "task-fetch-basics_fetch_json_ok_status",
    path: "tasks\\browser-api\\http\\task-fetch-basics_fetch_json_ok_status",
    title: "Запрос данных и обработка результата",
    description: "У вас есть массив url:\r\n\r\n```javascript\r\nconst urls = [\r\n  'https://jsonplaceholder.typicode.com/posts',\r\n  'https://jsonplaceholder.typicode.com/postz',\r\n  'https://jsonplaceholder.typikode.com/'\r\n];\r\n```\r\n\r\nПервый - корректный, возвращает массив ответов такого вида:\r\n\r\n```javascript\r\n{\r\n  id: 1,\r\n  title: '...',\r\n  body: '...',\r\n  userId: 1\r\n}\r\n```\r\n\r\nвторой содержит ссылку на ресурс, которого нет на сервере, а третий это не существующий сервер.\r\n\r\n### Задача\r\n\r\n- Напишите реализацию функции и предусмотрите такие случаи:\r\n  \r\n  - Если сервер вернул ответ, попробуйте преобразовать его в json.\r\n    \r\n    - Если удалось, выведите заголовок первого поста в консоль.\r\n    \r\n    - Если не удалось, выведите сообщение 'Ошибка парсинга JSON.'\r\n  \r\n  - Если невозможно выполнить запрос, выведите сообщение 'Ошибка сети.'\r\n  \r\n  - Если запрос технически выполнился, но сервер не вернул данные, выведите общее сообщение 'Не удалось выполнить запрос.', а для случая 404 ошибки выведите дополнительно 'Ресурс не найден.'",
    template: `const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/postz',  // 404
  'https://jsonplaceholder.typikode.com/'        // Исключение от fetch
];

async function processUrls(url) {
  // Ваше решение
}

urls.forEach(url => processUrls(url));`,
    solution: `async function processUrls(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log('Не удалось выполнить запрос.');
      if (response.status === 404) {
        console.log('Ресурс не найден.');
      }
      return;
    }
    
    const result = await response.json();
    console.log(result[0].title);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('Ошибка сети.');
    }
    if (error instanceof SyntaxError) {
      console.log('Ошибка парсинга JSON.');
    }
  }
}`,
    categories: ['browser-api', 'http'],
    tags: ['fetch', 'fetch-status', 'fetch-ok', 'TypeError', 'SyntaxError', 'http']
  },
  {
    id: "31659cd47a27115a",
    name: "task-fetch-with-query-string_URL_URLSearchParams",
    path: "tasks\\browser-api\\http\\task-fetch-with-query-string_URL_URLSearchParams",
    title: "Формирование query string для url",
    description: "Эндпоинт `https://jsonplaceholder.typicode.com/posts`, возвращает массив таких объектов:\r\n\r\n```javascript\r\n{\r\n  userId,\r\n  id,\r\n  title,\r\n  body\r\n}\r\n```\r\n\r\nЭндпоинт поддерживает пагинацию через строку запроса, параметры `_page` и `_limit`, оба - целые числа.\r\n\r\n### Задача\r\n\r\n* Написать функцию, которая принимает эти параметры, делает запрос на сервер и выводит заголовки постов в консоль.\r\n\r\n### Уточнения\r\n\r\nЗадача на умение разными способами добавлять query string к url. Внимание акцентировать именно на этом, а не на обработке возможных ошибок и т.д.",
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
    categories: ['browser-api', 'http'],
    tags: ['url', 'urlsearchparams', 'http']
  },
  {
    id: "3577f570e1da433a",
    name: "task-classic-simple-debounce-user-input_setTimeout_clearTimeout",
    path: "tasks\\browser-api\\task-classic-simple-debounce-user-input_setTimeout_clearTimeout",
    title: "Дебаунс простой",
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

const debouncedSearch = debounce(goSearch, 1500);
userInput.addEventListener('input', (event) => debouncedSearch(event.target.value));

function goSearch(value) {
  console.log(\`Запрос поиска на сервер: \${value}\`)
}

function debounce(fn, delayMs) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delayMs);
  }
}`,
    categories: ['browser-api'],
    tags: ['debounce', 'setTimeout', 'clearTimeout']
  },
  {
    id: "b9bd1b052198a96c",
    name: "task-greet-user-refactoring",
    path: "tasks\\javascript\\destruction\\task-greet-user-refactoring",
    title: "Рефакторинг функции приветствия",
    description: "Вам на почту пришло задание от тимлида. В письме он просит вас отрефакторить вот эту функцию:\r\n\r\n```javascript\r\nfunction greetUser(userCorporateProfile) {\r\n  return `Hello, ${userCorporateProfile.firstname} ${userCorporateProfile.lastname}!`;\r\n}\r\n```\r\n\r\nЕму не нравятся эти избыточные обращения через точку, надо как-то сократить, не меняя само название параметра.\r\n\r\nЗадание:\r\n\r\n* Пожелания от тимлида: \"вынеси эти поля в отдельные переменные с такими же названиями\".\r\n* UPD. После первого рефакторинга тимлиду теперь кажется, что имена переменных душные. \"Пусть будет просто name и surname\" - написал он.\r\n* UPD. \"Они там с ума сошли. Теперь пользователь может быть без имени и фамилии. Сделай на этот случай какие-нибудь заглушки вместо значений. Например, 'dear' и 'user'\".\r\n* UPD. \"Они поменяли формат данных. Теперь объект пользователя выглядит вот так (плюс учти, что personality вообще могут не передать, надо чтобы программа не падала при этом):\"\r\n\r\n```javascript\r\nconst user = {\r\n  personality: {\r\n    firstname: 'Dave',\r\n    lastname: 'Hoff',\r\n  },\r\n  department: 'development'\r\n}\r\n```\r\n\r\n* UPD. \"Я ушиб палец и пока он заживает, мне трудно печатать. Я уже объявил переменные, которые я могу набирать одной рукой, а ты положи в них данные\":\r\n\r\n```javascript\r\nfunction greetUser(userCorporateProfile) {\r\n  let fn, ln;\r\n  // Положи firstname и lastname в мои переменные\r\n  return `Hello, ${fn} ${ln}!`;\r\n}\r\n```\r\n\r\n* UPD. \"Они напихали в объект еще всякой ерунды. Пока она нам не нужна, но кто знает, что будет дальше? Так что собери все неиспользуемые поля в отдельный объект и пусть там валяются.\"\r\n\r\n```javascript\r\nconst user = {\r\n  personality: {\r\n    firstname: 'Dave',\r\n    lastname: 'Hoff',\r\n  },\r\n  department: 'development',\r\n  zodiac: 'Aquarius',\r\n  allergy: ['fish', 'milk'],\r\n  likeThisMusic: ['jazz', 'classic']\r\n}\r\n```\r\n\r\n* UPD. \"Я вижу ты неплох в деструктуризации. Напиши мне функцию printCustomFieldValue(user, prop), в которую я смогу передать объект юзера и поле. Функция должна печатать в консоль значение этого поля. Значение извлеки через деструктуризацию, раз уж она тебе так нравится\".",
    template: `function greetUser(userCorporateProfile) {
  return \`Hello, \${userCorporateProfile.firstname} \${userCorporateProfile.lastname}!\`;
}

const user = {
  firstname: 'Dave',
  lastname: 'Hoff',
  department: 'development'
}

console.log(greetUser(user));`,
    solution: `// Пожелание 1: поля в переменные с такими же названиями
function greetUser(userCorporateProfile) {
  const { firstname, lastname } = userCorporateProfile;
  return \`Hello, \${firstname} \${lastname}!\`;
}

// Пожелание 2: поля в переменные с другими именами
function greetUser(userCorporateProfile) {
  const { firstname: name, lastname: surname } = userCorporateProfile;
  return \`Hello, \${name} \${surname}!\`;
}

// Пожелание 3: когда имя и фамилия не заданы
function greetUser(userCorporateProfile) {
  const { firstname: name = 'dear', lastname: surname = 'user' } = userCorporateProfile;
  return \`Hello, \${name} \${surname}!\`;
}

// Пожелание 4: изменили структуру исходного объекта, теперь поля вложены
function greetUser(userCorporateProfile) {
  const { 
    personality: {
      firstname: name = 'dear', 
      lastname: surname = 'user' 
    } = {}
  } = userCorporateProfile;
  return \`Hello, \${name} \${surname}!\`;
}

// Пожелание 5: деструктурировать в заранее объявленные переменные
function greetUser(userCorporateProfile) {
  let fn, ln;
  ({ 
    personality: {
      firstname: fn = 'dear', 
      lastname: ln = 'user' 
    } = {}
  } = userCorporateProfile);
  return \`Hello, \${fn} \${ln}!\`;
}

// Пожелание 6: собрать все не нужные пока что поля в отдельный объект
function greetUser(userCorporateProfile) {
  const { 
    personality: {
      firstname: fn = 'dear', 
      lastname: ln = 'user' 
    } = {},
    ...noNeed
  } = userCorporateProfile;
  return \`Hello, \${fn} \${ln}!\`;
}

// Пожелание 7: функция распечатки указанного свойства
function printCustomFieldValue(user, prop) {
  const { [prop]: result } = user;
  console.log(result);
}`,
    categories: ['javascript', 'destruction'],
    tags: ['деструктуризация объектов', 'деструктуризация', 'деструктурирующее присваивание', 'javascript']
  },
  {
    id: "d02b43377ef95f59",
    name: "task-make-your-own-exception",
    path: "tasks\\javascript\\exceptions\\task-make-your-own-exception",
    title: "Обработка деления на ноль",
    description: "У вас есть функция деления одного числа на другое:\r\n\r\n```javascript\r\nfunction divide(a, b) {\r\n  return a / b;\r\n}\r\n\r\nconst result = divide(10, 5);\r\nconsole.log(result);\r\n```\r\n\r\nСейчас она не предусматривает обработку деления на ноль.\r\n\r\nЗадача:\r\n\r\n* Создайте собственное исключение DivisionByZeroError.\r\n  * Текст ошибки по умолчанию поставьте \"Деление на ноль запрещено\".\r\n* Доработайте функцию divide, чтобы она выбрасывала это исключение.\r\n* Добавьте обработку исключения в месте вызова функции.\r\n  * Убедитесь, что пойманное исключение - именно DivisionByZeroError, и только тогда выведите сообщение исключения в консоль.",
    template: ``,
    solution: `class DivisionByZeroError extends Error {
  constructor(message = 'Деление на ноль запрещено.') {
    super(message);
    this.name = 'DivisionByZeroError';
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new DivisionByZeroError();
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.log(error.message);
  }
}`,
    categories: ['javascript', 'exceptions'],
    tags: ['синтаксис', 'легко', 'exceptions', 'исключения', 'javascript']
  },
  {
    id: "5a04d9100cf98f75",
    name: "task-count-visitors",
    path: "tasks\\javascript\\map\\task-count-visitors",
    title: "Подсчет количества авторизаций",
    description: "У вас есть массив с информацией об авторизации пользователей на этой неделе:\r\n\r\n```javascript\r\nconst visitors = [\r\n  { username: \"alice\", time: \"2023-05-10 09:15:23\" },\r\n  { username: \"bob\", time: \"2023-05-10 10:02:45\" },\r\n  { username: \"mike\", time: \"2023-05-10 11:34:01\" },\r\n  { username: \"alice\", time: \"2023-05-10 13:22:19\" },\r\n  { username: \"dave\", time: \"2023-05-10 14:08:33\" },\r\n  { username: \"alice\", time: \"2023-05-11 08:45:11\" },\r\n  { username: \"bob\", time: \"2023-05-11 09:01:07\" },\r\n  { username: \"lisa\", time: \"2023-05-11 10:30:45\" },\r\n  { username: \"mike\", time: \"2023-05-11 12:15:02\" },\r\n  { username: \"dave\", time: \"2023-05-11 13:05:58\" },\r\n  { username: \"alice\", time: \"2023-05-12 09:45:21\" },\r\n  { username: \"bob\", time: \"2023-05-12 10:22:10\" },\r\n  { username: \"lisa\", time: \"2023-05-12 11:11:11\" },\r\n  { username: \"mike\", time: \"2023-05-12 14:30:00\" },\r\n  { username: \"eva\", time: \"2023-05-12 15:00:44\" },\r\n  { username: \"eva\", time: \"2023-05-13 08:30:15\" },\r\n  { username: \"lisa\", time: \"2023-05-13 09:45:33\" },\r\n  { username: \"alice\", time: \"2023-05-13 10:20:05\" },\r\n  { username: \"bob\", time: \"2023-05-13 11:10:10\" },\r\n  { username: \"dave\", time: \"2023-05-13 12:00:00\" }\r\n];\r\n```\r\n\r\nЗадача:\r\n\r\n* Посчитать, сколько раз каждый пользователь авторизовался. Время не учитывать, просто сколько раз он залогинился.\r\n* Сделать с помощью Map.\r\n* Вывести результат в консоль двумя способами: через метод forEach и через цикл for.\r\n  * Формат вывода \"пользователь: N раз\"\r\n* В самом конце вывести, сколько всего уникальных пользователей авторизовались.",
    template: `const visitors = [
  { username: "alice", time: "2023-05-10 09:15:23" },
  { username: "bob", time: "2023-05-10 10:02:45" },
  { username: "mike", time: "2023-05-10 11:34:01" },
  { username: "alice", time: "2023-05-10 13:22:19" },
  { username: "dave", time: "2023-05-10 14:08:33" },
  { username: "alice", time: "2023-05-11 08:45:11" },
  { username: "bob", time: "2023-05-11 09:01:07" },
  { username: "lisa", time: "2023-05-11 10:30:45" },
  { username: "mike", time: "2023-05-11 12:15:02" },
  { username: "dave", time: "2023-05-11 13:05:58" },
  { username: "alice", time: "2023-05-12 09:45:21" },
  { username: "bob", time: "2023-05-12 10:22:10" },
  { username: "lisa", time: "2023-05-12 11:11:11" },
  { username: "mike", time: "2023-05-12 14:30:00" },
  { username: "eva", time: "2023-05-12 15:00:44" },
  { username: "eva", time: "2023-05-13 08:30:15" },
  { username: "lisa", time: "2023-05-13 09:45:33" },
  { username: "alice", time: "2023-05-13 10:20:05" },
  { username: "bob", time: "2023-05-13 11:10:10" },
  { username: "dave", time: "2023-05-13 12:00:00" }
];

function forEachShow(stat) {
  console.log('forEach статистика авторизаций:');
  // Выведите статистику
}

function forShow(stat) {
  console.log('for статистика авторизаций:');
  // Выведите статистику
}

forEachShow(stat);
forShow(stat);
console.log('Всего авторизовались разных пользователей: ' + // число);`,
    solution: `// Решение 1
const stat = visitors.reduce((visitStat, login) => {
  const { username } = login;
  if (visitStat.has(username)) {
    visitStat.set(username, visitStat.get(username) + 1);
  } else {
    visitStat.set(username, 1);
  }
  return visitStat;
}, new Map());

// Решение 2
const stat = visitors.reduce(
  (visitStat, login) => visitStat.set(login.username, visitStat.has(login.username) ? visitStat.get(login.username) + 1 : 1),
  new Map()
);

function forEachShow(stat) {
  console.log('forEach статистика авторизаций:');
  stat.forEach((value, key) => console.log(\`\${key}: \${value} раз.\`));
}

function forShow(stat) {
  console.log('for статистика авторизаций:');
  for (const [key, value] of stat) {
    console.log(\`\${key}: \${value} раз.\`);
  }
}

forEachShow(stat);
forShow(stat);
console.log(\`Всего авторизовались \${stat.size} разных пользователей.\`);`,
    categories: ['javascript', 'map'],
    tags: ['map', 'reduce', 'синтаксис', 'легко', 'forEach', 'for-of', 'javascript']
  },
  {
    id: "4443f047cf7ff9d2",
    name: "task-customer-check-payment_trunc",
    path: "tasks\\javascript\\math\\task-customer-check-payment_trunc",
    title: "Стоимость покупки в пользу покупателя",
    description: "У вас есть массив с продуктами, приобретенными покупателем в магазине:\r\n\r\n```javascript\r\nconst cart = [\r\n  { name: \"Молоко 1л\", price: 89.90, quantity: 2 },       // 2 упаковки\r\n  { name: \"Хлеб ржаной\", price: 45.30, quantity: 1 },     // 1 буханка\r\n  { name: \"Яйца (1уп)\", price: 129.99, quantity: 1 },     // 1 упаковка\r\n  { name: \"Яблоки (1кг)\", price: 85.15, quantity: 1.5 },  // 1.5 кг (весовой товар)\r\n  { name: \"Сыр (100г)\", price: 69.50, quantity: 3 }       // 3 упаковки\r\n];\r\n// 688р.\r\n```\r\n\r\nВ магазине действует правило округления цены в пользу покупателя - копейки отбрасываются. Т.е. если цена товара 75.99, то покупатель платит 75 руб. Округление происходит для каждого товара после умножения на количество приобретенных единиц товара.\r\n\r\nЗадача:\r\n\r\n* Посчитайте стоимость покупки с учетом действующего в магазине правила.",
    template: ``,
    solution: `function totalPrice(cart) {
  return cart.reduce((total, product) => total += Math.trunc(product.price * product.quantity), 0);
}

console.log(\`К оплате: \${totalPrice(cart)} руб.\`);`,
    categories: ['javascript', 'math'],
    tags: ['trunc', 'reduce', 'math', 'javascript']
  },
  {
    id: "199cba6650eb00f6",
    name: "task-data-pages",
    path: "tasks\\javascript\\math\\task-data-pages",
    title: "Количество страниц в пагинаторе",
    description: "У вас есть общее количество постов в блоге и настройка, сколько постов должно быть на одной странице:\r\n\r\n```typescript\r\nconst totalPosts = 12;\r\nconst postsPerPage = 5;\r\n```\r\n\r\nЗадача:\r\n\r\n* Посчитать, сколько страниц должно быть в пагинаторе.",
    template: ``,
    solution: `const pages = Math.ceil(totalPosts / postsPerPage);
console.log(pages);`,
    categories: ['javascript', 'math'],
    tags: ['ceil', 'math', 'javascript']
  },
  {
    id: "2bdd7da4fa8aba52",
    name: "task-generate-random-numbers",
    path: "tasks\\javascript\\math\\task-generate-random-numbers",
    title: "Генератор случайных чисел",
    description: "Задача:\r\n\r\n* Сгенерируйте случайное число от 0 до 100 (включительно).\r\n* Сгенерируйте случайное число от 30 до 100 (включительно).",
    template: ``,
    solution: `// [0 - 100]
const num = Math.floor(Math.random() * 101);

// [30 - 100]
const num = Math.floor(Math.random() * 71) + 30;`,
    categories: ['javascript', 'math'],
    tags: ['random', 'floor', 'math', 'javascript']
  },
  {
    id: "0a5d35f166b3391e",
    name: "task-get-exchange-stat",
    path: "tasks\\javascript\\math\\task-get-exchange-stat",
    title: "Статистика курса валют",
    description: "У вас есть массив, содержащий курс доллара к рублю за последние 7 дней:\r\n\r\n```typescript\r\nconst exchangeRates = [75.3, 76.1, 74.9, 77.5, 76.8, 75.7, 78.2];\r\n```\r\n\r\nЗадача:\r\n\r\n* Найти минимальный и максимальный курс за эту неделю.",
    template: ``,
    solution: `const exchangeRates = [75.3, 76.1, 74.9, 77.5, 76.8, 75.7, 78.2];

const minRate = Math.min(...exchangeRates);
const maxRate = Math.max(...exchangeRates);

console.log(\`Минимальный курс: \${minRate}\`);
console.log(\`Максимальный курс: \${maxRate}\`);`,
    categories: ['javascript', 'math'],
    tags: ['min', 'max', 'math', 'javascript']
  },
  {
    id: "101fea1c0ac3ecdd",
    name: "task-movie-avg-rating",
    path: "tasks\\javascript\\math\\task-movie-avg-rating",
    title: "",
    description: "У вас есть массив с оценками зрителей для фильма. Вы скачали плагин, который рисует звездочки и хотите с его помощью наглядно отобразить рейтинг фильма. Плагин принимает целое число.\r\n\r\nЗадача:\r\n\r\n* Напишите реализацию для функции calculateAverageRating, которая рассчитывает средний рейтинг фильма по стандартным математическим правилам. Итоговый рейтинг - целое число.\r\n* Автор плагина доработал его и теперь плагин может отображать не только целые звезды, но и частично заполненные.\r\n  * Перепишите функцию, чтобы она возвращала рейтинг с точностью до 2х знаков после запятой.",
    template: `const audienceRatings = [8, 7, 9, 6, 8, 10, 7];

const rating = calculateAverageRating(audienceRatings)
console.log(\`Рейтинг фильма: \${rating}\`);


function calculateAverageRating(ratings) {
  // Рассчитайте рейтинг
}`,
    solution: `const audienceRatings = [8, 7, 9, 6, 8, 10, 7];

const rating = calculateAverageRating(audienceRatings)
console.log(\`Рейтинг фильма: \${rating}\`);

// Решение 1
function calculateAverageRating(ratings) {
  return Math.round(ratings.reduce((sum, rate) => sum + rate, 0) / ratings.length);
}

// Решение 2
function calculateAverageRating(ratings) {
  const deci = ratings.reduce((sum, rate) => sum + rate, 0) / ratings.length;
  return Math.round(deci * 100) / 100;
}`,
    categories: ['javascript', 'math'],
    tags: ['math', 'javascript']
  },
  {
    id: "fc14891cf61349dc",
    name: "task-client-orders",
    path: "tasks\\javascript\\other\\task-client-orders",
    title: "Заказы клиентов на складах",
    description: "У вас есть мапа с заказами клиентов. Ключ - это id заказа. Значение - объект с именем и почтой клиента:\r\n\r\n```javascript\r\nconst orders = new Map([\r\n  [\"AA-XK5GT\", { name: 'John Doe', email: 'john.doe@example.com' }],\r\n  [\"BB-YHF8N\", { name: 'Jane Smith', email: 'jane.smith@example.com' }],\r\n  [\"AA-UQZ9W\", { name: 'Michael Johnson', email: 'michael.johnson@example.com' }],\r\n  [\"AA-PKV2R\", { name: 'Emma Williams', email: 'emma.williams@example.com' }],\r\n  [\"BB-JTM6P\", { name: 'David Brown', email: 'david.brown@example.com' }],\r\n  [\"AA-LNH3D\", { name: 'Sarah Davis', email: 'sarah.davis@example.com' }],\r\n  [\"AA-CWX7F\", { name: 'William Miller', email: 'william.miller@example.com' }],\r\n  [\"BB-RTS4B\", { name: 'Olivia Taylor', email: 'olivia.taylor@example.com' }],\r\n  [\"CC-VGH1E\", { name: 'James Anderson', email: 'james.anderson@example.com' }],\r\n  [\"AA-NMZ9Q\", { name: 'Ava Wilson', email: 'ava.wilson@example.com' }],\r\n  [\"BB-XD5JP\", { name: 'John Doe', email: 'john.doe@example.com' }], // Повторный заказ от John Doe (склад BB)\r\n  [\"CC-UYT2W\", { name: 'David Brown', email: 'david.brown@example.com' }]  // Повторный заказ от David Brown (склад CC)\r\n]);\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите реализацию для функции, которая возвращает массив с id заказов, сделанных указанным клиентом.\r\n* Напишите реализацию для функции, которая возвращает число заказов, сделанных указанным клиентом.\r\n* Напишите реализацию функции, которая возвращает число заказов, находящихся на указанном складе.",
    template: `const orders = new Map([
  ["AA-XK5GT", { name: 'John Doe', email: 'john.doe@example.com' }],
  ["BB-YHF8N", { name: 'Jane Smith', email: 'jane.smith@example.com' }],
  ["AA-UQZ9W", { name: 'Michael Johnson', email: 'michael.johnson@example.com' }],
  ["AA-PKV2R", { name: 'Emma Williams', email: 'emma.williams@example.com' }],
  ["BB-JTM6P", { name: 'David Brown', email: 'david.brown@example.com' }],
  ["AA-LNH3D", { name: 'Sarah Davis', email: 'sarah.davis@example.com' }],
  ["AA-CWX7F", { name: 'William Miller', email: 'william.miller@example.com' }],
  ["BB-RTS4B", { name: 'Olivia Taylor', email: 'olivia.taylor@example.com' }],
  ["CC-VGH1E", { name: 'James Anderson', email: 'james.anderson@example.com' }],
  ["AA-NMZ9Q", { name: 'Ava Wilson', email: 'ava.wilson@example.com' }],
  ["BB-XD5JP", { name: 'John Doe', email: 'john.doe@example.com' }], // Повторный заказ от John Doe (склад BB)
  ["CC-UYT2W", { name: 'David Brown', email: 'david.brown@example.com' }]  // Повторный заказ от David Brown (склад CC)
]);

// Выдать все заказы клиента
function getAllClientOrders(email, orders) {
  // Реализация
}

// Сколько заказов сделал указанный клиент
function getClientOrdersCount(email, orders) {
  // Реализация
}

// Сколько заказов лежат на указанном складе
function getOrdersCountAsWarehouse(warehouseCode, orders) {
  // Реализация
}

let email = 'david.brown@example.com';
const clientOrders = getAllClientOrders(email, orders);
console.log(\`Все заказы клиента \${email}:\`);
clientOrders.forEach(order => console.log(order));

email = 'john.doe@example.com';
const clientOrdersCount = getClientOrdersCount(email, orders);
console.log(\`Клиент \${email} сделал \${clientOrdersCount} заказов.\`);

const warehouseCode = 'AA';
const ordersCountAtWarehouse = getOrdersCountAsWarehouse(warehouseCode, orders);
console.log(\`На складе \${warehouseCode} лежит \${ordersCountAtWarehouse} заказов.\`);`,
    solution: `// Выдать все заказы клиента
function getAllClientOrders(email, orders) {
  const orderIds = [];
  for (const [orderId, client] of orders.entries()) {
    if (client.email === email) {
      orderIds.push(orderId);
    }
  }
  return orderIds;
}

// Сколько заказов сделал указанный клиент
function getClientOrdersCount(email, orders) {
  let count = 0;
  for (const order of orders.values()) {
    if (order.email === email) {
      count++;
    }
  }
  return count;
}

// Сколько заказов лежат на указанном складе
function getOrdersCountAsWarehouse(warehouseCode, orders) {
  let count = 0;
  for (const orderId of orders.keys()) {
    if (orderId.startsWith(warehouseCode)) {
      count++;
    }
  }
  return count;
}`,
    categories: ['javascript', 'other'],
    tags: ['Map', 'keys', 'values', 'entries', 'javascript']
  },
  {
    id: "e924fc6b53e8b7ff",
    name: "task-promocodes",
    path: "tasks\\javascript\\set\\task-promocodes",
    title: "Промокоды для главного менеджера",
    description: "Вы получили от коллег-менеджеров промокоды, подготовленные ими для клиентов. Вам нужно добавить к ним свой промокод 'CHRISTMAS2000' и передать список промокодов главному менеджеру. Но вы обнаружили, что ваши коллеги использовали одинаковые промокоды, что является ошибкой. \r\n\r\nПоскольку вы планируете перейти в разработчики, то решаете применить свои навыки программирования, чтобы исправить ошибки коллег и самому не допустить такую же ошибку.\r\n\r\nФормат исходных данных:\r\n\r\n```javascript\r\nconst dave = [\r\n  { code: 'SUMMER25', manager: 'Dave' },\r\n  { code: 'WELCOME10', manager: 'Dave' },\r\n  { code: 'FRIEND15', manager: 'Dave' }\r\n];\r\n\r\nconst mary = [\r\n  { code: 'WELCOME10', manager: 'Mary' },  // Дубликат кода!\r\n  { code: 'NEWYEAR30', manager: 'Mary' }\r\n];\r\n\r\nconst ann = [\r\n  { code: 'FRIEND15', manager: 'Ann' },   // Дубликат кода!\r\n  { code: 'HOLIDAY50', manager: 'Ann' }\r\n];\r\n```\r\n\r\nЗадача:\r\n\r\n* Объедините результаты работы ваших коллег, так, чтобы не было дублей промокодов.\r\n* Добавьте свой промокод в общий список, чтобы не повторить ошибку коллег.\r\n* Узнайте, сколько промокодов у вас получилось в итоге и выведите их в консоль.\r\n  * P.S. В последний момент вам позвонил коллега и попросил удалить промокод NEWYEAR30, если вы конечно еще не отправили их.\r\n* Главный менеджер привык получать письмо с промокодами в виде строки \"Промокоды на завтра (всего N): тут-промокоды-через-запятую\".\r\n\r\n",
    template: ``,
    solution: `const promos = new Set([...dave, ...mary, ...ann].map(promo => promo.code));
const myCode = 'CHRISTMAS2000';
if (!promos.has(myCode))
  promos.add(myCode);

promos.delete('NEWYEAR30');
promos.forEach(promo => console.log(promo));
console.log(\`Промокоды на завтра (всего \${promos.size}): \${[...promos].join(', ')}\`);`,
    categories: ['javascript', 'set'],
    tags: ['синтаксис', 'легко', 'set', 'javascript']
  },
  {
    id: "0baac5a5952f2398",
    name: "task-rifleman-creed-cleansing_trim_trimStart_trimEnd",
    path: "tasks\\javascript\\strings\\task-rifleman-creed-cleansing_trim_trimStart_trimEnd",
    title: "Кредо стрелка",
    description: "Дан текст:\r\n\r\n```javascript\r\n'   This is my rifle, this is my gun. This is for fighting, this is for fun.   '\r\n```\r\n\r\nЗадача:\r\n\r\n* Посчитать количество:\r\n  * Предложений.\r\n    * Предложения разделяются точкой.\r\n  * Символов.\r\n* Напечатать первое слово.\r\n* Пробелы в начале и конце строки игнорировать.\r\n  * Сначала удалите лишние пробелы спереди строки.\r\n  * Потом удалите лишние пробелы сзади строки.\r\n  * Сделайте это сначала отдельными шагами, а потом одним.",
    template: ``,
    solution: `const text = '   This is my rifle, this is my gun. This is for fighting, this is for fun.   ';

let cleaned = text.trimStart();
cleaned = cleaned.trimEnd();
const sentenses = cleaned.split('. ').length;
const chars = cleaned.split('').length;
const firstWord = cleaned.split(' ')[0];

console.log(\`В тексте \${sentenses} предложений и \${chars} символов. Первое слово: \${firstWord}\`);`,
    categories: ['javascript', 'strings'],
    tags: ['split', 'trim', 'trimStart', 'trimEnd', 'строки', 'string', 'методы строк', 'javascript']
  },
  {
    id: "a854d7176d8c818e",
    name: "task-day-codes_switch",
    path: "tasks\\javascript\\syntax\\task-day-codes_switch",
    title: "Название дней недели по кодам",
    description: "Задача:\r\n\r\n* Напишите функцию getFullDayName, которая получает код дня недели и возвращает полное название дня.\r\n* Доступные коды - Пн, Вт, Ср, Чт, Пт, Сб, Вс.\r\n* Если передан несуществующий код, функция выбрасывает исключение.\r\n\r\nПожелания:\r\n\r\n* Сделайте два решения:\r\n  * Через switch.\r\n  * Через объект-маппер.",
    template: `// Решение через switch
function getFullDayName(shortCode) {
  // Ваше решение
}

// Решение через объект-маппер
function getFullDayName(shortCode) {
  // Ваше решение
}

console.log(getFullDayName('Пт'));`,
    solution: `// Решение через switch
function getFullDayName(shortCode) {
  let dayName;
  switch (shortCode) {
    case 'Пн':
      dayName = 'Понедельник';
      break;
    case 'Вт':
      dayName = 'Вторник';
      break;
    case 'Ср':
      dayName = 'Среда';
      break;
    case 'Чт':
      dayName = 'Четверг';
      break;
    case 'Пт':
      dayName = 'Пятница';
      break;
    case 'Сб':
      dayName = 'Суббота';
      break;
    case 'Вс':
      dayName = 'Воскресенье';
      break;
    default:
      throw new Error(\`Передан несуществующий код дня: \${shortCode}\`);
  }
  return dayName;
}

// Решение через объект-маппер
function getFullDayName(shortCode) {
  const mapper = {
    'Пн': 'Понедельник',
    'Вт': 'Вторник',
    'Ср': 'Среда',
    'Чт': 'Четверг',
    'Пт': 'Пятница',
    'Сб': 'Суббота',
    'Вс': 'Воскресенье'
  };
  if (shortCode in mapper) {
    return mapper[shortCode];
  }
  throw new Error(\`Передан несуществующий код дня: \${shortCode}\`);
}

console.log(getFullDayName('Пт'));`,
    categories: ['javascript', 'syntax'],
    tags: ['switch', 'синтаксис', 'javascript']
  },
  {
    id: "6a83125d757259f9",
    name: "task-employees-messed-info_rest_array_items",
    path: "tasks\\javascript\\syntax\\task-employees-messed-info_rest_array_items",
    title: "Перепутанная информация о сотрудниках",
    description: "У вас есть массив с информацией о сотрудниках:\r\n\r\n```javascript\r\nconst employees = [\r\n  ['EMP-001', 'David', 'Jones', 'Senior Developer', 'internal:1234', 'david.j@company.com', 'home:NYC', 'skype:david-jones'],\r\n  ['BADGE-002', 'Sarah', 'Smith', 'Content Manager', 'sarah.s@company.com', 'remote', 'internal:5678', 'home:Boston'],\r\n  ['ID-789', 'Michael', 'Brown', 'HR Lead', 'full-time', 'michael.b@company.com', 'home:Chicago', 'internal:9012', '5 years exp'],\r\n  ['CARD-XYZ', 'Emily', 'Davis', 'Junior Dev', 'intern', 'emily.d@company.com', 'internal:3456'],\r\n  ['PASS-123', 'James', 'Wilson', 'Accountant', 'james.w@company.com', 'part-time', 'cpa', 'home:Seattle', 'internal:7890'],\r\n  ['TOKEN-456', 'Lisa', 'Taylor', 'Team Lead', '24/7', 'lisa.t@company.com', 'internal:1234', 'emergency:555-1234']\r\n];\r\n```\r\n\r\nПроблема в том, что только первые четыре поля имеют четкую структуру: модель доступа, имя, фамилия, должность. Остальная информация перепуталась и данные потеряли порядок.\r\n\r\n### Задача\r\n\r\n* Напишите реализацию функции, чтобы каждый элемент стал объектом с полями firstname, lastname, position, details.\r\n\r\n* Модель доступа пропустите - она не нужна.\r\n\r\n* В details соберите всю перепутанную информацию о сотруднике - ее разберут позже.\r\n\r\nДолжно получиться вот так:\r\n\r\n```javascript\r\n{\r\n  \"firstname\": \"James\",\r\n  \"lastname\": \"Wilson\",\r\n  \"department\": \"Accountant\",\r\n  \"details\": [\r\n    \"james.w@company.com\",\r\n    \"part-time\",\r\n    \"cpa\",\r\n    \"home:Seattle\",\r\n    \"internal:7890\"\r\n  ]\r\n} \r\n```",
    template: `const employees = [
  ['EMP-001', 'David', 'Jones', 'Senior Developer', 'internal:1234', 'david.j@company.com', 'home:NYC', 'skype:david-jones'],
  ['BADGE-002', 'Sarah', 'Smith', 'Content Manager', 'sarah.s@company.com', 'remote', 'internal:5678', 'home:Boston'],
  ['ID-789', 'Michael', 'Brown', 'HR Lead', 'full-time', 'michael.b@company.com', 'home:Chicago', 'internal:9012', '5 years exp'],
  ['CARD-XYZ', 'Emily', 'Davis', 'Junior Dev', 'intern', 'emily.d@company.com', 'internal:3456'],
  ['PASS-123', 'James', 'Wilson', 'Accountant', 'james.w@company.com', 'part-time', 'cpa', 'home:Seattle', 'internal:7890'],
  ['TOKEN-456', 'Lisa', 'Taylor', 'Team Lead', '24/7', 'lisa.t@company.com', 'internal:1234', 'emergency:555-1234']
];

function refine(employees) {
  // Ваше решение
}

const fine = refine(employees);
fine.forEach(emp => console.log(emp));`,
    solution: `function refine(employees) {
  return employees.map(employee => {
    const [_, firstname, lastname, position, ...details] = employee;
    return {
      firstname,
      lastname,
      position,
      details
    };
  );
}`,
    categories: ['javascript', 'syntax'],
    tags: ['...', 'rest', 'синтаксис', 'javascript']
  },
  {
    id: "e15f166ad157b304",
    name: "task-format-order-for-delivery_rest_object_fields",
    path: "tasks\\javascript\\syntax\\task-format-order-for-delivery_rest_object_fields",
    title: "Формат заказа для службы доставки",
    description: "У вас есть объект заказа:\r\n\r\n```javascript\r\nconst order = {\r\n  id: 500,\r\n  customer: {\r\n    name: \"Emily Johnson\",\r\n    email: \"emily.j@example.com\",\r\n    address: \"350 5th Ave, New York, NY 10118, USA\"\r\n  },\r\n  items: [\r\n    \"The Great Gatsby by F. Scott Fitzgerald\",\r\n    \"SanDisk Ultra 128GB USB 3.0 Flash Drive\"\r\n  ],\r\n  discount: 10,\r\n  date: \"2023-05-01\"\r\n};\r\n```\r\n\r\nВам поручили написать функцию, которая трансформирует объект заказа в формат, более удобный для курьера. В нем должны быть поля с именем клиента и адресом, а вся остальная информация - в поле деталей.\r\n\r\n### Задача\r\n\r\n* Модифицируйте функцию так, чтобы возвращала объект в таком виде:\r\n\r\n```javascript\r\n{\r\n  \"name\": \"Emily Johnson\",\r\n  \"address\": \"350 5th Ave, New York, NY 10118, USA\",\r\n  \"details\": {\r\n    \"id\": 500,\r\n    \"items\": [\r\n      \"The Great Gatsby by F. Scott Fitzgerald\",\r\n      \"SanDisk Ultra 128GB USB 3.0 Flash Drive\"\r\n    ],\r\n    \"discount\": 10,\r\n    \"date\": \"2023-05-01\"\r\n  }\r\n} \r\n```",
    template: `const order = {
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

function formatForDelivery(order) {
  // Ваше решение
}

console.log(formatForDelivery(order));`,
    solution: `function formatForDelivery(order) {
  const {
    customer: {
      name, address
    },
    ...details
  } = order;
  return {
    name, address, details
  }
}`,
    categories: ['javascript', 'syntax'],
    tags: ['...', 'rest', 'objects', 'синтаксис', 'javascript']
  },
  {
    id: "d0148c93faa1b0eb",
    name: "task-professor-substitute",
    path: "tasks\\javascript\\syntax\\task-professor-substitute",
    title: "Заместитель профессора",
    description: "В университете есть несколько профессоров:\r\n\r\n```javascript\r\nconst johnSmith = {\r\n  name: 'John Smith',\r\n  colleagues: [\r\n    { name: 'Robert Johnson', phone: '(212) 555-0187' },\r\n    { name: 'Emily Davis', phone: '(310) 555-0142' }\r\n  ]\r\n};\r\n\r\nconst sarahConnor = {\r\n  name: 'Sarah Connor',\r\n  colleagues: [] // Нет заместителя\r\n};\r\n\r\nconst michaelBrown = {\r\n  name: 'Michael Brown',\r\n  // Нет коллег вообще\r\n};\r\n```\r\n\r\nУ них есть список коллег, которые ведут тот же самый предмет. Причем первый коллега в списке считается заместителем профессора. Если какой-то предмет ведет только один профессор, то коллег у него нет.\r\n\r\nЗадача:\r\n\r\n* Верните телефон заместителя каждого профессора.\r\n  * Если заместителя нет, верните надпись \"У имя-профессора нет заместителя\".",
    template: `const johnSmith = {
  name: 'John Smith',
  colleagues: [
    { name: 'Robert Johnson', phone: '(212) 555-0187' },
    { name: 'Emily Davis', phone: '(310) 555-0142' }
  ]
};

const sarahConnor = {
  name: 'Sarah Connor',
  colleagues: [] // Нет заместителя
};

const michaelBrown = {
  name: 'Michael Brown',
  // Нет коллег вообще
};

function getSubstitute(professor) {
  // Верните телефон заместителя
}

console.log(getSubstitute(johnSmith));
console.log(getSubstitute(sarahConnor));
console.log(getSubstitute(michaelBrown));`,
    solution: `const johnSmith = {
  name: 'John Smith',
  colleagues: [
    { name: 'Robert Johnson', phone: '(212) 555-0187' },
    { name: 'Emily Davis', phone: '(310) 555-0142' }
  ]
};

const sarahConnor = {
  name: 'Sarah Connor',
  colleagues: [] // Нет заместителя
};

const michaelBrown = {
  name: 'Michael Brown',
  // Нет коллег вообще
};

function getSubstitute(professor) {
  return professor.colleagues?.[0]?.phone || \`У профессора \${professor.name} нет заместителя.\`;
}

console.log(getSubstitute(johnSmith));
console.log(getSubstitute(sarahConnor));
console.log(getSubstitute(michaelBrown));`,
    categories: ['javascript', 'syntax'],
    tags: ['?.', '||', 'Опциональная цепочка', 'синтаксис', 'javascript']
  },
  {
    id: "85b5b94a0dc6f958",
    name: "task-user-action-details_rest_fn_params",
    path: "tasks\\javascript\\syntax\\task-user-action-details_rest_fn_params",
    title: "Детали действия пользователя",
    description: "У вас есть функция, которая принимает действие пользователя в виде строки (например, 'click').\r\n\r\n### Задача\r\n\r\n* Модифицируйте функцию так, чтобы она могла принимать неограниченное число дополнительных деталей, связанных с действием. Например, точку, в которой произошел клик, кнопку мыши, которой сделан клик и т.д. Количество деталей неизвестно.\r\n\r\n* Внутри функции для отладочных целей выведите в консоль количество полученных деталей и сами детали.\r\n\r\n* Функция должна возвращать объект с двумя полями:\r\n  \r\n  * Действие (string).\r\n  \r\n  * Пачку всех действий.",
    template: `function createUserAction(action) {
  // Ваше решение
}

const action = createUserAction('click', { x: 100, y: 150 }, 'mouse-button-left');`,
    solution: `function createUserAction(action, ...details) {
  console.log(\`Количество деталей: \${details.length}\`);
  details.forEach(detail => console.log(detail));
  return {
    action,
    details
  }
}`,
    categories: ['javascript', 'syntax'],
    tags: ['...', 'rest', 'синтаксис', 'javascript']
  },
  {
    id: "d913f8145b51249f",
    name: "task-dyn-add-field",
    path: "tasks\\objects\\task-dyn-add-field",
    title: "Условное добавление полей в объект",
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
    tags: ['spread-objects', '&&', 'object']
  },
  {
    id: "028fa2478a7ce693",
    name: "task-merge-objects-1_spread_obj",
    path: "tasks\\objects\\task-merge-objects-1_spread_obj",
    title: "Объединение конфигурационных объектов",
    description: "Есть два объекта конфигурации:\r\n\r\n```javascript\r\nconst defaultConfig = {\r\n  cacheTime: 30_000,\r\n  staleTime: 0\r\n}\r\n\r\nconst myConfig = {\r\n  timeout: 1000,\r\n  refetchOnFail: false\r\n}\r\n```\r\n\r\n Задачи:\r\n\r\n* Объединить два конфига в новый.\r\n* Заменить параметр `refetchOnFail` на true.\r\n\r\nДоп. условия:\r\n\r\n* Сначала сделать это за две операции (1 - объединить, 2 - заменить), потом за одну (объединить + заменить).\r\n* Сделать в иммутабельном стиле.",
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
    tags: ['spread-objects', 'object']
  },
  {
    id: "e605a49167ed6568",
    name: "task-dotaters-thanks",
    path: "tasks\\real-tasks\\task-dotaters-thanks",
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
    path: "tasks\\real-tasks\\task-flat-categories",
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
    path: "tasks\\real-tasks\\task-merge-user-info",
    title: "Объединение пользователей из БД и из соцсетей",
    description: "### Вводные\r\n\r\nДаны два массива:\r\n\r\n* Основные пользователи в базе данных:\r\n\r\n```javascript\r\nconst dbUsers = [\r\n  { id: 1, name: \"Alice\", email: \"alice@example.com\" },\r\n  { id: 2, name: \"Bob\", role: \"admin\" },\r\n  { id: 3, name: \"Charlie\" }\r\n];\r\n```\r\n\r\n* И дополнительные данные из соцсетей:\r\n\r\n```javascript\r\nconst socialUsers = [\r\n  { id: 4, name: \"Dave\", role: \"user\" },\r\n  { id: 1, hobby: \"chess\", email: \"mynameisalice@social.com\" },\r\n  { id: 4, name: \"Dave\", role: \"user\", email: \"davidblame@social.com\" }\r\n];\r\n```\r\n\r\nВ дополнительных данных может быть как новый пользователь, так и дополнительная информация об уже существующих пользователях.\r\n\r\n### Задача\r\n\r\n* Объединить два массива так, чтобы получился новый массив, в котором будут все пользователи - и старые, и новые, плюс у старых пользователей появится дополнительная информация.\r\n* Пользователей сравнивать по id.\r\n* В данных из соцсетей пользователи могут повторяться, т.к. соцсетей у пользователя может быть несколько.\r\n\r\n### Дополнительные условия\r\n\r\n* Постараться сделать без мутирования исходных массивов и объектов.",
    template: `// Основные пользователи (из БД)
const dbUsers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie" }
];

// Дополнительные данные (из соцсетей)
const socialUsers = [
  { id: 4, name: "Dave", role: "user" },
  { id: 1, hobby: "chess", email: "mynameisalice@social.com" },
  { id: 4, name: "Dave", role: "user", email: "davidblame@social.com" }
];


function mergeUsers(databaseUsers, socialUsers) {
  // Ваш код здесь
}

const merged = mergeUsers(dbUsers, socialUsers);
console.log(merged);`,
    solution: `// Решение 1: полностью функциональное, 0 мутаций.
function mergeUsers(databaseUsers, socialUsers) {
  return socialUsers.reduce(
    (result, user) => result.find(r => r.id === user.id)
      ? result.map(r => r.id !== user.id ? r : { ...r, ...user})
      : [...result, user], 
    databaseUsers
  );
}

// Решение 2: с локальными мутациями, не влияющими на исходные данные. Лучше производительность.
function mergeUsers(databaseUsers, socialUsers) {
  return socialUsers.reduce((mergedUsers, socialUser) => {
    let ind = mergedUsers.findIndex(u => u.id === socialUser.id);
    if (ind !== -1){
      mergedUsers[ind] = { ...mergedUsers[ind], ...socialUser }
    } else {
      mergedUsers.push(socialUser);
    }
    return mergedUsers;
  }, [...databaseUsers]);
}`,
    categories: ['real-tasks'],
    tags: ['reduce', 'find', 'map', 'spread', '...', 'findIndex']
  },
  {
    id: "77128850a0c305a2",
    name: "task-subscribers",
    path: "tasks\\real-tasks\\task-subscribers",
    title: "",
    description: "TODO: сделать через set и замыкания задачу подписки и отписки.\r\n\r\nЧерновик кода:\r\n\r\n```javascript\r\nfunction createSubscriptionService() {\r\n  const subscribers = new Set();\r\n  const ids = new Set();\r\n\r\n  return {\r\n    subscribe(user) {\r\n      if (ids.has(user.id)) return false;\r\n      subscribers.add(user);\r\n      ids.add(user.id);\r\n      return true;\r\n    },\r\n    getSubscribers() {\r\n      // Возвращаем новый Set (копию)\r\n      return new Set(subscribers);\r\n    }\r\n  };\r\n}\r\n```\r\n\r\n",
    template: ``,
    solution: ``,
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "62bb7163a6460b30",
    name: "task-fetch-to-ent",
    path: "tasks\\refactoring\\task-fetch-to-ent",
    title: "Свободный рефакторинг",
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
    id: "7e947eb44113c93d",
    name: "task-autotype-config_typeof",
    path: "tasks\\typescript\\operators-and-constructions\\task-autotype-config_typeof",
    title: "Автоматическое выведение типа для объекта с конфигом",
    description: "У вас есть объект конфигурации:\r\n\r\n```typescript\r\nconst defaultHttpConfig = {\r\n  baseURL: \"https://api.example.com/v1\",\r\n  timeout: 5000,\r\n  maxRetries: 3,\r\n  enableLogging: false,\r\n}\r\n```\r\n\r\nи функция, которая принимает этот объект и создает Http-клиент с настройками из этого конфига:\r\n\r\n```typescript\r\nfunction createHttpClient(userConfig)\r\n```\r\n\r\n### Задача\r\n\r\n* Типизируйте параметр userConfig так, чтобы:\r\n  * Нельзя было передавать конфиг с полями, которых нет в дефолтном конфиге.\r\n  * Можно было передавать конфиг, в котором только нужные поля, которые мы хотим переопределить.\r\n  * Можно было бы вообще не передавать конфиг, чтобы клиент просто создавался с дефолтными значениями.",
    template: `const defaultHttpConfig = {
  baseURL: "https://api.example.com/v1",
  timeout: 5000,
  maxRetries: 3,
  enableLogging: false,
};

function createHttpClient(userConfig) {
  const finalConfig = { ...defaultHttpConfig, ...userConfig };
  console.log("Создан клиент с конфигом:", finalConfig);
}

createHttpClient(); // Использует дефолтный конфиг
createHttpClient({ 
  timeout: 2000 
}); // Меняем только timeout
createHttpClient({ timeout: "1000" });  // Ошибка! timeout дб числом`,
    solution: `type HttpConfig = typeof defaultHttpConfig;

function createHttpClient(userConfig: Partial<HttpConfig> = {}) {
  // Код функции
}`,
    categories: ['typescript', 'operators-and-constructions'],
    tags: ['typeof', 'Partial']
  },
  {
    id: "be594ea43cc67f24",
    name: "task-safely-get-prop-value_keyof",
    path: "tasks\\typescript\\operators-and-constructions\\task-safely-get-prop-value_keyof",
    title: "Функция безопасного получения свойства",
    description: "У вас есть интерфейс:\r\n\r\n```typescript\r\ninterface User {\r\n  firstname: string;\r\n  lastname: string;\r\n  age?: number;\r\n}\r\n```\r\n\r\nЗадача:\r\n\r\n* Напишите функцию getPropValue(obj, prop), которая принимает объект и имя свойства, и возвращает значение этого свойства.\r\n* Типизируйте функцию, чтобы нельзя было передать ей свойство, которого нет в переданном объекта.\r\n  * Надо типизировать оба аргумента и результат самой функции.",
    template: `interface User {
  firstname: string;
  lastname: string;
  age?: number;
}

const alice: User = {
  firstname: 'Alice',
  lastname: 'Brooks'
}

const bob: User = {
  firstname: 'Bob',
  lastname: 'Sagget',
  age: 50
}

function getPropValue(obj, prop) {
  // Ваша реализация
}

console.log(getPropValue(bob, 'age'));
console.log(getPropValue(alice, 'age'));
console.log(getPropValue(alice, 'sex'));  // <-- Недопустимо`,
    solution: `function getPropValue<T, K extends keyof T>(obj: T, prop: K): T[K] {
  return obj[prop];
}`,
    categories: ['typescript', 'operators-and-constructions'],
    tags: ['keyof', 'generics', 'дженерики']
  },
  {
    id: "3d4b25096f709e11",
    name: "task-user-profile-base_type_interface_union",
    path: "tasks\\typescript\\type-interface\\task-user-profile-base_type_interface_union",
    title: "Тип для профиля пользователя",
    description: "### Брифинг\r\n\r\nВ системе есть пользователи, для которых используются такие данные:\r\n\r\n* Имя пользователя (username) - обязательно. Строка.\r\n* Почта (email) - обязательно. Строка.\r\n* Роль (role) - обязательно. Строка.\r\n  * Может принимать любое из этих значений: \"user\", \"admin\", \"guest\".\r\n* Имя (firstname) - опционально. Строка.\r\n* Фамилия (lastname) - опционально. Строка.\r\n* Год рождения (year) - опционально. Число, например 1998, без месяца и дня.\r\n\r\n### Задача\r\n\r\n* Составьте тип UserProfile, исходя из перечисленных требований.\r\n  * Роль оформите отдельным типом UserRole.\r\n  * Имя, фамилию и год рождения тоже выделите в отдельный тип PersonalInfo.\r\n* Создайте переменную, типизируйте ее и положите объект.",
    template: ``,
    solution: `type UserRole = 'admin' | 'user' | 'guest';

type PersonalInfo = {
  firstname?: string;
  lastname?: string;
  year?: number;
}

interface UserProfile {
  username: string;
  email: string;
  role: UserRole;
  personal?: PersonalInfo
}

const user: UserProfile = {
  username: 'huck',
  email: 'huckf@gmail.com',
  role: 'user',
  personal: {
    'firstname': 'Huck',
    'lastname': 'Finn'
  }
}`,
    categories: ['typescript', 'type-interface'],
    tags: ['опциональные поля', 'обязательные поля', 'union', 'type', 'interface']
  },
  {
    id: "a30c8fd86874b15f",
    name: "task-partial-1",
    path: "tasks\\typescript\\utility-types\\task-partial-1",
    title: "Утилитарный тип Partial",
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
    tags: ['partial']
  },
  {
    id: "3259fca9146620fd",
    name: "task-pick-2",
    path: "tasks\\typescript\\utility-types\\task-pick-2",
    title: "Утилитарный тип Pick",
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
    tags: ['pick']
  }
];

export default tasks;

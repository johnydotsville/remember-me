// Auto-generated file (2025-07-30T13:39:26.995Z)
import type { TaskInfo, Category } from "@/src/types/model";

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
      name: 'css',
      title: 'CSS',
      hidden: false,
      subcategories: [
        {
          name: 'flexbox',
          title: 'Flex',
          hidden: false,
          subcategories: []
        },
        {
          name: 'position',
          title: 'Позиционирование',
          hidden: false,
          subcategories: []
        }
      ]
    },
    {
      name: 'html',
      title: '',
      hidden: false,
      subcategories: []
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
          name: 'functions',
          title: 'Функции',
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

export const tasks: TaskInfo[] = [
  {
    id: "b72c1cedfba6ed64",
    name: "task-app-users_arrays_spread",
    title: "Пользователи программы",
    categories: ['arrays'],
    tags: ['spread', '...', 'массивы', 'array']
  },
  {
    id: "8a9b8d3392471290",
    name: "task-cold-days_arrays_findIndex_findLastIndex_indexOf_lastIndexOf",
    title: "Холодные дни на неделе",
    categories: ['arrays'],
    tags: ['findIndex', 'findLastIndex', 'indexOf', 'lastIndexOf', 'массивы', 'array']
  },
  {
    id: "3d5e0a711c944e66",
    name: "task-create-via-static-from_arrays_from",
    title: "Создание массива",
    categories: ['arrays'],
    tags: ['массивы', 'array', 'легко', 'синтаксис']
  },
  {
    id: "d8d3d77e755d2d3d",
    name: "task-deactivate-users_arrays_filter",
    title: "Деактивация пользователей",
    categories: ['arrays'],
    tags: ['map', 'filter', 'легко', 'массивы', 'array']
  },
  {
    id: "6102486f7d9faa42",
    name: "task-edge-effect-arrays_slice_join",
    title: "Проверка психологического 'эффекта края'",
    categories: ['arrays'],
    tags: ['slice', 'join', 'массивы', 'array']
  },
  {
    id: "f5d854cfcd6c467d",
    name: "task-last-exam_arrays_findLast",
    title: "Последний экзамен в месяце",
    categories: ['arrays'],
    tags: ['findLast', '??', 'массивы', 'array']
  },
  {
    id: "f6320a5a46f06301",
    name: "task-lucky-player_arrays_find",
    title: "Игрок, которому повезло",
    categories: ['arrays'],
    tags: ['find', 'массивы', 'array']
  },
  {
    id: "0d8e3bc4c6e4ff5b",
    name: "task-month-temperatures_arrays_every_some",
    title: "Температуры по месяцам",
    categories: ['arrays'],
    tags: ['find', 'some', 'every', '?.', '??', 'массивы', 'array']
  },
  {
    id: "f73e3cb7d9af31af",
    name: "task-reset-orders-status_arrays_fill",
    title: "Сброс забагованных статусов заказов",
    categories: ['arrays'],
    tags: ['fill', 'массивы', 'array']
  },
  {
    id: "ae4ee0ed9cd5b39b",
    name: "task-supported-languages_arrays_includes",
    title: "Поддерживаемые языки",
    categories: ['arrays'],
    tags: ['includes', 'some', 'синтаксис', 'легко', 'массивы', 'array']
  },
  {
    id: "94b6a5fc5aa16ec7",
    name: "task-weekly-food-list_arrays_flat_flatMap",
    title: "Список продуктов на неделю",
    categories: ['arrays'],
    tags: ['flat', 'flatMap', 'массивы', 'array']
  },
  {
    id: "769467c9abc72b09",
    name: "task-fetch-basics_fetch_json_ok_status",
    title: "Запрос данных и обработка результата",
    categories: ['browser-api', 'http'],
    tags: ['fetch', 'fetch-status', 'fetch-ok', 'TypeError', 'SyntaxError', 'http']
  },
  {
    id: "31659cd47a27115a",
    name: "task-fetch-with-query-string_URL_URLSearchParams",
    title: "Формирование query string для url",
    categories: ['browser-api', 'http'],
    tags: ['url', 'urlsearchparams', 'http']
  },
  {
    id: "3577f570e1da433a",
    name: "task-classic-simple-debounce-user-input_setTimeout_clearTimeout",
    title: "Дебаунс простой",
    categories: ['browser-api'],
    tags: ['debounce', 'setTimeout', 'clearTimeout']
  },
  {
    id: "b9b87a27c5cb1ffe",
    name: "task-logo-and-menu_allbasics",
    title: "Адаптивное меню с логотипом",
    categories: ['css', 'flexbox'],
    tags: ['flex-basis', 'justify-content', 'align-items', 'gap', 'flex-wrap', 'display:flex', 'flex', 'flexbox', 'css']
  },
  {
    id: "eeea57d836f312f2",
    name: "task-news-feed_grow_shrink_basis",
    title: "Новостная лента",
    categories: ['css', 'flexbox'],
    tags: ['flex-grow', 'flex-shrink', 'flex-basis', 'flex', 'flexbox', 'css']
  },
  {
    id: "079109653469c3e7",
    name: "task-chat-button_position-fixed",
    title: "Кнопка чата поддержки",
    categories: ['css', 'position'],
    tags: ['position:fixed', 'position', 'позиционирование', 'css']
  },
  {
    id: "f6ef5c39cc7c46a0",
    name: "task-macbook-air-price-report_position-sticky",
    title: "Анализ динамики цен на Macbook Air M3",
    categories: ['css', 'position'],
    tags: ['position:sticky', 'position', 'позиционирование', 'css']
  },
  {
    id: "77bc2d27bb20e6ef",
    name: "task-new-product-bage_position-relative-absolute",
    title: "Значок 'Новый товар'",
    categories: ['css', 'position'],
    tags: ['position:relative', 'position:absolute', 'position', 'позиционирование', 'css']
  },
  {
    id: "4f7f75dce74636b3",
    name: "task-cart-buy-button_box-sizing",
    title: "Кнопка 'Купить' в корзине",
    categories: ['css'],
    tags: ['box-sizing', 'border-box', 'content-box', 'css']
  },
  {
    id: "b9bd1b052198a96c",
    name: "task-greet-user-refactoring",
    title: "Рефакторинг функции приветствия",
    categories: ['javascript', 'destruction'],
    tags: ['деструктуризация объектов', 'деструктуризация', 'деструктурирующее присваивание', 'javascript']
  },
  {
    id: "d02b43377ef95f59",
    name: "task-make-your-own-exception",
    title: "Обработка деления на ноль",
    categories: ['javascript', 'exceptions'],
    tags: ['синтаксис', 'легко', 'exceptions', 'исключения', 'javascript']
  },
  {
    id: "23401f219047408c",
    name: "task-year-bonus-calculation_call",
    title: "Расчет годовых премий сотрудникам",
    categories: ['javascript', 'functions'],
    tags: ['call', 'functions', 'javascript']
  },
  {
    id: "5a04d9100cf98f75",
    name: "task-count-visitors",
    title: "Подсчет количества авторизаций",
    categories: ['javascript', 'map'],
    tags: ['map', 'reduce', 'синтаксис', 'легко', 'forEach', 'for-of', 'javascript']
  },
  {
    id: "4443f047cf7ff9d2",
    name: "task-customer-check-payment_trunc",
    title: "Стоимость покупки в пользу покупателя",
    categories: ['javascript', 'math'],
    tags: ['trunc', 'reduce', 'math', 'javascript']
  },
  {
    id: "199cba6650eb00f6",
    name: "task-data-pages",
    title: "Количество страниц в пагинаторе",
    categories: ['javascript', 'math'],
    tags: ['ceil', 'math', 'javascript']
  },
  {
    id: "2bdd7da4fa8aba52",
    name: "task-generate-random-numbers",
    title: "Генератор случайных чисел",
    categories: ['javascript', 'math'],
    tags: ['random', 'floor', 'math', 'javascript']
  },
  {
    id: "0a5d35f166b3391e",
    name: "task-get-exchange-stat",
    title: "Статистика курса валют",
    categories: ['javascript', 'math'],
    tags: ['min', 'max', 'math', 'javascript']
  },
  {
    id: "101fea1c0ac3ecdd",
    name: "task-movie-avg-rating",
    title: "",
    categories: ['javascript', 'math'],
    tags: ['math', 'javascript']
  },
  {
    id: "62acf171cef1f762",
    name: "task-client-orders_entries_keys_values",
    title: "Заказы клиентов на складах",
    categories: ['javascript', 'other'],
    tags: ['Map', 'keys', 'values', 'entries', 'javascript']
  },
  {
    id: "e924fc6b53e8b7ff",
    name: "task-promocodes",
    title: "Промокоды для главного менеджера",
    categories: ['javascript', 'set'],
    tags: ['синтаксис', 'легко', 'set', 'javascript']
  },
  {
    id: "6f3bacc2ec7afff1",
    name: "task-city-phone-codes_slice",
    title: "Московские номера телефонов",
    categories: ['javascript', 'strings'],
    tags: ['slice', 'строки', 'string', 'методы строк', 'javascript']
  },
  {
    id: "ecf39ada3cf83f8e",
    name: "task-fake-gmail-domains_includes",
    title: "Email'ы, мимикрирующие под gmail",
    categories: ['javascript', 'strings'],
    tags: ['includes', 'endsWith', 'строки', 'string', 'методы строк', 'javascript']
  },
  {
    id: "0baac5a5952f2398",
    name: "task-rifleman-creed-cleansing_trim_trimStart_trimEnd",
    title: "Кредо стрелка",
    categories: ['javascript', 'strings'],
    tags: ['split', 'trim', 'trimStart', 'trimEnd', 'строки', 'string', 'методы строк', 'javascript']
  },
  {
    id: "a854d7176d8c818e",
    name: "task-day-codes_switch",
    title: "Название дней недели по кодам",
    categories: ['javascript', 'syntax'],
    tags: ['switch', 'синтаксис', 'javascript']
  },
  {
    id: "6a83125d757259f9",
    name: "task-employees-messed-info_rest_array_items",
    title: "Перепутанная информация о сотрудниках",
    categories: ['javascript', 'syntax'],
    tags: ['...', 'rest', 'синтаксис', 'javascript']
  },
  {
    id: "e15f166ad157b304",
    name: "task-format-order-for-delivery_rest_object_fields",
    title: "Формат заказа для службы доставки",
    categories: ['javascript', 'syntax'],
    tags: ['...', 'rest', 'objects', 'синтаксис', 'javascript']
  },
  {
    id: "d0148c93faa1b0eb",
    name: "task-professor-substitute",
    title: "Заместитель профессора",
    categories: ['javascript', 'syntax'],
    tags: ['?.', '||', 'Опциональная цепочка', 'синтаксис', 'javascript']
  },
  {
    id: "85b5b94a0dc6f958",
    name: "task-user-action-details_rest_fn_params",
    title: "Детали действия пользователя",
    categories: ['javascript', 'syntax'],
    tags: ['...', 'rest', 'синтаксис', 'javascript']
  },
  {
    id: "1af9397a57643494",
    name: "task-dyn-add-field_spread_and",
    title: "Условное добавление полей в объект",
    categories: ['objects'],
    tags: ['spread-objects', '&&', 'object']
  },
  {
    id: "1f9fc76721918b29",
    name: "task-hackers-searching-revenue_in",
    title: "Проверка наличия прав и пользователя",
    categories: ['objects'],
    tags: ['in', 'object']
  },
  {
    id: "028fa2478a7ce693",
    name: "task-merge-objects-1_spread_obj",
    title: "Объединение конфигурационных объектов",
    categories: ['objects'],
    tags: ['spread-objects', 'object']
  },
  {
    id: "e605a49167ed6568",
    name: "task-dotaters-thanks",
    title: "",
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "8c5114116f200b9f",
    name: "task-flat-categories",
    title: "",
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "d279c4b5be657b71",
    name: "task-merge-user-info",
    title: "Объединение пользователей из БД и из соцсетей",
    categories: ['real-tasks'],
    tags: ['reduce', 'find', 'map', 'spread', '...', 'findIndex']
  },
  {
    id: "77128850a0c305a2",
    name: "task-subscribers",
    title: "",
    categories: ['real-tasks'],
    tags: []
  },
  {
    id: "62bb7163a6460b30",
    name: "task-fetch-to-ent",
    title: "Свободный рефакторинг",
    categories: ['refactoring'],
    tags: []
  },
  {
    id: "7e947eb44113c93d",
    name: "task-autotype-config_typeof",
    title: "Автоматическое выведение типа для объекта с конфигом",
    categories: ['typescript', 'operators-and-constructions'],
    tags: ['typeof', 'Partial']
  },
  {
    id: "be594ea43cc67f24",
    name: "task-safely-get-prop-value_keyof",
    title: "Функция безопасного получения свойства",
    categories: ['typescript', 'operators-and-constructions'],
    tags: ['keyof', 'generics', 'дженерики']
  },
  {
    id: "3d4b25096f709e11",
    name: "task-user-profile-base_type_interface_union",
    title: "Тип для профиля пользователя",
    categories: ['typescript', 'type-interface'],
    tags: ['опциональные поля', 'обязательные поля', 'union', 'type', 'interface']
  },
  {
    id: "a30c8fd86874b15f",
    name: "task-partial-1",
    title: "Утилитарный тип Partial",
    categories: ['typescript', 'utility-types'],
    tags: ['partial']
  },
  {
    id: "3259fca9146620fd",
    name: "task-pick-2",
    title: "Утилитарный тип Pick",
    categories: ['typescript', 'utility-types'],
    tags: ['pick']
  }
];

export default tasks;

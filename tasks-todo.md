# union

на union пара хороших доп идей

Вот оригинальные типы из базовой задачи на type и interface:

```typescript
type UserRole = 'admin' | 'user' | 'guest';

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
}
```



### **Альтернативные подходы (если нужны дополнительные ограничения)**

#### 1. **Обязать заполнять `personal` полностью, если он есть**

Если бизнес-логика требует, чтобы при указании `personal` были заполнены **все** его поля:

typescript

```
type PersonalInfo = {
  firstname: string; // Обязательно
  lastname: string;  // Обязательно
  year?: number;     // Опционально
};

// Использование:
const user: UserProfile = {
  username: "bob",
  email: "bob@example.com",
  role: "user",
  personal: { 
    firstname: "Bob", // Обязательно
    lastname: "Smith" // Обязательно
  }
};
```

#### 2. **Запретить пустой `personal` объект**

Если нужно, чтобы при наличии `personal` было заполнено хотя бы одно поле:

typescript

```
type AtLeastOne<T> = { [K in keyof T]: Required<Pick<T, K>> & Partial<T> }[keyof T];

type PersonalInfo = AtLeastOne<{
  firstname: string;
  lastname: string;
  year: number;
}>;

// Примеры:
const valid1: PersonalInfo = { firstname: "Alice" }; // OK
const valid2: PersonalInfo = { year: 1990 }; // OK
const invalid: PersonalInfo = {}; // Ошибка TS!
```

#### 3. **Discriminated Union для разных ролей**

Если для разных ролей нужны разные обязательные поля (например, `admin` должен указывать полное имя):

typescript

```
type UserProfile = {
  username: string;
  email: string;
} & (
  | { role: "admin"; personal: { firstname: string; lastname: string } }
  | { role: "user" | "guest"; personal?: PersonalInfo }
);
```

------

### **Когда ваш подход (полностью опциональный `personal`) — это нормально?**

- **Анонимные пользователи**: Например, в комментариях на сайте.
- **Постепенное заполнение профиля**: Пользователь может добавить данные позже.
- **Минималистичные формы**: Например, только email для регистрации.
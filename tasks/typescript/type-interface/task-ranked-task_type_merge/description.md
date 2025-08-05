В вашей программе по тестированию знаний есть тип, описывающий задачу:

```typescript
export type Task = {
  id: string;
  name: string;
  path: string;
  title: string;
  categories: string[];
  tags: string[];
}
```

Команде пришла в голову интересная фича - возможность выставлять оценку задаче. Вот тип для оценки:

```typescript
export type TaskRank = {
  id: number;
  code: string;
  title: string;
  weight: number;
  agingFactor: number;
}
```

Тимлид дал вам задание:

- Создай тип TaskWithUserAttributes. Это тип как Task, в котором два дополнительных поля:

  ```typescript
  rank: TaskRank;
  lastSolved: number;
  ```
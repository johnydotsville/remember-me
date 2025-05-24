const foo = Array.from({ length: 10 }, (cur, ind) => `Элемент ${ind+1}`);

const bar = Array.from({ length: 10 }, (cur, ind) => ({
  id: ind,
  value: `Элемент ${ind + 1}`
}));
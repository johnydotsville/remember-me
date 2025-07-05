interface User {
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
console.log(getPropValue(alice, 'sex'));  // <-- Недопустимо
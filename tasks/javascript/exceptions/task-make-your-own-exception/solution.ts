class DivisionByZeroError extends Error {
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
}
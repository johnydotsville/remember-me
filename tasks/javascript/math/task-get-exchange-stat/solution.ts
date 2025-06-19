const exchangeRates = [75.3, 76.1, 74.9, 77.5, 76.8, 75.7, 78.2];

const minRate = Math.min(...exchangeRates);
const maxRate = Math.max(...exchangeRates);

console.log(`Минимальный курс: ${minRate}`);
console.log(`Максимальный курс: ${maxRate}`);
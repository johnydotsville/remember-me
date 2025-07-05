const orders = new Map([
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
console.log(`Все заказы клиента ${email}:`);
clientOrders.forEach(order => console.log(order));

email = 'john.doe@example.com';
const clientOrdersCount = getClientOrdersCount(email, orders);
console.log(`Клиент ${email} сделал ${clientOrdersCount} заказов.`);

const warehouseCode = 'AA';
const ordersCountAtWarehouse = getOrdersCountAsWarehouse(warehouseCode, orders);
console.log(`На складе ${warehouseCode} лежит ${ordersCountAtWarehouse} заказов.`);
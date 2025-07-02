const orderStatuses = [
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
  console.log(`Статусы заказов в ячейках с ${from} по ${to}:`);
  for (let i = from; i <= to; i++) {
    console.log(`Ячейка [${i}]: ${statuses[i]}`);
  }
}

printStatuses(orderStatuses, 2, 6);

// Измените статусы

printStatuses(orderStatuses, 2, 6);
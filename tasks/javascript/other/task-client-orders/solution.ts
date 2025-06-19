// Выдать все заказы клиента
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
}
function formatForDelivery(order) {
  const {
    customer: {
      name, address
    },
    ...details
  } = order;
  return {
    name, address, details
  }
}
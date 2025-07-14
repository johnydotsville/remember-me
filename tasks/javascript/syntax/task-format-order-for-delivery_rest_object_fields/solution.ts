function formatForDelivery(order) {
  const {
    customer: {
      name, address, email
    },
    ...details
  } = order;
  return {
    name, 
    address, 
    details: {
      ...details,
      email
    }
  }
}
const order = {
  id: 500,
  customer: {
    name: "Emily Johnson",
    email: "emily.j@example.com",
    address: "350 5th Ave, New York, NY 10118, USA"
  },
  items: [
    "The Great Gatsby by F. Scott Fitzgerald",
    "SanDisk Ultra 128GB USB 3.0 Flash Drive"
  ],
  discount: 10,
  date: "2023-05-01"
};

function formatForDelivery(order) {
  // Ваше решение
}

console.log(formatForDelivery(order));
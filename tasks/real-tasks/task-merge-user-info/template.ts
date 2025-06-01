// Основные пользователи (из БД)
const dbUsers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie" }
];

// Дополнительные данные (из соцсетей)
const socialUsers = [
  { id: 1, hobby: "chess", email: "alice123@social.com" },
  { id: 4, name: "Dave", role: "user" }
];


function mergeUsers(databaseUsers, socialUsers) {
  // Ваш код здесь
}

const merged = mergeUsers(dbUsers, socialUsers);
console.log(merged);
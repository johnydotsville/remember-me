// Основные пользователи (из БД)
const dbUsers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie" }
];

// Дополнительные данные (из соцсетей)
const socialUsers = [
  { id: 4, name: "Dave", role: "user" },
  { id: 1, hobby: "chess", email: "mynameisalice@social.com" },
  { id: 4, name: "Dave", role: "user", email: "davidblame@social.com" }
];


function mergeUsers(databaseUsers, socialUsers) {
  // Ваш код здесь
}

const merged = mergeUsers(dbUsers, socialUsers);
console.log(merged);
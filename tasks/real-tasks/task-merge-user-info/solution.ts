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

// Решение 1: полностью функциональное, 0 мутаций.
function mergeUsers(databaseUsers, socialUsers) {
  return socialUsers.reduce((mergedUsers, socialUser) => {
    const existingUserIndex = databaseUsers.findIndex(dbUser => dbUser.id === socialUser.id);
    return existingUserIndex === -1
      ? [...mergedUsers, socialUser]
      : mergedUsers.map((u, ind) => ind === existingUserIndex ? { ...u, ...socialUser } : u)
  }, databaseUsers);
}

// Решение 2: с локальными мутациями, не влияющими на исходные данные. Лучше производительность.
function mergeUsers(databaseUsers, socialUsers) {
  return socialUsers.reduce((mergedUsers, socialUser) => {
    let ind = mergedUsers.findIndex(u => u.id === socialUser.id);
    if (ind !== -1){
      mergedUsers[ind] = { ...mergedUsers[ind], ...socialUser }
    } else {
      mergedUsers.push(socialUser);
    }
    return mergedUsers;
  }, [...databaseUsers]);
}

const merged = mergeUsers(dbUsers, socialUsers);
console.log(merged);
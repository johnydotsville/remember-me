// Решение 1
const stat = visitors.reduce((visitStat, login) => {
  const { username } = login;
  if (visitStat.has(username)) {
    visitStat.set(username, visitStat.get(username) + 1);
  } else {
    visitStat.set(username, 1);
  }
  return visitStat;
}, new Map());

// Решение 2
const stat = visitors.reduce(
  (visitStat, login) => visitStat.set(login.username, visitStat.has(login.username) ? visitStat.get(login.username) + 1 : 1),
  new Map()
);

function forEachShow(stat) {
  console.log('forEach статистика авторизаций:');
  stat.forEach((value, key) => console.log(`${key}: ${value} раз.`));
}

function forOfShow(stat) {
  console.log('forOf статистика авторизаций:');
  for (const [key, value] of stat) {
    console.log(`${key}: ${value} раз.`);
  }
}

forEachShow(stat);
forOfShow(stat);
console.log(`Всего авторизовались ${stat.size} разных пользователей.`);
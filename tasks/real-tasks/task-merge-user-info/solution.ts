// Решение 1: полностью функциональное, 0 мутаций.
function mergeUsers(databaseUsers, socialUsers) {
  return socialUsers.reduce(
    (result, user) => result.find(r => r.id === user.id)
      ? result.map(r => r.id !== user.id ? r : { ...r, ...user})
      : [...result, user], 
    databaseUsers
  );
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
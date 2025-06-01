function createUser(login, firstname, lastname, role = 'user') {
  if (!login) throw new Error('login является обязательным.');
  return {
    login,
    role,
    ...(firstname && firstname.length > 0 && { firstname }),
    ...(lastname && lastname.length > 0 && { surname: lastname }),
  }
}

const huck = createUser('hfinn', 'Huck', 'Finn');
console.log(huck);
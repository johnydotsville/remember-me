function greetUser(userCorporateProfile) {
  return `Hello, ${userCorporateProfile.firstname} ${userCorporateProfile.lastname}!`;
}

const user = {
  firstname: 'Dave',
  lastname: 'Hoff',
  department: 'development'
}

console.log(greetUser(user));
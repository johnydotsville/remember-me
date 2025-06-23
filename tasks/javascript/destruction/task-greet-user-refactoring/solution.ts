// Пожелание 1: поля в переменные с такими же названиями
function greetUser(userCorporateProfile) {
  const { firstname, lastname } = userCorporateProfile;
  return `Hello, ${firstname} ${lastname}!`;
}

// Пожелание 2: поля в переменные с другими именами
function greetUser(userCorporateProfile) {
  const { firstname: name, lastname: surname } = userCorporateProfile;
  return `Hello, ${name} ${surname}!`;
}

// Пожелание 3: когда имя и фамилия не заданы
function greetUser(userCorporateProfile) {
  const { firstname: name = 'dear', lastname: surname = 'user' } = userCorporateProfile;
  return `Hello, ${name} ${surname}!`;
}

// Пожелание 4: изменили структуру исходного объекта, теперь поля вложены
function greetUser(userCorporateProfile) {
  const { 
    personality: {
      firstname: name = 'dear', 
      lastname: surname = 'user' 
    } = {}
  } = userCorporateProfile;
  return `Hello, ${name} ${surname}!`;
}

// Пожелание 5: деструктурировать в заранее объявленные переменные
function greetUser(userCorporateProfile) {
  let fn, ln;
  ({ 
    personality: {
      firstname: fn = 'dear', 
      lastname: ln = 'user' 
    } = {}
  } = userCorporateProfile);
  return `Hello, ${fn} ${ln}!`;
}

// Пожелание 6: собрать все не нужные пока что поля в отдельный объект
function greetUser(userCorporateProfile) {
  const { 
    personality: {
      firstname: fn = 'dear', 
      lastname: ln = 'user' 
    } = {},
    ...noNeed
  } = userCorporateProfile;
  return `Hello, ${fn} ${ln}!`;
}

// Пожелание 7: функция распечатки указанного свойства
function printCustomFieldValue(user, prop) {
  const { [prop]: result } = user;
  console.log(result);
}
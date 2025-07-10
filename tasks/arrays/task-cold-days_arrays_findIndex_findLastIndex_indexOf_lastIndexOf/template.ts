const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const temperatures1 = [2, 1, -5, 3, 0, -1, 2];
const temperatures2 = [2, 1, 5, 3, 0, 1, 2];

// Первый холодный день на неделе
function reportStartColdDay(days, temps, thres = 0) {
  console.log('Холодных дней на неделе не было.');
  console.log(`Первый холодный день на неделе: ДЕНЬ. Температура была: ТЕМПЕРАТУРА`);
}

// Последний холодный день на неделе
function reportEndColdDay(days, temps, thres = 0) {
  console.log('Холодных дней на неделе не было.');
  console.log(`Последний холодный день на неделе: ДЕНЬ. Температура была: ТЕМПЕРАТУРА`);
}

// Первый день с конкретной температурой
function reportStartDayWithTemp(days, temps, temp = 0) {
  console.log(`Не было дней с температурой ТЕМПЕРАТУРА.`);
  console.log(`Первый день с температурой ТЕМПЕРАТУРА: ДЕНЬ`);
}

// Последний день с конкретной температурой
function reportEndDayWithTemp(days, temps, temp = 0) {
  console.log(`Не было дней с температурой ТЕМПЕРАТУРА.`);
  console.log(`Последний день с температурой ТЕМПЕРАТУРА: ДЕНЬ`);
}

reportStartColdDay(daysOfWeek, temperatures1);  // Среда
reportStartColdDay(daysOfWeek, temperatures2);  // Холодных дней на неделе не было

reportEndColdDay(daysOfWeek, temperatures1);  // Суббота
reportEndColdDay(daysOfWeek, temperatures2);  // Холодных дней на неделе не было

reportStartDayWithTemp(daysOfWeek, temperatures2, 1);  // Вторник
reportEndDayWithTemp(daysOfWeek, temperatures2, 1);  // Суббота

reportStartDayWithTemp(daysOfWeek, temperatures2, 10);  // Не было дней с температурой 10
reportEndDayWithTemp(daysOfWeek, temperatures2, 10);  // Не было дней с температурой 10
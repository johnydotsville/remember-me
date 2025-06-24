// Решение через switch
function getFullDayName(shortCode) {
  let dayName;
  switch (shortCode) {
    case 'Пн':
      dayName = 'Понедельник';
      break;
    case 'Вт':
      dayName = 'Вторник';
      break;
    case 'Ср':
      dayName = 'Среда';
      break;
    case 'Чт':
      dayName = 'Четверг';
      break;
    case 'Пт':
      dayName = 'Пятница';
      break;
    case 'Сб':
      dayName = 'Суббота';
      break;
    case 'Вс':
      dayName = 'Воскресенье';
      break;
    default:
      throw new Error(`Передан несуществующий код дня: ${shortCode}`);
  }
  return dayName;
}

// Решение через объект-маппер
function getFullDayName(shortCode) {
  const mapper = {
    'Пн': 'Понедельник',
    'Вт': 'Вторник',
    'Ср': 'Среда',
    'Чт': 'Четверг',
    'Пт': 'Пятница',
    'Сб': 'Суббота',
    'Вс': 'Воскресенье'
  };
  if (shortCode in mapper) {
    return mapper[shortCode];
  }
  throw new Error(`Передан несуществующий код дня: ${shortCode}`);
}

console.log(getFullDayName('Пт'));
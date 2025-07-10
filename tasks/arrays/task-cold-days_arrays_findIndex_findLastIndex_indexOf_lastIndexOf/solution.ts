// Первый холодный день на неделе
function reportStartColdDay(days, temps, thres = 0) {
  const idx = temps.findIndex(temp => temp < thres);
  if (idx === -1) {
    console.log('Холодных дней на неделе не было.');
  } else {
    console.log(`Первый холодный день на неделе: ${days[idx]}. Температура была: ${temps[idx]}`);
  }
}

// Последний холодный день на неделе
function reportEndColdDay(days, temps, thres = 0) {
  const idx = temps.findLastIndex(temp => temp < thres);
  if (idx === -1) {
    console.log('Холодных дней на неделе не было.');
  } else {
    console.log(`Последний холодный день на неделе: ${days[idx]}. Температура была: ${temps[idx]}`);
  }
}

// Первый день с конкретной температурой
function reportStartDayWithTemp(days, temps, temp = 0) {
  const idx = temps.indexOf(temp);
  if (idx === -1) {
    console.log(`Не было дней с температурой ${temp}.`);
  } else {
    console.log(`Первый день с температурой ${temp}: ${days[idx]}`);
  }
}

// Последний день с конкретной температурой
function reportEndDayWithTemp(days, temps, temp = 0) {
  const idx = temps.lastIndexOf(temp);
  if (idx === -1) {
    console.log(`Не было дней с температурой ${temp}.`);
  } else {
    console.log(`Последний день с температурой ${temp}: ${days[idx]}`);
  }
}
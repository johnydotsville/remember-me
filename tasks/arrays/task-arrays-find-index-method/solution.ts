// Первый холодный
function weekTemperatureReport(days, temps, thres) {
  const firstColdInd = temps.findIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(`Первый холодный день на этой неделе: ${days[firstColdInd]}. Температура была: ${temps[firstColdInd]}C`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}


// Последний холодный
function weekTemperatureReport(days, temps, thres) {
  const firstColdInd = temps.findLastIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(`Последний холодный день на этой неделе: ${days[firstColdInd]}. Температура была: ${temps[firstColdInd]}C`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}


// Первый день с конкретной температурой
function weekTemperatureReport(days, temps, temp = 0) {
  const tempInd = temps.indexOf(temp);
  if (tempInd !== -1) {
    console.log(`Первый день с температурой ${temp}: ${days[tempInd]}`);
  } else {
    console.log(`На этой неделе не было дней с температурой ${temp}C.`);
  }
}


// Последний день с конкретной температурой
function weekTemperatureReport(days, temps, temp = 0) {
  const tempInd = temps.lastIndexOf(temp);
  if (tempInd !== -1) {
    console.log(`Последний день с температурой ${temp}: ${days[tempInd]}`);
  } else {
    console.log(`На этой неделе не было дней с температурой ${temp}C.`);
  }
}
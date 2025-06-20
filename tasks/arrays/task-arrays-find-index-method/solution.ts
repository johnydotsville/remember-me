// Первый холодный
function weekTemperatureReport(weekDays, temps, thres) {
  const firstColdInd = temps.findIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(`Первый холодный день на этой неделе: ${weekDays[firstColdInd]}. Температура была: ${temps[firstColdInd]}C`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}


// Последний холодный
function weekTemperatureReport(weekDays, temps, thres) {
  const firstColdInd = temps.findLastIndex(t => t < thres);
  if (firstColdInd !== -1) {
    console.log(`Первый холодный день на этой неделе: ${weekDays[firstColdInd]}. Температура была: ${temps[firstColdInd]}C`);
  } else {
    console.log('На этой неделе холодных дней не было.');
  }
}
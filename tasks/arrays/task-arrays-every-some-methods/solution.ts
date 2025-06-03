// Месяц, в котором все недели теплые
const fullyWarm = stat.find(s => s.avgWeeksTemp.every(temp => temp > 0));
console.log(fullyWarm?.month ?? 'Не было ни одного полностью теплого месяца.');

// Месяц, в котором хотя бы одна неделя теплая
const partiallyWarm = stat.find(s => s.avgWeeksTemp.some(temp => temp > 0));
console.log(partiallyWarm?.month ?? 'Не было ни одного хотя бы частичного теплого месяца.');
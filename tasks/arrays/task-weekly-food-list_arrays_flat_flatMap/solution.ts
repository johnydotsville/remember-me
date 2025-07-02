const byDays = weeklyPurchases.map((purchase, i) => `${daysMapper[i]}: ` + purchase.flat().join(', '));
byDays.forEach(d => console.log(d));

const weekTotal = [...new Set(weeklyPurchases.flat(Infinity))].join(', ');
console.log(weekTotal);

const beverages = weeklyPurchases.flatMap(purchase => purchase[0]).join(', ');
console.log(`Напитки: ${beverages}`);
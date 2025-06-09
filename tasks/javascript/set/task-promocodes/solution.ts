const promos = new Set([...dave, ...mary, ...ann].map(promo => promo.code));
const myCode = 'CHRISTMAS2000';
if (!promos.has(myCode))
  promos.add(myCode);

promos.delete('NEWYEAR30');
promos.forEach(promo => console.log(promo));
console.log(`Промокоды на завтра (всего ${promos.size}): ${[...promos].join(', ')}`);
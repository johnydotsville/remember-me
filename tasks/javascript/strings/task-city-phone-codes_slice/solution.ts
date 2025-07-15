function getCityCode(phone) {
  return phone.slice(3, 6);
}

const moscow = phones.filter(phone => ['495', '499'].includes(getCityCode(phone)));

moscow.forEach(phone => console.log(phone));
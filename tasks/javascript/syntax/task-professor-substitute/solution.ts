const johnSmith = {
  name: 'John Smith',
  colleagues: [
    { name: 'Robert Johnson', phone: '(212) 555-0187' },
    { name: 'Emily Davis', phone: '(310) 555-0142' }
  ]
};

const sarahConnor = {
  name: 'Sarah Connor',
  colleagues: [] // Нет заместителя
};

const michaelBrown = {
  name: 'Michael Brown',
  // Нет коллег вообще
};

function getSubstitute(professor) {
  return professor.colleagues?.[0]?.phone || `У профессора ${professor.name} нет заместителя.`;
}

console.log(getSubstitute(johnSmith));
console.log(getSubstitute(sarahConnor));
console.log(getSubstitute(michaelBrown));
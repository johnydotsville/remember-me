const employees = [
  ['EMP-001', 'David', 'Jones', 'Senior Developer', 'internal:1234', 'david.j@company.com', 'home:NYC', 'skype:david-jones'],
  ['BADGE-002', 'Sarah', 'Smith', 'Content Manager', 'sarah.s@company.com', 'remote', 'internal:5678', 'home:Boston'],
  ['ID-789', 'Michael', 'Brown', 'HR Lead', 'full-time', 'michael.b@company.com', 'home:Chicago', 'internal:9012', '5 years exp'],
  ['CARD-XYZ', 'Emily', 'Davis', 'Junior Dev', 'intern', 'emily.d@company.com', 'internal:3456'],
  ['PASS-123', 'James', 'Wilson', 'Accountant', 'james.w@company.com', 'part-time', 'cpa', 'home:Seattle', 'internal:7890'],
  ['TOKEN-456', 'Lisa', 'Taylor', 'Team Lead', '24/7', 'lisa.t@company.com', 'internal:1234', 'emergency:555-1234']
];

function refine(employees) {
  // Ваше решение
}

const fine = refine(employees);
fine.forEach(emp => console.log(emp));
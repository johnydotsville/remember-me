function calcBonus(minBonus = 0, maxBonusPercent = 0) {
  if (typeof this.salary !== 'number' || typeof this.yearsOfService !== 'number' || 
      this.salary < 0 || this.yearsOfService < 0 || minBonus < 0 || maxBonusPercent < 0) {
    return 0;
  }

  const baseBonus = 0.1;
  const logBonus = 0.05 * Math.log(this.yearsOfService + 1);
  const loyaltyMultiplier = 1 + (this.yearsOfService / 20);
  
  let bonus = this.salary * (baseBonus + logBonus) * loyaltyMultiplier;

  if (minBonus > 0 && bonus < minBonus) {
    bonus = minBonus;
  }

  if (maxBonusPercent > 0) {
    bonus = bonus * (1 - maxBonusPercent / 100);
  }

  return Math.round(bonus);
}

const employees = [
  { fullName: "John Smith", department: "Marketing", yearsOfService: 1, salary: 50000 },
  { fullName: "Emily Johnson", department: "HR", yearsOfService: 2, salary: 55000 },
  { fullName: "Michael Brown", department: "Sales", yearsOfService: 5, salary: 70000 },
  { fullName: "Sarah Davis", department: "IT", yearsOfService: 7, salary: 85000 },
  { fullName: "Robert Wilson", department: "Finance", yearsOfService: 10, salary: 90000 },
  { fullName: "Jessica Martinez", department: "Engineering", yearsOfService: 15, salary: 110000 },
  { fullName: "David Anderson", department: "Management", yearsOfService: 20, salary: 130000 },
  { fullName: "Lisa Taylor", department: "R&D", yearsOfService: 25, salary: 150000 }
];

const adjustments = [0, 25];
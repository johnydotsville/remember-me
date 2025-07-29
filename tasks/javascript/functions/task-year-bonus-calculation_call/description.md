Близится конец года и нужно рассчитать премии для сотрудников. Вы помните, что где-то в программе был объект с нужной формулой. Вы поручили стажеру найти  этот объект и выделить формулу в отдельную функцию для удобства. Стажер нашел объект:

```javascript
const user1 = {
  name: 'Bob',
  salary: 10000,
  yearsOfService: 5,
  calcBonus(minBonus = 0, maxBonusPercent = 0) {
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
}
```

И, не долго думая, создал такую функцию и отдал вам:

```javascript
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
```

У вас еще будет время дать ему по пальцам за такое. Но пока что у вас нет времени рефакторить и придется пользовать этой стажерской функцией.

### Задача

* Для каждого сотрудника в массиве выведите в консоль положенную ему премию с учетом коррекций на этот год:

```javascript
const adjustments = [0, 25];
```


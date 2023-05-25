/* функция должна рассчитать общую сумму 
зарплат сотрудников и вернуть её */

"use strict";

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salaryArr = Object.values(salaries);
  for (const val of salaryArr) {
    totalSalary += val;
  }
  return totalSalary;
}

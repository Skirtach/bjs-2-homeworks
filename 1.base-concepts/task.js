
"use strict";

function solveEquation(a, b, c) {
 
  let d = Math.pow(b, 2)-4*a*c;
  if (d===0) {
    return [-b/(2*a)];
  }
  else if (d > 0){
    return [(-b + Math.sqrt(d)) /(2*a), (-b - Math.sqrt(d))/(2*a)];
  }

  return  []; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

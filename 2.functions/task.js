// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0; 
  let avg = 0;
  
  for (i=0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
     min = arr[i];
     }
 }
  avg = +(sum/arr.length).toFixed(2); 

  function worker2 (max, min) {


  }
 
 return { min: min, max: max, avg: avg };
}

// Задание 2


function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// console.log(worker([0, 0, 0])); // 0
// console.log(worker([-1, -100])); // -101

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  for ( i = 0; i < arrOfArr.length; i++) {
    
    let arrSum = func(arrOfArr[i]);
   
    if (arrSum > max) {
     max = arrSum;
    }
    
  }
  return max;
}
 
console.log(makeWork([[10, 20, 30],[-10, -20, -40]],worker2)) 

// Задание 3
function worker2(arr) {

  let max = -Infinity;
  let min = Infinity;
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
     
     if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
     }

  }
   diff = Math.abs(max - min) ;
 
  return diff;
  
}


 console.log(worker2([-1, -99]))
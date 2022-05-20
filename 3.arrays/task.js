function compareArrays(arr1, arr2) {
  

  let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

  return result


  return result; // boolean
}

function advancedFilter(arr) {
  

  let resultArr = arr.filter((num)=> num > 0).filter((num)=> num % 3 == 0).map((num)=> num*10);
  

  return resultArr; // array
}

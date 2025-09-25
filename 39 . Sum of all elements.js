function sumOfAllElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumOfAllElements([3, 2, 1, 2, 4]));

// using Reduce

function usingReduce(arr) {
  let result = arr.reduce((total, sum) => total + sum , 0);
  return result
}

console.log(usingReduce([3, 2, 1, 2, 4]))

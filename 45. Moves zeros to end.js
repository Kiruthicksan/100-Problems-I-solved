function MoveZerosToEnd(arr) {
  let inset = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[inset] = arr[i];
      inset++;
    }
  }

  while(inset < arr.length){
    arr[inset] = 0;
    inset++
  }

  return arr;
}

console.log(MoveZerosToEnd([0, 5, 0, 1, 2]));

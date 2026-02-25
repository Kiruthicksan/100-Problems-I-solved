function addorEven(n){
  if (!Number.isInteger(n)){
    return "Provide valid number"
  }

  return n % 2 === 0
}

console.log(addorEven(5))
console.log(addorEven("Hi"))  
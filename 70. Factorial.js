function factoial(n){
    if (typeof n !== "number" || n < 0  ){
        return "Provide valid number"
    }
    let sum = 1

    for (let i = n; i > 0; i--  ){
        sum *= i
    }

    return sum
}

console.log(factoial(10))
console.log(factoial("Hi"))
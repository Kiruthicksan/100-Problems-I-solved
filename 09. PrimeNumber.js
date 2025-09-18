function primeNumber(num){
    if (num <= 1){
     console.log("Not a PrimeNumber")

    for (let i = 2; i < num; i++){
         if (num % i === 0){
            return false
         }
    }

    return true
}}

primeNumber(9)
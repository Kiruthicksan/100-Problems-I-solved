function fibonacciSeries(n){
    let first = 0
    let second = 1

    let result =[first,second]

    for (let i = 2; i < n; i++){
        let next = first + second
       
        result.push(next) 
        first = second
        second = next
    }

    return result
}

console.log(fibonacciSeries(10))
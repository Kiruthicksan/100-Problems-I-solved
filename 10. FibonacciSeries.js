function fibonacci(n){
    let start = 0
    let end = 1
    let arr = [0,1]

    for (let i = 1; i < n; i++){
        let num = start + end
        start = end
        end = num
        arr.push(num)
    }

    return arr
}

console.log(fibonacci(10))


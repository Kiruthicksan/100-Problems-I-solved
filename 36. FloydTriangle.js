function floydTriangle(size){
    let currentNumber = 1
    for (let i = 1; i <= size; i++){
        let rows = ""
        
        for (let j = 1; j <= i; j++){
            rows += currentNumber + " "
            currentNumber++
        }

        console.log(rows)
    }
}

floydTriangle(5)
function invertedPyramid(size){
    for (let i = size; i >= 1; i--){
        let rows = ""
        for (let j = 1 ; j <= size - i; j++){
            rows += ' '
        }

        for (let k = 1; k <= 2 * i -1; k++ ){
            rows += "*"
        }

        console.log(rows)
    }
}

invertedPyramid(5)
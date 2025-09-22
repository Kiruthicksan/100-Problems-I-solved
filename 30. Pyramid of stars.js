function starPyrramid(size){
    for (let  i = 1; i <=  size; i++){
        let rows = ""
        for (let j  = 1; j <= size - i; j++){
            rows += " "
        }

        for (let k = 1; k <= i; k++){
            rows += "*"
        }

        for (let l = 1; l <= i - 1; l++){
            rows += "*"
        }

        console.log(rows) 
    }
}

starPyrramid(5)


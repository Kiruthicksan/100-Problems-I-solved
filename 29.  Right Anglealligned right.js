function rightAlignedRight(size){
    for(let i = 1; i <= size; i++){
        let rows =  ""
        for (let j = 1; j <= size - i; j++){
             rows +=" "
        }
        for (let k = 1; k <= i; k++){
            rows += "*"
        }
        console.log(rows)
    }
}

rightAlignedRight(5)
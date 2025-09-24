function hollowSquareOfStars(size){
    for (let i = 1; i <= size; i++){
        let rows = ""
        for (let j = 1; j <= size; j++){
            if (i == 1 || i === size || j === 1 || j=== size){
                rows += "* "
            }else{
                rows +="  "
            }
        }

        console.log(rows)
    }
}

hollowSquareOfStars(5)
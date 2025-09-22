function squareStars(size){
    for (let i = 0; i < size; i ++){
        let rows = ""
        for (let j = 0 ; j < size; j++){
            rows += "* "
        }
        console.log(rows)
    }
}

squareStars(5)
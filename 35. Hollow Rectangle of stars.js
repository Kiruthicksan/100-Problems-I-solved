function hollowRectangleOfStars(height, width){
    for (let i =  1; i<= height; i++){
        let pattern = ""

        for (let j = 1; j<= width; j++){
            if (i === 1 || i === height || j === 1 || j === width){
                pattern +="* "
            }else{
                pattern += "  "
            }
        }

        console.log(pattern)
    }
}

hollowRectangleOfStars(5,10)
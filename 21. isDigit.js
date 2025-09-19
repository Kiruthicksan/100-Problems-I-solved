function isDigit(str){
    return /^\d+$/.test(str)
}


console.log(isDigit("9034321"))
console.log(isDigit("90432edd"))
function convertToCamelCase(str){
    let separatedWords = str.toLowerCase().split(" ") // assuming words have space

    
    for (let i = 1; i < separatedWords.length; i++ ){
       separatedWords[i] = separatedWords[i].charAt(0).toUpperCase() + separatedWords[i].slice(1)
    }

    return separatedWords.join("")


}

console.log(convertToCamelCase("This is the camel case"))
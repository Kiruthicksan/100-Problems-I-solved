function longestWord(str){
    let splitted = str.split(' ')
    let longestWord = ""

    for (let word of splitted){
        let cleanWord = word.replace(/[^a-zA-Z]/g, "")
        if (cleanWord.length > longestWord.length){
            longestWord = cleanWord
        }
    }

    return longestWord
}


console.log(longestWord("Hello, you know what is longest word."))
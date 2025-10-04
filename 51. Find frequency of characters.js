function frequencyCharacters(str){
    let count = {}

    if (typeof str !== "string"){
        return "This is for text. So numbers or any other things not allowed"
    }

    for (let char of str.toLowerCase().replace(/[^a-z]/g, "")){
        count[char] = (count[char] || 0) + 1
    }

    return count
}

console.log(frequencyCharacters("Hello1"))
console.log(frequencyCharacters(123))
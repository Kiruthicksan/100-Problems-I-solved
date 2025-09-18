function frequentCharacter(str){
    let frequencyMap = {}
    let maxcount = 0
   

    for (let char of str){
        frequencyMap[char] = (frequencyMap[char] || 0) + 1
        if (frequencyMap[char] > maxcount){
            maxcount = frequencyMap[char]
           
        }
    }

    let result = []

    for (let char in frequencyMap){
        if(frequencyMap[char] === maxcount){
            result.push(char)
        }
    }


    return result
}

console.log(frequentCharacter("aabbc"))
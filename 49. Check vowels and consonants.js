function checkVowelsAndConsonants(str){
    let vowels = "aeiou"
    let vowelsCount = 0
    let consonantsCount = 0
    let fixedString = str.toLowerCase().replace(/[^a-z]/g, "")

    for (let char of fixedString){
        if(vowels.includes(char)){
            vowelsCount++
        }else{
            consonantsCount++
        }
    }

   return {
    vowels : vowelsCount,
    consonants : consonantsCount
   }
}


console.log(checkVowelsAndConsonants("javascript123"))   
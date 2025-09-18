function anagram(str1, str2){
    let w1 = str1.toLowerCase().split('').sort().join('')
    let w2 = str2.toLowerCase().split('').sort().join('')

    return w1 === w2
}


console.log(anagram("listen", "silent"))
console.log(anagram("Hello", 'World'))


// Frequency Method

function checkAnagram(str1, str2){
    if (str1.length !== str2.length) return false

    let count = {}

    for (let char of str1.toLowerCase()){
        count[char] = (count[char] || 0) + 1
    }

    for (let char of str2.toLowerCase()){
        if (!count[char]) return false

        count[char]--
    }

    return true
}


console.log(checkAnagram("Hello", 'World'))
console.log(checkAnagram("earth", "Heart"))
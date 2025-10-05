function rotation(str1,str2){
   if (str1.length !== str2.length) return "Both string should be in same length"

   return (str1 + str1).includes(str2)
}

console.log(rotation("abcd", "cdab"))
console.log(rotation("abcd", "bacd"))
console.log(rotation("abcd", "bcad"))
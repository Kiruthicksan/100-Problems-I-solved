function palindrome(str){
    let reversed = ""

    for (let i = str.length - 1 ; i >=0 ; i--){
        reversed += str[i]
    }
    return reversed === str
}

const res = palindrome("mam")
console.log(res)
function reverseSting(str){
    return str.split('').reverse().join('')
}

const res = reverseSting("Hello")

console.log(res)


// without builtin methods


function reverseAString(str){
    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }

    return reversed
}

console.log(reverseAString("JavaScript"))
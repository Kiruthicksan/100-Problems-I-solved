function reverseSting(str){
    return str.split('').reverse().join('')
}

const res = reverseSting("Hello")

console.log(res)


// without builtin methods


function reversedSting(str){
    if (typeof str !== 'string'){
        throw new console.error("Input must be String");
        
    }


    let reversed = ""

    for (let i = str.length; i >=0; i--){
        reversed += str[i]
    }
    return reversed
}

let res1 = reverseSting("Hello")

console.log(res1)
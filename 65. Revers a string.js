// inbuild methods

function revereseAString(str){
    return str.split("").reverse().join("")
}

console.log(revereseAString("Hello"))

// mathematics way

function reverse(str){
    let reverse =""
    for (let i = str.length -1  ; i >= 0; i--){
        reverse += str[i]
    }

    return reverse
}

console.log(reverse("Hello"))
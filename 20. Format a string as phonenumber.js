function formatPhoneNumber(str){
    let cleaned = str.replace(/\D/g, "")

    if(cleaned.length !== 10){
        return "Invalid phone number"
    }

    let firstHalf = cleaned.slice(0,5)
    let secondHalf = cleaned.slice(5)

    return `${firstHalf} ${secondHalf
        
    }`
}


const res = formatPhoneNumber("9043167406")
console.log(res)
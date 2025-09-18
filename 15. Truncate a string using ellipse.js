function truncateStr(str, maxLength){
 
    if (str.length > maxLength){
        let truncated = str.substring(0, maxLength - 3)
        return truncated + "..."

    }else{
        return str
    }
}

let res = truncateStr("This is long string. but still we give to check", 12)
console.log(res)
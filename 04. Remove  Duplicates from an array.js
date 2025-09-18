function removeDuplicate(arr){
    return arr.filter((item , index) => arr.indexOf(item) === index)
}


console.log(removeDuplicate([2,2,3,2,5,6]))
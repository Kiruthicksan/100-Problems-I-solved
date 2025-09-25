function checkSorted(arr){
    let isAscending = true
    let isDescending = true
    let isEqual = true
    for (let i = 0; i <arr.length -1; i++){
        if (arr[i] > arr[i + 1]){
            isAscending = false
        }

        if (arr[i] < arr[i + 1]){
            isDescending = false
        }

        if (arr[i] !== arr[i + 1]){
            isEqual = false
        }
    } 
    if (isEqual) return "Equal"
    if (isAscending) return "Ascending"
    if (isDescending) return "Descending"
   
    return "Not sorted"
}

console.log(checkSorted([1,2,3,4,5]))
console.log(checkSorted([5,4,3,2,1]))
console.log(checkSorted([2,2,2,2,2]))
console.log(checkSorted([5,1,2,3,4]))
function sortedAndRotated(arr){
    let n = arr.length
    let count = 0

    for (let i = 0; i < n; i++){
        if (arr[i] > arr[(i+1) % n]){
            count++
        }
    }

    return count === 1
}

console.log(sortedAndRotated([4,5,2,3,1]))
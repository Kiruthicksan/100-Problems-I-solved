function  missingNumber(arr,n){
    let total = n * (n + 1) / 2

    let sum = 0
    for (let i =0; i < arr.length; i++){
        sum += arr[i]
    }

    return total - sum
}

console.log(missingNumber([1,2,4,5],5))
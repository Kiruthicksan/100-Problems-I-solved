function maxNumber(arr){
    let max = arr[0]

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(maxNumber([1,4,5,7,3,4]))

// inbuilt version

function inbuiltMax(arr){
    return Math.max(...arr)
}

console.log(inbuiltMax([4,3,2,4,5,3]))


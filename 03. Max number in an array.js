function largestNumber(arr){
    let largest = arr[0]

    for (let num of arr){
        if (num > largest){
            largest = num
        }
    }

    return largest
    
}
console.log(largestNumber([1,4,5,7,3,4]))

// inbuilt version

function inbuiltMax(arr){
    return Math.max(...arr)
}

console.log(inbuiltMax([4,3,2,4,5,3]))


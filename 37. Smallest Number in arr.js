function smallestNumber(arr){
    let min = arr[0]

    for (let num of arr){
        if (num < min){
            min = num
        }
    }
    return min

}

console.log(smallestNumber([4,1,2,3,7]))
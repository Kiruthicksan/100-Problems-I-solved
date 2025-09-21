function secondLargestNumber(arr){

    if (arr.length < 2) return null
    let max = -Infinity
    let secondMax = -Infinity
    for (i = 0; i <arr.length; i++){
        if (arr[i] > max){
            secondMax = max
            max = arr[i]
        }else if (arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i]
        }
        
    }

    return secondMax
}

console.log(secondLargestNumber([4,6,2,1,3,5]))


function arr1(arr){
    const uniqueArray = Array.from(new Set(arr))

    let sorted = uniqueArray.sort((a,b) => b - a)

    return sorted[1]
   
}

console.log( arr1([3,3,4,10]))
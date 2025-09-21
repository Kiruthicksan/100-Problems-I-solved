function reverseArray(arr){
    let reversedArray = []

    for (let i = arr.length - 1 ; i >= 0; i-- ){
        reversedArray.push(arr[i])
    }

    return reversedArray
}

console.log(reverseArray([1,2,3,4,5]))

// two pointer approach

function reverseArrayusingTwoPointer(arr){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}

console.log(reverseArrayusingTwoPointer([1,2,3,4,5,5]))
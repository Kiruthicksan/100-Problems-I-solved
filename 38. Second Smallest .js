function secondSmallest(arr){
    let firstMin = Infinity
    let secondMin = Infinity

    for (let num of arr){
        if (num < firstMin){
             secondMin = firstMin
            firstMin = num
           
        }else if (num < secondMin && num!== firstMin){
            secondMin = firstMin
        }
    }

    return secondMin === Infinity ? null : secondMin
}

console.log(secondSmallest([4,2,1,2,3]))
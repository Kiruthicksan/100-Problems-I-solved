function countOccurences(arr){
    let counts = {}

    for (item of arr){
        co
        unts[item] = (counts[item] || 0) + 1
    }

    return counts
}

console.log(countOccurences([3,4,4,3,2,3,4,5,2]))
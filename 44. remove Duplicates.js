function removeDuplicates(arr){
    let count = {}
    
    for (let num of arr){
        count[num] = (count[num] || 0) + 1

    }

    return arr.filter(num => count[num] === 1)

   
}

console.log(removeDuplicates([3,4,3,2,4,1,7]))
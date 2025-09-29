function findDuplicates(arr){
    let count = {}
    let duplicates = []
  
    for (let num of arr){
        count[num] = (count[num] || 0) + 1

        if (count[num] === 2){
            duplicates.push(num)
        }
    }

    return duplicates

  
}

console.log(findDuplicates([4,3,2,1,8,2,2,4,3]))
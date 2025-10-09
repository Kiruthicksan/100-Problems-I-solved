function MajorityElement(nums){
     let count = {}
     let half = Math.floor(nums.length / 2)

    for (let num of nums){
        count[num] = (count[num]||0) + 1
        if(count[num] > half) return num
    }

   
}

console.log(MajorityElement([3,2,3]))
console.log(MajorityElement([2,2,1,1,1,2,2]))

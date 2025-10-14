function MajorityElement(nums){
    let freq = {}
    let  length = Math.floor(nums.length / 2)
   
    for (let i = 0; i < nums.length; i++){
       freq[nums[i]] = (freq[nums[i]] || 0) + 1
       if (freq[nums[i]] > length){
        return nums[i]
       }
    }
}

console.log(MajorityElement([3,2,3]))
console.log(MajorityElement([2,2,1,1,1,2,2]))



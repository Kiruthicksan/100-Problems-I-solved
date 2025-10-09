function removeDuplicates2(nums){
    let k = 2
    for (let i = 2; i < nums.length; i++){
        if (nums[k - 2] !== nums[i]){
            k++
            nums[k] = nums[i]
        }
    }
    return k
}

let res = removeDuplicates2([1,1,1,2,2,3])

console.log(res)
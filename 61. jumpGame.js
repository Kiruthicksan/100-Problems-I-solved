function jumpGame(nums) {
  let maxReach = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= maxReach){
      maxReach = i
    }

   
  } 
  return maxReach === 0
}

let res = jumpGame([2, 3, 1, 1, 4]);
console.log(res);

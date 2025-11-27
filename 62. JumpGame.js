function jumpGame(nums) {
  let farthest =0
  let jump = 0
  let end = 0

  for (let i = 0; i < nums.length - 1; i++) {
    
    farthest = Math.max(i + nums[i] , farthest)

    if (i === end){
        jump++
        end = farthest
    }
   
  } 
  return jump
}

let res = jumpGame([2,3,1,1,4]);
console.log(res);

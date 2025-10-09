function removeDuplicates(nums) {
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
}

console.log(removeDuplicates([1, 1, 2]));

let res2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log(res2);

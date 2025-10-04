function removeDuplicates(str) {
  let count = {};
  let originalArray = [];
  for (let char of str.toLowerCase()) {
    count[char] = (count[char] || 0) + 1;

    if (count[char] === 1) {
      originalArray.push(char);
    }
  }

  return originalArray.join("");
}

console.log(removeDuplicates("banana"));

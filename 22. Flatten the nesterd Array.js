function flattenArray(arr){
    return arr.flat(Infinity)
}

console.log(flattenArray([1,2,3,[3,5,2,[42,2]]]))
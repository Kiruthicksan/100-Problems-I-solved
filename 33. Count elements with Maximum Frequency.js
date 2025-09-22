let maxFrequencyElements = function(nums) {
    let count = {}


    for (let num of nums){
        count[num] = (count[num] | 0) + 1
    }

    let maxFreq = 0
    for (let key in count){
        if (count[key] > maxFreq){
            maxFreq = count[key] 
        }
    }

    let sum = 0

    for (let key in count){
        if (count[key] === maxFreq){
            sum += count[key]

        }
    }

    return sum

};

let res = maxFrequencyElements([1,2,2,3,1,4])
console.log(res)
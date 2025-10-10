function bestTimeToSellStock(arr){
    let minPrice = arr[0]
    let maxProfit = 0

    for (let i = 0; i < arr.length; i++){
        if(minPrice > arr[i]){
            minPrice = arr[i]
        }else{
            let profit = arr[i] - minPrice
            if (maxProfit < profit ){
                maxProfit = profit
            }
        }
    }

    return maxProfit
}

 
let res = bestTimeToSellStock([7,1,5,3,6,4])
console.log(res)
let res2 = bestTimeToSellStock([7,6,4,3,1]
)
console.log(res2)
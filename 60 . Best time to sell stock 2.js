function bestTimeToSellStock2(prices){
    let totalPrice = 0

    for (let i = 1; i < prices.length; i++){
        if (prices[i] > prices[i - 1]){
            totalPrice += prices[i] - prices[i - 1]
        }
        }

    

    return totalPrice
}


console.log(bestTimeToSellStock2([7,1,5,3,6,4]))
function averageOfElements(arr){
    let sum = 0
    
    for (let i = 0; i <arr.length; i++){
        sum += arr[i]

    }
   let average  = sum / arr.length
    return average
}

console.log(averageOfElements([80,40,50,30,20]))

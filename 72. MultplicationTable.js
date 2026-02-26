function multplicationTable(n, t){
    for (let i = 1 ; i <= t; i++){
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

multplicationTable(5, 10)
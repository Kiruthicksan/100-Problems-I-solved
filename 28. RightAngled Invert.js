
function rightAngleTrinagleInvert(n){
    for (let i = 1 ; i <=n; i++){
        let rows = ""
        for (let j = n; j >=i; j--){
            rows += "*"
        }
        console.log(rows)
    }
}

rightAngleTrinagleInvert(5)
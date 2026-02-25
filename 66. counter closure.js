function createCounter(){
    let count = 0

    function increment (){
        count++
        console.log(count)
    }

    function decrement (){
        count--
        console.log(count)
    }

    function reset (){
        count = 0
        console.log(count)
    }

    return {increment , decrement, reset}
}

const counter = createCounter()

counter.increment()
counter.increment()
counter.decrement()
counter.increment()
counter.reset()
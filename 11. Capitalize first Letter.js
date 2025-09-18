function capitalize(str){
    let splittedwords = str.split(' ')
    let result = []
    for (let word of splittedwords){
         let capitalize = word[0].toUpperCase() + word.slice(1).toLowerCase() 
         result.push(capitalize)
    }

    console.log(result.join(' '))
    
   

    

}

capitalize("hello this is first word")
function removeelement(str, l) {
  let removedWord = str.split("").filter((char) => char !== l);
  return removedWord.join("");
}

console.log(removeelement("hello", "l"))


// without methods


function removeelementWithoutMethods(str, chars){
    let removedWord = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] !== chars){
            removedWord += str[i]
        }

    }

    return removedWord

   
}

console.log(removeelementWithoutMethods("hello", "l"))



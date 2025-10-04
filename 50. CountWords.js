function countWords(str) {
  let splittedWords = str.split(/[ .,]/);

  let wordsCount = splittedWords.length;
  return wordsCount;
}

console.log(countWords("Hello this is five words.six,and eight"));

function manualWay(str){
  let count =0
  let inWord = false

  for (let char of str.toLowerCase()){
    if(char >= 'a' && char <='z'){
      if(!inWord){
        count++
        inWord =true
      }
    }else{
      inWord = false
    }
  }
  return count
}

console.log(manualWay("Hello World"))

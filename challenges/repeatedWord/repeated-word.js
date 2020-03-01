'use strict';
function repeatedWord(str){
  let string = str.toLowerCase().split(' ');
  let counter =0;
  for(let i = 0 ; i<string.length ; i++){
    counter = 1;
    for(let j = i + 1 ; j<string.length; j++){
      if(string[i] === string[j]){
        counter++;
        string [j] = '0';
      }
    }
    if(counter >1 && string[i]!=='0'){
      return string[i];
    }
  }
}
let string = repeatedWord('Once upon a time, there was a brave princess who...');
console.log('repeated word ', string);
module.exports=repeatedWord;
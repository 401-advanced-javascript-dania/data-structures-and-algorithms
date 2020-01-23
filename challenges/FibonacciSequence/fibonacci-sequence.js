'use strict';
function fibSeqfunc(number){
    let array = [0, 1];
    for (let i = array.length; i < number + 1; i++){
        let summtion = array[i - 2] + array[i -1];
      array.push(summtion)
    }
   return array
  }
module.exports=fibSeqfunc;
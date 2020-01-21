'use strict';
function binaryArraySearch(array, value) {
    let beginning=0
    let theEndOfIt=array.length-1
    while (beginning <= theEndOfIt) {
        let middle = Math.floor((beginning + theEndOfIt) / 2);
        if (array[middle] === value) 
        return middle;
        else if (array[middle] < value)
            beginning = middle + 1;
        else
            theEndOfIt = middle - 1;
    }
    return -1;
}
module.exports=binaryArraySearch
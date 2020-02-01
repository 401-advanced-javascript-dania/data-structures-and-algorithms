

function insertShiftArray(array, value) {
  let sign = Math.floor(array.length / 2);
  let theNewArray = new Array(array.length + 1);
  for (let i = 0; i <= sign; i++) {
    if (i === sign) {
      theNewArray[i] = value;
    } else {
      theNewArray[i] = array[i];
    }
  }
  for (let j = sign; j <= array.length - 1; j++) {
    theNewArray[j + 1] = array[j];
  }
  return theNewArray;
}
module.exports = insertShiftArray ;
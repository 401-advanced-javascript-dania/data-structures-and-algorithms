
let array = [1,2,3,4];
let val = 5;
function insertShiftArray(arr,value){

  for(let i = 0;i < arr.length;i++){
    if(value.length === 1){
      let middle = arr[Math.round((arr.length - 1) / 2)];
      arr[arr.length - 1] = value;
    }
    // console.log(middle)
    // console.log(arr[i],value);

  }
}
console.log(insertShiftArray(array,val));
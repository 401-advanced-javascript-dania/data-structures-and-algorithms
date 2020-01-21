'use strict';
const arithmetic=module.exports={}
arithmetic.binarySearch((arr,val)=>{
for(let i=0;i<=arr.length;i++){
    if(arr[i]=== val){
        output=i
        break
    }else{
        output=-1
    }
    return output
}
})

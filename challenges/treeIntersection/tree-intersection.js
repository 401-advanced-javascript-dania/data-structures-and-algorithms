
class Node {
  constructor(value,leftChild = null,rightChild = null){
    this.value = value;
    this.rightChild = rightChild;
    this.leftChild = leftChild;
  }
}
class BT {
  constructor(root = null){
    this.root = root;
  }
  //read the data=>go left=>go right
  preOrder(){
    let data = [];
    let _read = (node)=>{
      data.push(node.value);
      if(node.leftChild) _read(node.leftChild);
      if(node.rightChild) _read(node.rightChild);
    };
    _read(this.root);
    return data;
  }
  //go left=>read the data=>go right
  inOrder(){
    let data = [];
    let _read = (node)=>{
      if(node.leftChild) _read(node.leftChild);
      data.push(node.value);
      if(node.rightChild) _read(node.rightChild);
    };
    _read(this.root);
    return data;
  }
  //go left=>go right=>read the data
  postOrder(){
    let data = [];
    let _read = (node)=>{
      if(node.leftChild) _read(node.leftChild);
      if(node.rightChild) _read(node.rightChild);
      data.push(node.value);
    };
    _read(this.root);
    return data;
  }
  insertion(arr){
    for(let i = 1;i < arr.length;i++){
      let j = i - 1;
      let temp = arr[i];
      while(j >= 0 && temp < arr[j]){
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
  tree_intersection(a, b) {
    let result = [];
    while( a.length > 0 && b.length > 0 )   {  
      if      (a[0] < b[0] ){ a.shift();
      } else if (a[0] > b[0] ){ b.shift(); 
      } else  {
        result.push(a.shift());
        b.shift();
      }
    }
    
    return result;
  }


}
module.exports={Node,BT};


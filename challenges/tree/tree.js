'use strict';
class Node {
constructor(value,leftChild=null,rightChild=null){
    this.value=value;
    this.rightChild=rightChild;
    this.leftChild=leftChild;
 }
}
class BT {
    constructor(root=null){
        this.root=root
    }
    //read the data=>go left=>go right
    preOrder(){
let data =[];
let _read=(node)=>{
data.push(node.value);
if(node.leftChild) _read(node.leftChild)
if(node.rightChild) _read(node.rightChild)
}
_read(this.root)
return data;
    }
      //go left=>read the data=>go right
    inOrder(){
let data =[];
let _read=(node)=>{
if(node.leftChild) _read(node.leftChild)
data.push(node.value);
if(node.rightChild) _read(node.rightChild)
}
_read(this.root)
return data;
    }
       //go left=>go right=>read the data
    postOrder(){
let data =[];
let _read=(node)=>{
if(node.leftChild) _read(node.leftChild)
if(node.rightChild) _read(node.rightChild)
data.push(node.value);
}
_read(this.root)
return data;
    }
}
module.exports={Node,BT}
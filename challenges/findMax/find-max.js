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
  findMax(root){
    if(root===null){
      return null;
    }
    let current=root.value;
    let left = this.findMax(root.leftChild);
    let right = this.findMax(root.rightChild);
    if(left>current){
      current=left;
    }
    if(right>current){
      current=right;
    }
    return current;
  }

}
let tree = null;

let valueOne = new Node(1);
let valueTwo = new Node(2);
let valueThree = new Node(3);
let valueFour = new Node(4);
let valueFive = new Node(5);
let valueSix = new Node(6);
let valueSeven = new Node(7);

valueOne.leftChild = valueThree;
valueOne.rightChild = valueSix;
valueThree.leftChild = valueFour;
valueThree.rightChild = valueTwo;
valueSix.leftChild = valueSeven;
valueSix.rightChild = valueFive;
tree = new BT(valueOne);
let value=tree.findMax(valueOne);
console.log('value',value);

module.exports = {Node,BT};
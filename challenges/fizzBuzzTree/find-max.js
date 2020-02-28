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
    let left = this.findMax(root.leftChild)
    let right = this.findMax(root.rightChild)
    if(left>current){
      current=left;
    }
    if(right>current){
      current=right
    }
    return current
  }

}


module.exports = {Node,BT,BST};
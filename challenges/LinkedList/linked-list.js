
const Node = require('./node.js');
class LinkedList {
  constructor(){
    this.head = null;
  }
  append (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this ;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  kthFromeEnd(k){
    let currentNode = this.head;
    let length = 0;
    while(currentNode){
      length++;
      currentNode = currentNode.next;
    }
    let dnode = length - 1 - k;
    if(dnode < 0 || k < 0){
      return 'exception';
    }
    currentNode = this.head;
    while(dnode > 0){
      dnode--;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
module.exports = LinkedList;
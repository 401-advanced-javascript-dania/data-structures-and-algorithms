
const Node = require('../linkedList/node.js');
class LinkedList {
  constructor(){
    this.head = null;
  }
  insert (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  mergeLists(list1, list2){
    let currentNodeOne = list1.head;
    let currentNodeTwo = list2.head;
    while(currentNodeOne || currentNodeTwo){
      if(currentNodeOne){
        this.insert(currentNodeOne.value);
        currentNodeOne = currentNodeOne.next;
      }
      if(currentNodeTwo){
        this.insert(currentNodeTwo.value);
        currentNodeTwo = currentNodeTwo.next;
      }

    }
    return this;
  }



}
module.exports = LinkedList;
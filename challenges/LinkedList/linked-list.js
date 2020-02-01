
const Node = require('./node.js');
class LinkedList {
  constructor(){
    this.head = null;
  }
  append (value){
    let node  = new Node(value);
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
  insertBefore(value, newVal){
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let previouseNode = null;

    while(currentNode){
      if(currentNode.value === value){
        if(previouseNode === null){
          this.head = newNode;
        }else{
          previouseNode.next = newNode;
        }newNode.next = currentNode;
        break;
      }
      previouseNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertAfter(value,newVal){
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let nextValue = null;
    while(currentNode){
      if(currentNode.value === value){
        nextValue = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextValue;
      }currentNode = currentNode.next;

    }
  }
}
// let list =new LinkedList();
// list.append('first value');
// list.append('second value');
// list.insertBefore('first value','third value')
// console.log('list',list)
module.exports = LinkedList;
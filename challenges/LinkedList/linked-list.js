'use strict';
const Node = require('./node.js');
class LinkedList {
    constructor(){
        this.head=null;
    }
    append (value){
        this.head =new Node(value,this.head);
        // if(!this.head){
        //     this.head= node;
        // }
        // let currentNode =this.head;
        // while(currentNode.next){
        //     currentNode=currentNode.next
        // }
        // currentNode.next=node;
        // return this;
    }
    insertBefore(value, newVal){
        let currentNode;
        let previouseNode;
        let node =new Node(newVal);

        if(!this.head){
         this.head=node
        }
        currentNode=this.head;
        while(currentNode.value!== value){
            previouseNode=currentNode;
            currentNode=currentNode.next;
        }
        node.next=currentNode;
        previouseNode.next=node;

    }
}
let list =new LinkedList();
list.append('first value');
list.append('second value');
list.insertBefore('first value','third value')
console.log('list',list)
module.exports=LinkedList
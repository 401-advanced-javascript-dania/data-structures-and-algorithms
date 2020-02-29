'use strict'
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LL{
    constructor(){
        this.head=null;
    }
    insert(value){
        let node =new Node (value);
        if(!this.head){
            this.head=node;
            return this;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode=currentNode.next;
        }
        currentNode.next=node;
        return this;
    }
    read(key){
        if(!this.head) console.log('No nothing is here');
        else{
            let currentNode = this.head;
            while(currentNode){
                
                currentNode.value.forEach((val,i)=>{
                    if(val=== key){
                        console.log(currentNode.value[++i])
                    }
                });
                currentNode = currentNode.next;
            }
        }
    }
    include(key){
      let currentNode = this.head;
      while(currentNode){
         currentNode.value.forEach((val,i)=>{
          if(val=== key){   
              console.log('true')
              }                 
            });
            currentNode = currentNode.next;
            }
        }
}

class hashTable{
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }
    hash(key){
        return key.split('').reduce((acc,val)=>{
            return acc+val.charCodeAt(0);
        },0) * 19 % this.size;
    }
    add(key,value){
       let hashedKey = this.hash(key);
       if(! this.map[hashedKey]){
           let list = new LL ();
           list.insert([key,value])
           this.map[hashedKey] = list;
       }else{
           this.map[hashedKey].insert([key,value]);
       }
    }
    get(key){
        hashmap.map.forEach(value=>{
            value.read(key);
        })
    }

    contains(key){
        
       let data=hashmap.map.forEach(value=>{
           console.log('value',value)
         value.include(key)
        })
        switch(data) {
            case true:
              console.log('true')
              break;
            case undefined:
                console.log('false')
                break;
          }
        
    }
}
let list = new LL();
list.insert(1);
list.insert(2);
list.insert(3);
// console.log('list',list.head);
let hashmap = new hashTable(1024);
let hashedKey = hashmap.hash('dania')
// console.log('hashedKey',hashedKey);
hashmap.add('name','lolo1');
hashmap.add('cool','lolo2');
hashmap.add('colo','lolo3');
// hashmap.map.forEach((value,i)=>{

//     // console.log(i);
//     // let boolean=
//      value.include('cool');
//     // console.log('boolean',boolean)
// })
hashmap.get('name');
// hashmap.contains('cool')
module.exports=hashTable;

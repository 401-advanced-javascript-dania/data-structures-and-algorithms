'use strict';
class Queue {
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
        this.top = null;

    }
    enqueue(value){
this.stack1.push(value);
this.top = value;

    }
    denqueue(){
if (this.stack2.length === 0){
    if(this.stack1.length === 0){
        return 'there is no value in the queue'
    }
    while(this.stack1.length > 0){
        let value =this.stack1.pop();
        this.stack2.push(value)
    }
}return this.stack2.pop();
    }
}
module.exports=Queue;
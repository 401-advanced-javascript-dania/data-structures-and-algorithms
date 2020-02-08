
class PseudoQueue {
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
    this.top = null;

  }
  enqueue(value){
    this.stack1.push(value);
    this.top = value;

  }
  dequeue(){
    if (this.stack2.length === 0){
      if(this.stack1.length === 0){
        return 'there is no value in the queue';
      }}
    while(this.stack1.length > 0){
      let value = this.stack1.pop();
      this.stack2.push(value);
    }

    const data = this.stack2.pop();
    while(this.stack2.length > 0){
      let value = this.stack2.pop();
      this.stack1.push(value);
    }
    return data;
  }
}
module.exports = PseudoQueue;
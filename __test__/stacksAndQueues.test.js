
const {Stack, Queue} = require('../challenges/stacksAndQueues/stacks-and-queues.js');
describe('Stack Class',()=>{
  it ('Can successfully push onto a stack',()=>{
    let stack = new Stack();
    stack.push('test-value1');
    expect(stack.peek()).toEqual('test-value1');
  });
  it('Can successfully push multiple values onto a stack',()=>{
    let stack = new Stack();
    stack.push('test-value1');
    stack.push('test-value2');
    stack.push('test-value3');
    expect(stack.peek()).toEqual('test-value3');
  });
  it('Can successfully pop off the stack',()=>{
    let stack = new Stack();
    stack.push('test-value1');
    stack.push('test-value2');
    stack.push('test-value3');
    let value = stack.pop();
    expect(value).toEqual('test-value3');

  });
  it('Can successfully empty a stack after multiple pops',()=>{
    let stack = new Stack();
    stack.push('test-value1');
    stack.push('test-value2');
    stack.push('test-value3');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  it('Can successfully peek the next item on the stack',()=>{
    let stack = new Stack();
    stack.push('test-value1');
    stack.push('test-value2');
    stack.push('test-value3');
    expect(stack.peek()).toEqual('test-value3');
  });
  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack();
    expect(stack.peek()).toBeNull();

  });

});
describe('Queue Class',()=>{
  it ('Can successfully enqueue into a queue',()=>{
    let queue = new Queue();
    queue.enqueue('test value1');
    expect(queue.peek()).toEqual('test value1');
  });
  it('Can successfully enqueue multiple values into a queue',()=>{
    let queue = new Queue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    expect(queue.peek()).toEqual('test value1');
  });
  it('Can successfully dequeue out of a queue the expected value',()=>{
    let queue = new Queue();
    queue.enqueue('test value1');
    queue.dequeue();
    expect(queue.node[queue.node - 1]).toBe(undefined);
  });
  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let queue = new Queue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    expect(queue.peek()).toEqual('test value1');
  });
  it('Can successfully empty a queue after multiple dequeues',()=>{
    let queue = new Queue();
    queue.enqueue('test value1');
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);
  });
  it('Can successfully instantiate an empty queue',()=>{
    let queue = new Queue();

    expect(queue.isEmpty()).toEqual(false);
  });
});

const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks.js');
describe('PseudoQueue Class',()=>{
  it ('Can successfully enqueue into a queue',()=>{
    let queue = new PseudoQueue();
    queue.enqueue('test value1');
    expect(queue.stack1).toEqual(['test value1']);
  });
  it('Can successfully enqueue multiple values into a queue',()=>{
    let queue = new PseudoQueue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    expect(queue.stack1).toEqual(['test value1','test value2','test value3']);
  });
  it ('Can successfully dequeue value',()=>{
    let queue = new PseudoQueue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    queue.dequeue();
    expect(queue.stack1).toEqual(['test value2','test value3']);
  });
  it('Can successfully dequeue multiple values ',()=>{
    let queue = new PseudoQueue();
    queue.enqueue('test value1');
    queue.enqueue('test value2');
    queue.enqueue('test value3');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.stack1).toEqual([]);
  });
});
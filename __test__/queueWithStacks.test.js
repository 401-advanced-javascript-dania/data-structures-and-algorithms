'use strict';
const Queue = require('../challenges/queueWithStacks/queue-with-stacks.js')
describe('Queue Class',()=>{
    it ('Can successfully enqueue into a queue',()=>{
        let queue = new Queue();
        queue.enqueue('test value1');
        expect(queue.stack1).toEqual(['test value1']);
      })
      it('Can successfully enqueue multiple values into a queue',()=>{
        let queue = new Queue();
        queue.enqueue('test value1');
        queue.enqueue('test value2');
        queue.enqueue('test value3');
        expect(queue.stack1).toEqual(['test value1','test value2','test value3']);
      });
})
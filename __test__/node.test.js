
const Node = require('../challenges/linkedList/node.js');
describe('Node Module',()=>{
  it ('constructor',()=>{
    let value = 'value one ';
    let node = new Node (value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();

  });
});
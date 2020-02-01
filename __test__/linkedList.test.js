
const LL = require('../challenges/LinkedList/linked-list.js');
describe('LL Module',()=>{
  it ('constructor',()=>{
    let list = new LL();
    expect(list.head).toBeNull();

  });
  it('append',()=>{
    let list = new LL();
    let initialValue = 'first value';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.value.next).toBeAnObject;
    let nextValue = 'second value';
    list.append(nextValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next.value).toEqual(nextValue);

  });
  it('Where k is greater than the length of the linked list',()=>{
    let list = new LL();
    list.append(1);
    list.append(3);
    expect(list.kthFromeEnd(5)).toMatch('exception');

  });
  it('Where k and the length of the list are the same',()=>{
    let list = new LL();
    list.append(1);
    list.append(3);
    expect(list.kthFromeEnd(2)).toMatch('exception');
  });
  it('Where k is not a positive integer',()=>{
    let list = new LL();
    list.append(1);
    list.append(3);
    expect(list.kthFromeEnd(-2)).toMatch('exception');
  });
  it('Where the linked list is of a size 1',()=>{
    let list = new LL();
    list.append(5);
    expect(list.kthFromeEnd(1)).toMatch('exception');
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
    let list = new LL();
    list.append(1);
    list.append(3);
    list.append('5');
    list.append(7);
    list.append(9);
    expect(list.kthFromeEnd(2)).toMatch('5');
  });
});
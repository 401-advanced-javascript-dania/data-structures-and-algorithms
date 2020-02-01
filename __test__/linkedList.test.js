
const LL = require('../challenges/linkedList/linked-list.js');
describe('LL Module',()=>{
  it ('constructor',()=>{
    let list = new LL();
    expect(list.head).toBeNull();

  });
  it('insert()',()=>{
    let list = new LL();
    let initialValue = 'first value';
    list.insert(initialValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).toBeNull;
  });
  it ('includes()',()=>{
    let value = 'testValue';
    let list = new LL();
    list.insert(value);

    expect(list.includes(value)).toEqual(true);
  });
  it('toString()',()=>{
    let list = new LL();
    let initialValue = 'first value';
    list.insert(initialValue);
    let secondValue = 'second value';
    list.insert(secondValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).toBeAnObject;
    expect(list.toString()).toMatch('first value -> second value -> NULL');
  });
});
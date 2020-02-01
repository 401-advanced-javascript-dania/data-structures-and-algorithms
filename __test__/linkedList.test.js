
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
    expect(list.head.value.next).toBeAnObject;
    // console.log('list',list)
  });
  it ('includes()',()=>{
    let value = 'testValue';
    let list = new LL();
    list.includes(value);
    expect(list.head.value).toEqual(value);
  });
  it('toString()',()=>{
    let list = new LL();
    let initialValue = 'first value';
    list.insert(initialValue);
    let secondValue = 'second value';
    list.insert(secondValue);
    list.toString();
    console.log('list',list);


  });
});
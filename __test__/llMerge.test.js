
const LL = require('../challenges/llMerge/ll-merge.js');
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
  it('merge list()',()=>{
    let list = new LL();
    const list1 = new LL();
    const list2 = new LL();
    list1.insert(1);
    list2.insert(2);
    list1.insert(3);
    list2.insert(4);
    list.mergeLists(list1,list2);
    expect(list.head.next.value).toEqual(2);

  });
});
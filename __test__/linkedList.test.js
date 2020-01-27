'use strict';
const LL=require('../challenges/linkedList/linked-list.js');
describe('LL Module',()=>{
    it ('constructor',()=>{
        let list= new LL();
        expect(list.head).toBeNull();

    })
//     it('append',()=>{
// let list = new LL();
// let initialValue ='first value';
// list.append(initialValue);
// expect(list.head.value).toEqual(initialValue)
// expect(list.head.value.next).toBeAnObject;
// let nextValue ='second value';
// list.append(nextValue);
// expect(list.head.value).toEqual(initialValue)
// expect(list.head.value.next.value).toEqual(nextValue)

    // })
})
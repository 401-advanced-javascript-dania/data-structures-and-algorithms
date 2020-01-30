'use strict';
const LL=require('../challenges/linkedList/linked-list.js');
describe('LL Module',()=>{
    it ('constructor',()=>{
        let list= new LL();
        expect(list.head).toBeNull();

    })
    it('append()',()=>{
let list = new LL();
let initialValue ='first value';
list.append(initialValue);
expect(list.head.value).toEqual(initialValue)
expect(list.head.value.next).toBeAnObject;
    })
   
    it('insertBefore()',()=>{
        let list = new LL();
        let initialValue ='first value';
        list.append(initialValue);
        list.insertBefore(initialValue,'second value')
        expect(list.head.value).toEqual('second value')
    })
    it('insertAfter()',()=>{
        let list = new LL();
        let initialValue ='first value';
        list.append(initialValue);
        list.insertAfter(initialValue,'second value')
        expect(list.head.value).toEqual('first value')
        expect(list.head.value.next).toBeAnObject;
    })

})
'use strict';
let hashTable=require('../challenges/hashtable/hashtable.js');
describe('Hash Table',()=>{
    it('can hash the key',()=>{
        let hashmap = new hashTable(1024);
        let hashedKey = hashmap.hash('dania')
        console.log('hashedKey',hashedKey);
        expect(hashedKey).toEqual(455);
        hashmap.add('name','dania');
        hashmap.add('restful','code');
        hashmap.add('fluster','css');
    })
    it('can add the key and the value',()=>{
        let hashmap = new hashTable(1024);
        hashmap.add('name','dania');
        hashmap.add('restful','code');
        hashmap.add('fluster','css');
        hashmap.map.forEach((value,i)=>{
            console.log('value',value.head.next)});
    })
    it('can get the key and returns the value from the table.',()=>{
        let hashmap = new hashTable(1024);
        hashmap.add('name','dania');
        hashmap.add('restful','code');
        hashmap.add('fluster','css');
       console.log('hh',hashmap.get('restful'))
    })
    it('can contains the key and returns a boolean, indicating if the key exists in the table already',()=>{
        let hashmap = new hashTable(1024);
        hashmap.add('name','dania');
        hashmap.add('restful','code');
        hashmap.add('fluster','css');
       console.log('hh',hashmap.contains('restful'))
    })
})
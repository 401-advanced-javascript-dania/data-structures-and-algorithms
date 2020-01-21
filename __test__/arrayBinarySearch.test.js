'use strict';
const arithmetic=require('../challenges/arrayBinarySearch/array-binary-search.js')
describe('Arithmetic Module',()=>{
    it('validate if the function return -1 if the value isnot in the array',()=>{
        expect(arithmetic([11,22,33,44,55,66,77], 90)).toEqual(-1)
    })
    it('validate if the function return the index of the value in the array if the value is in the array',()=>{
        expect(arithmetic([4,8,15,16,23,42], 15)).toEqual(2)
    })
  
})
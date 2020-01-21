'use strict';
const arithmetic=require('../challenges/arrayBinarySearch')
describe('Arithmetic Module',()=>{
    it('validate it will retern -1 if the number is not in the array',()=>{
        expect(arithmetic.binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
    })
})
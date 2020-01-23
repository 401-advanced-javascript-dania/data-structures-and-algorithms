'use strict';
let arithmetic = require('../challenges/FibonacciSequence/fibonacci-sequence.js');
describe('Fibonacci Sequence Module',()=>{
    it('vaildate the output ',()=>{
        expect(arithmetic(10).length).toEqual(11)
    })
    it('validate tho array outpu',()=>{
        expect(arithmetic(10)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ])

    })
})
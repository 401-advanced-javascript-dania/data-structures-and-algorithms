const arithmetic = require('../challenges/arrayShift/array-shift.js');
describe('Arithmetic Module',()=>{
  it('validate if the function return a new array that added the value to it middle ',()=>{
    expect(arithmetic([2,4,6,8], 5).length).toEqual(5);
  });
  it('validate if the function return a new array that added the value to it middle ',()=>{
    let array = arithmetic([2,4,6,8], 5);
    expect(array[2]).toEqual(5);
  });

});

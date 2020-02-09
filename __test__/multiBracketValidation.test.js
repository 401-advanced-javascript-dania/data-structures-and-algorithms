
const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');
describe('multiBracketValidation ',()=>{
  it('return true to right formate of bracket',()=>{
    expect(multiBracketValidation('{}')).toEqual(true);
  });

  it('return true to right formate of bracket',()=>{
    expect(multiBracketValidation('{}(){}')).toEqual(true);
  });

  it('return true to right formate of bracket',()=>{
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
  });

  it('return false to wrong formate of bracket',()=>{
    expect(multiBracketValidation('[({}]')).toEqual(false);
  });

  it('return false to wrong formate of bracket',()=>{
    expect(multiBracketValidation('(](')).toEqual(false);
  });

  it('return false to wrong formate of bracket',()=>{
    expect(multiBracketValidation('{(})')).toEqual(false);
  });

  it('return false to empty string',()=>{
    expect(multiBracketValidation('')).toEqual(false);
  });
});
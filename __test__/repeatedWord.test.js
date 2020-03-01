'use strict';
const repeadtedWord = require('../challenges/repeatedWord/repeated-word.js');
describe('Repeated Word Function',()=>{
  it('can return the repeated word',()=>{
    let repeatedOne=repeadtedWord('Once upon a time, there was a brave princess who...');
    expect(repeatedOne).toEqual('a');
  });
});
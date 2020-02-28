
const {Node,BT} = require('../challenges/findMax/find-max.js');


describe('Binary Tree ',()=>{
  let tree = null;
  let valueOne = new Node(1);
  let valueTwo = new Node(2);
  let valueThree = new Node(3);
  let valueFour = new Node(4);
  let valueFive = new Node(5);
  let valueSix = new Node(6);
  let valueSeven = new Node(7);

  valueOne.leftChild = valueThree;
  valueOne.rightChild = valueSix;
  valueThree.leftChild = valueFour;
  valueThree.rightChild = valueTwo;
  valueSix.leftChild = valueSeven;
  valueSix.rightChild = valueFive;
  tree = new BT(valueOne);
  
  it('can find the maximum value',()=>{
    let maxValue = tree.findMax(valueOne);
    expect(maxValue).toEqual(7);
  });
});

'use strict';
const {Node,BT} = require('../challenges/treeIntersection/tree-intersection.js');
describe('Intersection Two BT',()=>{
  it('can find the common values in two binary tree',()=>{
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
    
    let tree2 = null;
    let valueEight = new Node(8);
    let valuNine = new Node(9);
    let valueTen = new Node(10);
    let valueEleven = new Node(11);
    
    valueEight.leftChild = valueTen;
    valueEight.rightChild = valueSix;
    valueTen.leftChild = valueEleven;
    valueTen.rightChild = valuNine;
    valueSix.leftChild = valueSeven;
    valueSix.rightChild = valueFive;
    tree2 = new BT(valueEight);
    let tree3=null;
    tree3=new BT();
    let array1=tree.preOrder();
    let array2=tree2.preOrder();
    console.log('array1',array1);
    console.log('array2',array2);
    let sortarray1=tree.insertion(array1);
    let sortarray2= tree.insertion(array2);
    let intersection=tree.tree_intersection(sortarray1,sortarray2);
    console.log('intersection',intersection);
    expect(intersection).toEqual([5,6,7]);  
  });
});
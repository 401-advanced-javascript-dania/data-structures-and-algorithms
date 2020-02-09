
const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter.js');
describe('AnimalShelter Class',()=>{
  it('it can enqueue cat',()=>{
    let queue = new AnimalShelter();
    let cat1 = {name:'dodo',type:'cat'};
    queue.enqueue(cat1);
    expect(queue.catData[0].name).toEqual('dodo');
    expect(queue.catData[0].type).toEqual('cat');

  });
  it('it can dequeue cat',()=>{
    let queue = new AnimalShelter();
    let cat1 = {name:'dodo',type:'cat'};
    let cat2 = {name:'meme',type:'cat'};
    queue.enqueue(cat1);
    queue.enqueue(cat2);
    queue.dequeue({type:'cat'});
    expect(queue.catData[0].name).toEqual('meme');
    expect(queue.catData[0].type).toEqual('cat');

  });
  it('it can enqueue dog',()=>{
    let queue = new AnimalShelter();
    let dog1 = {name:'dodo',type:'dog'};
    queue.enqueue(dog1);
    expect(queue.dogData[0].name).toEqual('dodo');
    expect(queue.dogData[0].type).toEqual('dog');

  });
  it('it can dequeue dog',()=>{
    let queue = new AnimalShelter();
    let dog1 = {name:'dodo',type:'dog'};
    let dog2 = {name:'meme',type:'dog'};
    queue.enqueue(dog1);
    queue.enqueue(dog2);
    queue.dequeue({type:'dog'});
    expect(queue.dogData[0].name).toEqual('meme');
    expect(queue.dogData[0].type).toEqual('dog');

  });
  it('it wont dequeue anthing if it is not dog or cat',()=>{
    let queue = new AnimalShelter();
    let dog1 = {name:'dodo',type:'dog'};
    let dog2 = {name:'meme',type:'dog'};
    queue.enqueue(dog1);
    queue.enqueue(dog2);
    queue.dequeue({type:'ddddd'});
    expect(queue.dogData[0].name).toEqual('meme');
    expect(queue.dogData[0].type).toEqual('dog');

  });
  it('it wont enqueue anthing if it is not dog or cat',()=>{
    let queue = new AnimalShelter();
    let anyrhing = {name:'dodo',type:'ddd'};
    queue.enqueue(anyrhing);
    expect(queue.catData).toEqual([]);
    expect(queue.dogData).toEqual([]);

  });
});
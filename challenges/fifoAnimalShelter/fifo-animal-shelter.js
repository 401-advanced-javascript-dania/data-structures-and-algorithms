
class AnimalShelter {
  constructor(){
    this.dogData = [];
    this.catData = [];
  }
  enqueue(animal){
    if(animal.type === 'dog'){
      this.dogData.unshift(animal);
    }else if (animal.type === 'cat'){
      this.catData.unshift(animal);
    }else {
      return null;
    }}
  dequeue(pref){
    if(pref.type === 'dog'){
      this.dogData.pop();
      return this.catData;
    }else if(pref.type === 'cat'){
      this.catData.pop();
      return this.catData;
    }else{
      return null;
    }
  }

}
module.exports = AnimalShelter;
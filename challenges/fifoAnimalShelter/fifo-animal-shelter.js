
class AnimalShelter {
  constructor(){
    this.dogData = [];
    this.catData = [];
  }
  enqueue(value){
    if(value.type === 'dog'){
      this.dogData.unshift(value);
    }else if (value.type === 'cat'){
      this.catData.unshift(value);
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
class Fruit{
  constructor(name, price, weight){
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
}

class FruitFactory{
  create(type){
    if(type === "apple"){
      return new Fruit("Яблоко", 130, 50);
    }
    if(type === "banana"){
      return new Fruit("Банан", 170, 70);
    }
  }
}

const factory = new FruitFactory();

const apple1 = factory.create("apple");
const banana1 = factory.create("banana");
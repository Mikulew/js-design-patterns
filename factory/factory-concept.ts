// The Factory Concept

interface IProduct {
  name: string;
}

class ConcreteProductConcept implements IProduct {
  name = '';
}

class ConcreteProductConceptA extends ConcreteProductConcept {
  constructor() {
      super();
      this.name = 'ConcreteProductA';
  }
}

class ConcreteProductConceptB extends ConcreteProductConcept {
  constructor() {
      super();
      this.name = 'ConcreteProductB';
  }
}

class ConcreteProductConceptC extends ConcreteProductConcept {
  constructor() {
      super();
      this.name = 'ConcreteProductC';
  }
}

class CreatorConcept {
  static createObject(someProperty: string): IProduct {
      if (someProperty === 'a') {
          return new ConcreteProductConceptA();
      } else if (someProperty === 'b') {
          return new ConcreteProductConceptB();
      } else {
          return new ConcreteProductConceptC();
      }
  }
}

// The Client
const PRODUCT = CreatorConcept.createObject('b');
console.log(PRODUCT.name); // ConcreteProductB

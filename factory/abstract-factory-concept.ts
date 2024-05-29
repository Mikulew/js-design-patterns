// FactoryA Sample Code
interface IProductA {
  name: string;
}

class ConcreteProductAbstractConcept implements IProductA {
  name = '';
}

class ConcreteProductAbstractConceptA extends ConcreteProductAbstractConcept {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductA';
  }
}

class ConcreteProductAbstractConceptB extends ConcreteProductAbstractConcept {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductB';
  }
}

class ConcreteProductAbstractConceptC extends ConcreteProductAbstractConcept {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductC';
  }
}

class FactoryA {
  static getObject(some_property: string): IProductA {
    try {
      if (some_property === 'a') {
        return new ConcreteProductAbstractConceptA();
      } else if (some_property === 'b') {
        return new ConcreteProductAbstractConceptB();
      } else if (some_property === 'c') {
        return new ConcreteProductAbstractConceptC();
      } else {
        throw new Error('Class Not Found');
      }
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProductAbstractConcept();
  }
}
// FactoryB Sample Code

interface IProductB {
  name: string;
}

class ConcreteProduct implements IProductB {
  name = '';
}

class ConcreteProductA extends ConcreteProductAbstractConcept {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProductAbstractConcept {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProductAbstractConcept {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductC';
  }
}

class FactoryB {
  static getObject(some_property: string): IProductB {
    try {
      if (some_property === 'a') {
        return new ConcreteProductAbstractConceptA();
      } else if (some_property === 'b') {
        return new ConcreteProductAbstractConceptB();
      } else if (some_property === 'c') {
        return new ConcreteProductAbstractConceptC();
      } else {
        throw new Error('Class Not Found');
      }
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProductAbstractConcept();
  }
}

// Abstract Factory Concept Sample Code
interface IProduct extends IProductA, IProductB { }

class AbstractFactory {
  // The Abstract Factory Concrete Class

  static createObject(factory: string): IProduct | undefined {
    try {
      if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }
      if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }
      throw new Error('No Factory Found');
    } catch (e) {
      console.log(e);
    }
  }
}

// The Client
let PRODUCT_EXAMPLE = AbstractFactory.createObject('ab');
console.log(PRODUCT_EXAMPLE); // ConcreteProductAbstractConceptB { name: 'FactoryA:ConcreteProductB' }

PRODUCT_EXAMPLE = AbstractFactory.createObject('bc');
console.log(PRODUCT_EXAMPLE); // ConcreteProductAbstractConceptC { name: 'FactoryA:ConcreteProductC' }

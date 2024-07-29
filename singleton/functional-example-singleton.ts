// Functional programming

type FunctionalSingleton = {
  data: number;
};
type ReturnSingleton = () => FunctionalSingleton;

const createSingleton: ReturnSingleton = (() => {
  let instance: FunctionalSingleton;
  return () => {
    if (!instance) {
      instance = { data: Math.random() };
    }
    return instance;
  };
})();

const functionalInstanceExample1 = createSingleton();
console.log(functionalInstanceExample1.data); // 0.057502791429981936

const functionalInstanceExample2 = createSingleton();
console.log(functionalInstanceExample2.data); // 0.057502791429981936

console.log(functionalInstanceExample1 === functionalInstanceExample2); // true

// Object-oriented programming

class ObjectOrientedSingleton {
  private static instance: ObjectOrientedSingleton;
  private data: number;

  private constructor() {
    this.data = Math.random();
  }

  public static getInstance(): ObjectOrientedSingleton {
    if (!ObjectOrientedSingleton.instance) {
      ObjectOrientedSingleton.instance = new ObjectOrientedSingleton();
    }
    return ObjectOrientedSingleton.instance;
  }

  public getData(): number {
    return this.data;
  }
}

const objectOrientedInstanceExample1 = ObjectOrientedSingleton.getInstance();
console.log(objectOrientedInstanceExample1.getData()); // 0.16152774745058918

const objectOrientedInstanceExample2 = ObjectOrientedSingleton.getInstance();
console.log(objectOrientedInstanceExample2.getData()); // 0.16152774745058918

console.log(objectOrientedInstanceExample1 === objectOrientedInstanceExample2); // true
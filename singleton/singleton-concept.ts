// Singleton Concept Sample Code

export class SingletonConcept {
  // The Singleton Class
  static instance: SingletonConcept;
  id: number;

  constructor(id: number) {
      this.id = id;
      if (SingletonConcept.instance) {
          return SingletonConcept.instance;
      }
      SingletonConcept.instance = this;
  }
}

// The Client
// All uses of the singleton point to the same original object

const OBJECT1 = new SingletonConcept(1); // setting its id property to 1
const OBJECT2 = new SingletonConcept(2); // setting its id property to 2

console.log(OBJECT1 === OBJECT2); // = true
console.log(OBJECT1.id); // returns 1
console.log(OBJECT2.id); // returns 1
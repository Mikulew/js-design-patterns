// The Strategy Pattern

interface IStrategyConstructor {
  // A Constructor for the IStrategy
  new(): IStrategyConcept;
}

interface IStrategyConcept {
  // A strategy Interface
  method(): void;
}

class ObjectContextConcept {
  // This is the object whose behavior will change
  request(strategy: IStrategyConstructor) {
    // The request is handled by the class passed in
    return new strategy();
  }
}

class ConcreteStrategyAConcept implements IStrategyConcept {
  // A Concrete Strategy Subclass
  method() {
    return 'I am ConcreteStrategyAConcept';
  }
}

class ConcreteStrategyBConcept implements IStrategyConcept {
  // A Concrete Strategy Subclass
  method() {
    return 'I am ConcreteStrategyBConcept';
  }
}

class ConcreteStrategyCConcept implements IStrategyConcept {
  // A Concrete Strategy Subclass
  method() {
    return 'I am ConcreteStrategyCConcept';
  }
}

// The Client
const OBJECT_CONTEXT = new ObjectContextConcept();

console.log(OBJECT_CONTEXT.request(ConcreteStrategyAConcept).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyBConcept).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyCConcept).method());
/*
 * // OUTOUT:
 *    I am ConcreteStrategyAConcept
 *    I am ConcreteStrategyBConcept
 *    I am ConcreteStrategyCConcept
 */
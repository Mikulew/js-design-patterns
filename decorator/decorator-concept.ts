// Decorator Concept Sample Code

interface IComponentConcept {
  method(): string;
}

class ComponentConcept implements IComponentConcept {
  method(): string {
    return 'Component Method';
  }
}

class DecoratorConcept implements IComponentConcept {
  #object: IComponentConcept;

  constructor(object: IComponentConcept) {
    this.#object = object;
  }

  method(): string {
    return `Decorator Method(${this.#object.method()})`;
  }
}

// The Client
const COMPONENT = new ComponentConcept();
console.log(COMPONENT.method());

// The component can be decorated
const Decorated = new DecoratorConcept(COMPONENT);
console.log(Decorated.method());

// The decorated component can be decorated again
const Decorated2 = new DecoratorConcept(Decorated);
console.log(Decorated2.method());
/*
 * // OUTPUT:
 * Component Method
 * Decorator Method(Component Method)
 * Decorator Method(Decorator Method(Component Method))
 */

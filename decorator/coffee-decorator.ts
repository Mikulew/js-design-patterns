interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost() {
    return 1;
  }
  description() {
    return "Simple coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(public coffee: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost() {
    return this.coffee.cost() + 0.5;
  }

  description() {
    return this.coffee.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost() {
    return this.coffee.cost() + 0.2;
  }

  description() {
    return this.coffee.description() + ", sugar";
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost() {
    return this.coffee.cost() + 0.7;
  }

  description() {
    return this.coffee.description() + ", whipped cream";
  }
}

class CaramelDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost() {
    return this.coffee.cost() + 0.6;
  }

  description() {
    return this.coffee.description() + ", caramel";
  }
}

let coffee: Coffee = new SimpleCoffee();
console.log(`Cost of simple coffee: $${coffee.cost()}`);
console.log(`Description of simple coffee: ${coffee.description()}`);
coffee = new MilkDecorator(coffee);
console.log(`Cost of coffee with milk: $${coffee.cost()}`);
console.log(`Description of coffee with milk: ${coffee.description()}`);
coffee = new SugarDecorator(coffee);
console.log(`Cost of coffee with milk and sugar: $${coffee.cost()}`);
console.log(`Description of coffee with milk and sugar: ${coffee.description()}`);
coffee = new WhippedCreamDecorator(coffee);
console.log(`Cost of coffee with milk, sugar and cream: $${coffee.cost()}`);
console.log(`Description of coffee with milk, sugar and cream: ${coffee.description()}`);
coffee = new CaramelDecorator(coffee);
console.log(`Cost of coffee with milk, sugar, cream and caramel: $${coffee.cost()}`);
console.log(`Description of coffee with milk, sugar, cream and caramel: ${coffee.description()}`);
/*
 * // OUTPUT:
 *    Cost of simple coffee: $1
 *    Description of simple coffee: Simple coffee
 *    Cost of coffee with milk: $1.5
 *    Description of coffee with milk: Simple coffee, milk
 *    Cost of coffee with milk and sugar: $1.7
 *    Description of coffee with milk and sugar: Simple coffee, milk, sugar
 *    Cost of coffee with milk, sugar and cream: $2.4
 *    Description of coffee with milk, sugar and cream: Simple coffee, milk, sugar, whipped cream
 *    Cost of coffee with milk, sugar, cream and caramel: $3
 *    Description of coffee with milk, sugar, cream and caramel: Simple coffee, milk, sugar, whipped cream, caramel
 */

abstract class Beverage {
  protected description = '';
  protected cost = 0;
  getCost() {
    return this.cost;
  };
  getDescription() {
    return this.description;
  };
}

class Houseblend extends Beverage {
  description = 'Houseblend';
  cost = 2.5;
}

class DarkRoast extends Beverage {
  description = 'DarkRoast';
  cost = 2.7;
}

class Espresso extends Beverage {
  description = 'Espresso';
  cost = 2.1;
}

class Decaf extends Beverage {
  description = 'Decaf';
  cost = 2.2;
}

abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.description = beverage.getDescription();
    this.cost = beverage.getCost();
  }

  public getCosts() {
    return this.beverage.getCost() + this.cost;
  }
  public getDescription() {
    return `${this.beverage.getDescription()} + ${this.description}`;
  }
}

class Milk extends CondimentDecorator {
  description = 'Milk';
  cost = 0.5;
}

class Mocha extends CondimentDecorator {
  description = 'Mocha';
  cost = 0.7;
}

class Soy extends CondimentDecorator {
  description = 'Soy';
  cost = 0.4;
}

class Whip extends CondimentDecorator {
  description = 'Whip';
  cost = 0.2;
}

function display(beverage: Beverage) {
  console.log(`${beverage.getDescription()} | ${beverage.getCost()} €`);
}

const houseBlend = new Houseblend();
const houseBlendWithMilk = new Milk(houseBlend);
const houseBlendWithMilkAndMocha = new Mocha(houseBlendWithMilk);

display(houseBlendWithMilk)

const espresso = new Espresso();
const espressoWithMilk = new Milk(espresso);
const espressoWithMilkAndMocha = new Mocha(espressoWithMilk);
const espressoWithMilkAndMochaAndWhip = new Whip(espressoWithMilkAndMocha);

display(espressoWithMilkAndMochaAndWhip);
/*
 * // OUTPUT:
 *    Houseblend + Milk | 0.5 €
 *    Espresso + Milk + Mocha + Whip | 0.2 €
 */

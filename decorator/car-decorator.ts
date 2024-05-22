interface Car {
  cost(): number;
  description(): string;
}

class BaseCar implements Car {
  cost() {
    return 20000;
  }
  description() {
    return 'Base Car';
  }
}

class SunroofDecorator implements Car {
  private car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  cost() {
    return this.car.cost() + 1200;
  }

  description() {
    return `${this.car.description()}, with a sunroof`;
  }
}

class LeatherSeatsDecorator implements Car {
  private car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  cost() {
    return this.car.cost() + 1500;
  }

  description() {
    return `${this.car.description()}, with leather seats`;
  }
}

class TurboEngineDecorator implements Car {
  private car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  cost() {
    return this.car.cost() + 5000;
  }

  description() {
    return `${this.car.description()}, with a turbocharged engine`;
  }
}

const baseCar = new BaseCar();

console.log(baseCar.cost());
console.log(baseCar.description()); 

const carWithSunroof = new SunroofDecorator(baseCar);

console.log(carWithSunroof.cost());
console.log(carWithSunroof.description()); 

const fullyLoadedCar = new TurboEngineDecorator(new LeatherSeatsDecorator(carWithSunroof));

console.log(fullyLoadedCar.cost());
console.log(fullyLoadedCar.description()); 
/*
 * // OUTPUT:
 *    20000
 *    Base Car
 *    21200
 *    Base Car, with a sunroof
 *    27700
 *    Base Car, with a sunroof, with leather seats, with a turbocharged engine
 */

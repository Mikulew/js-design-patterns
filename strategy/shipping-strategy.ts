interface ShippingStrategy {
  calculateCost(weight: number, distance: number): void;
}

class FedExStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): void {
    console.log(`FedEx shipping cost for ${weight}kg package traveling ${distance}km`);
  }
}

class UPSStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): void {
    console.log(`UPS shipping cost for ${weight}kg package traveling ${distance}km`);
  }
}

class USPSStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): void {
    console.log(`USPS shipping cost for ${weight}kg package traveling ${distance}km`);
  }
}

class ShippingCostCalculator {
  shippingStrategy: ShippingStrategy;

  constructor(shippingStrategy: ShippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }

  calculateCost(weight: number, distance: number): void {
    return this.shippingStrategy.calculateCost(weight, distance);
  }
}

const fedExStrategy = new FedExStrategy();
const upsStrategy = new UPSStrategy();
const uspsStrategy = new USPSStrategy();

const calculator = new ShippingCostCalculator(fedExStrategy);
let cost = calculator.calculateCost(10, 100);
console.log(cost); // Output: FedEx shipping cost for a 10kg package traveling 100km

calculator.shippingStrategy = upsStrategy;
cost = calculator.calculateCost(10, 100);
console.log(cost); // Output: UPS shipping cost for a 10kg package traveling 100km

calculator.shippingStrategy = uspsStrategy;
cost = calculator.calculateCost(10, 100);
console.log(cost); // Output: USPS shipping cost for a 10kg package traveling 100km
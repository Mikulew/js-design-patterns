interface Kebab {
  ingridients: string[];
  price: number;
  getSetItems(): string[];
  getPrice(): number;
}

class KebabSet implements Kebab {
  ingridients: string[];
  price: number;
  constructor() {
    this.ingridients = ["kebab"];
    this.price = 15;
  }

  getSetItems() {
    return this.ingridients;
  }

  getPrice() {
    return this.price;
  }
}

class SetAddOn implements Kebab {
  protected kebabSet: KebabSet;
  ingridients: string[];
  price: number;
  constructor(kebabSet: KebabSet) {
    this.ingridients = [];
    this.price = 0;
    this.kebabSet = kebabSet;
  }

  getSetItems() {
    return [...this.kebabSet.getSetItems(), ...this.ingridients];
  }

  getPrice() {
    return this.kebabSet.getPrice() + this.price;
  }
}

class Fries extends SetAddOn {
  constructor(kebabSet: KebabSet) {
    super(kebabSet);
    this.ingridients = ["fries"];
    this.price = 5;
  }
}

class Coke extends SetAddOn {
  constructor(kebabSet: KebabSet) {
    super(kebabSet);
    this.ingridients = ["coke"];
    this.price = 7;
  }
}

console.log("1. Kebab only:");
const kebabSet = new KebabSet();
console.log(kebabSet.getSetItems());
console.log("Price:", kebabSet.getPrice());

console.log("2. Kebab set with fries");
const withFries = new Fries(kebabSet);
console.log(withFries.getSetItems());
console.log("Price:", withFries.getPrice());

console.log("3. Kebab set with fries and coke");
const withFriesAndCoke = new Coke(new Fries(kebabSet));
console.log(withFriesAndCoke.getSetItems());
console.log("Price:", withFriesAndCoke.getPrice());

console.log("4. Kebab set with coke");
const withCoke = new Coke(kebabSet);
console.log(withCoke.getSetItems());
console.log("Price:", withCoke.getPrice());
/*
 * // OUTPUT:
 *    1. Kebab only:
 *    [ 'kebab' ]
 *    Price: 15
 *    2. Kebab set with fries
 *    [ 'kebab', 'fries' ]
 *    Price: 20
 *    3. Kebab set with fries and coke
 *    [ 'kebab', 'fries', 'coke' ]
 *    Price: 27
 *    4. Kebab set with coke
 *    [ 'kebab', 'coke' ]
 *    Price: 22
 */

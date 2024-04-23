interface CustomerObserver {
  update(subject: ProductSubject): void;
}

interface ProductSubject {
  addObserver(observer: CustomerObserver): void;
  removeObserver(observer: CustomerObserver): void;
  notifyObservers(): void;
}

class Customer implements CustomerObserver {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  update(subject: ProductSubject): void {
    console.log(`${this.name}, the product you want is back in stock.`);
  }
}

class Product implements ProductSubject {
  private observers: CustomerObserver[] = [];

  addObserver(observer: CustomerObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: CustomerObserver): void {
    const removeIndex = this.observers.findIndex(obs => observer === obs);
    if (removeIndex !== -1) {
      this.observers.splice(removeIndex, 1);
    }
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  restock(): void {
    this.notifyObservers();
  }
}

const product = new Product();
const john = new Customer('John');
const jane = new Customer('Jane');
const mikulew = new Customer('Mikulew');

product.addObserver(john);
product.addObserver(jane);
product.addObserver(mikulew);
product.restock();
/*
  John, the product you want is back in stock.
  Jane, the product you want is back in stock.
  Mikulew, the product you want is back in stock.
*/
product.removeObserver(mikulew);
product.restock(); 
/*
  John, the product you want is back in stock.
  Jane, the product you want is back in stock.
*/

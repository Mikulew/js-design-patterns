interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class Customer implements Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  update(subject: Subject): void {
    console.log(`${this.name}, the product you want is back in stock.`);
  }
}

class Product implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
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

// Subject/Publisher Interface
interface MakeUseOfSubject {
  attachObserver(observer: MakeUseOfObserver): void;
  detachObserver(observer: MakeUseOfObserver): void;
  notifyObserver(): void;
}

// Observer/Subscriber Interface
interface MakeUseOfObserver {
  update(subject: MakeUseOfSubject): void;
}

// Subject
class MakeUseOfStore implements MakeUseOfSubject {
  // Subject state
  private numberOfProducts: number = 0;
  // initializing observers
  private observers: MakeUseOfObserver[] = [];
  // Attaching Observer(s)
  attachObserver(observer: MakeUseOfObserver): void {
    // Check if the observer has already been attached
    const observerExists = this.observers.includes(observer);
    if (observerExists) {
      throw new Error('Observer has already been subscribed.');
    }
    // Add a new observer
    this.observers.push(observer);
  }
  // Detaching Observer(s)
  detachObserver(observer: MakeUseOfObserver): void {
    console.log(`Detaching observer ${JSON.stringify(observer)}`);
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      throw new Error('Observer does not exist.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Observer detached...');
  }
  // Notifying Observers
  notifyObserver(): void {
    console.log('Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  // Changing state and notifying observers
  newProduct(products: number): void {
    this.numberOfProducts += products;
    console.log('New product added to the store!');
    this.notifyObserver();
  }
}

// Concrete Observer 1
class MakeUseOfInventory implements MakeUseOfObserver {
  update(): void {
      console.log('New product added to the store, updating inventory...');
      // Actual business logic goes here...
}
}

// Concrete Observer 2
class MakeUseOfCustomer implements MakeUseOfObserver {
  update(): void {
      console.log('New product added to the store, I have to go check it out...');
      // Actual business logic goes here...
  }
}

// Instantiating Subject and Observer
const store = new MakeUseOfStore();
const inventory = new MakeUseOfInventory();
const customer = new MakeUseOfCustomer()
 
// Subscribing objects to publisher
store.attachObserver(inventory);
store.attachObserver(customer);

// Changing subject state
store.newProduct(30);
/*
 * // OUTPUT:
 *    New product added to the store!
 *    Notifying observers...
 *    New product added to the store, updating inventory...
 *    New product added to the store, I have to go check it out...
 */
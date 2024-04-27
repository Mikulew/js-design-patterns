interface StoreObservable {
  subscribe(o: UserObserver): void;
  unsubscribe(o: UserObserver): void;
  notify(): void;
}

interface UserObserver {
  update(notice: string): void;
}

class DevStore implements StoreObservable {
  private message = "";
  private observers: Array<UserObserver> = [];

  setMessage(message: string) {
    this.message = message;
    this.notify(); // notify all observers when the message state is changed
  }

  subscribe(o: UserObserver): void {
    this.observers.push(o);
  }

  unsubscribe(o: UserObserver): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notify(): void {
    for (const o of this.observers) {
      o.update(this.message); // call update method of observer with new message
    }
  }
}

class DevUser implements UserObserver {
  private observable: StoreObservable;

  constructor(observable: StoreObservable) {
    this.observable = observable;
    this.observable.subscribe(this); // subscribe automatically when a new User object is created
  }

  update(message: string): void {
    console.log(`Store update : ${message}`);
  }
}

const devStore = new DevStore();
const devUser = new DevUser(devStore); // after creation, it observes the store class

// devStore.subscribe(devUser) // Another way of subscribing to the observable 

devStore.setMessage("Hoodie is available now"); // this will call the update method and console log the message
devStore.unsubscribe(devUser);
devStore.setMessage("Autumn sale is live now"); // this message won't be logged as user has unsubscribed from the observable
// Observer Design Pattern

interface IObservableConcept {
  // The Subject Interface
  subscribe(observer: IObserverConcept): void
  // The subscribe method

  unsubscribe(observer: IObserverConcept): void
  // The unsubscribe method

  notify(...args: unknown[]): void
  // The notify method
}

class SubjectConcept implements IObservableConcept {
  // The Subject (a.k.a Observable)
  #observers: Set<IObserverConcept>
  constructor() {
    this.#observers = new Set()
  }

  subscribe(observer: IObserverConcept) {
    this.#observers.add(observer)
  }

  unsubscribe(observer: IObserverConcept) {
    this.#observers.delete(observer)
  }

  notify(...args: unknown[]) {
    this.#observers.forEach((observer) => {
      observer.notify(...args)
    })
  }
}

interface IObserverConcept {
  // A method for the Observer to implement

  notify(...args: unknown[]): void
  // Receive notifications"
}

class ObserverConcept implements IObserverConcept {
  // The concrete observer
  #id: number

  constructor(observable: IObservableConcept) {
    this.#id = COUNTER++
    observable.subscribe(this)
  }

  notify(...args: unknown[]) {
    console.log(
      `OBSERVER_${this.#id} received ${JSON.stringify(args)}`
    )
  }
}

// The Client
let COUNTER = 1; // An ID to help distinguish between objects

const SUBJECT = new SubjectConcept();
const OBSERVER_1 = new ObserverConcept(SUBJECT);
const OBSERVER_2 = new ObserverConcept(SUBJECT);

SUBJECT.notify('First Notification', [1, 2, 3]);

// Unsubscribe OBSERVER_2
SUBJECT.unsubscribe(OBSERVER_2);

SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 });
/*
 * // OUTOUT:
 *    OBSERVER_1 received ["First Notification",[1,2,3]]  
 *    OBSERVER_2 received ["First Notification",[1,2,3]]  
 *    OBSERVER_1 received ["Second Notification",{"A":1,"B":2,"C":3}]  
 */
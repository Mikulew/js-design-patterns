interface BlackFridayObserver {
  sendEmail(): void;
}

class BlackFridaySale {
  private observers: BlackFridayObserver[];

  constructor() {
    this.observers = [];
  }

  addObserver(observer: BlackFridayObserver) {
    this.observers.push(observer);
  }

  notifyObservers() {
    console.log('Notifying observers');
    this.observers.map(observer => observer.sendEmail());
  }
}

class BlackFridayClient implements BlackFridayObserver {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  sendEmail(): void {
    console.log(`Sending an email to ${this.name}`);
  }
}

const blackFriday = new BlackFridaySale();

const clientA = new BlackFridayClient('John', 'john@email.com');
const clientB = new BlackFridayClient('Jessica', 'jessica@email.com');
const clientC = new BlackFridayClient('George', 'george@email.com');

blackFriday.addObserver(clientA);
blackFriday.addObserver(clientB);
blackFriday.addObserver(clientC);

blackFriday.notifyObservers();
/*
 * // OUTPUT:
 *    Notifying observers
 *    Sending an email to John
 *    Sending an email to Jessica
 *    Sending an email to George
 */
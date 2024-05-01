interface WanagoSubject {
  subscribe(observer: WanagoObserver): void;
  unsubscribe(observer: WanagoObserver): void;
  shouldObserversBeNotified(message: string): boolean;
  notify(message: string): void;
}

interface WanagoObserver {
  update: (message: string) => void;
}

class PhoneInputSubject implements WanagoSubject {
  private observers = new Set<WanagoObserver>();
 
  subscribe(observer: WanagoObserver) {
    this.observers.add(observer);
  }
 
  unsubscribe(observer: WanagoObserver) {
    this.observers.delete(observer);
  }
 
  shouldObserversBeNotified(phoneNumber: string) {
    return /[+]*[0-9]+[+. -]*$/.test(phoneNumber);
  }
 
  notify(phoneNumber: string) {
    if(this.shouldObserversBeNotified(phoneNumber)) {
      this.observers.forEach((observer) => {
        observer.update(phoneNumber);
      })
    }
  }
}

class PhoneInputObserver implements WanagoObserver {
  phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  update(message: string) {
    console.log(`Phone number updated: ${message}`);
    this.phoneNumber = message;
  }
}

const phoneInputSubject = new PhoneInputSubject();
const phoneInputObject = new PhoneInputObserver('700-400-300');
 
console.log('phoneInputObject before:', phoneInputObject);
phoneInputSubject.subscribe(phoneInputObject);
phoneInputSubject.notify('700-300-200');
console.log('phoneInputObject after:', phoneInputObject);
/*
 * // OUTPUT:
 * phoneInputObject before: PhoneInputObserver { phoneNumber: '700-400-300' }
 * Phone number updated: 700-300-200
 * phoneInputObject after: PhoneInputObserver { phoneNumber: '700-300-200' }
 */

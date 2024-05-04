abstract class AbstractObserver {
  abstract update(magazine: string): void;
}

abstract class AbstractSubject {
  abstract subscribe(observer: AbstractObserver): void;
  abstract unsubscribe(observer: AbstractObserver): void;
  abstract notify(data: string): void;
}

class VipulsharmaCustomer extends AbstractObserver {
  // Store list of books received
  private magazines: string[] = new Array<string>();
  // Used to display either Subscribe or Unsubscribe option in UI
  hasSubscription = false;
  // Used to display list of books used
  get Magazines(): Array<string> {
    return this.magazines;
  }
  constructor(public name: string, private subject: AbstractSubject) {
    super();
  }
  // This method is called when a new magazine is published.
  update(magazine: string): void {
    this.magazines.splice(0, 0, magazine);
  }
  // This method is called when customer wants to start the subscription.
  onSubscribe(): void {
    this.hasSubscription = true;
    this.subject.subscribe(this);
  }
  // This method is called when customer wants to stop the subscription.
  onUnsubscribe(): void {
    this.hasSubscription = false;
    this.subject.unsubscribe(this);
  }
}

class BookShopWithClassicalApproach extends AbstractSubject {
  // collection of all the observers - customers
  private observerCollection: Array<AbstractObserver>= new Array<AbstractObserver>();
  // add to the collection of observers
  subscribe(observer: AbstractObserver): void {
    const index = this.observerCollection.indexOf(observer);
    if(index === -1) {
      this.observerCollection.push(observer);
    }
  }
  // remove from the collection of observers
  unsubscribe(observer: AbstractObserver): void {
    const index = this.observerCollection.indexOf(observer);
    if(index !== -1) {
      this.observerCollection.splice(index, 1);
    }
  }
  // notify all the observers
  notify(data: string): void {
    for(let observer of this.observerCollection) {
      observer.update(data);
    }
  }
}
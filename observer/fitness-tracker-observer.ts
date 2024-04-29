interface FitnessTrackerSubject {
  registerObserver(observer: AppObserver): void;
  removeObserver(pbserver: AppObserver): void;
  notifyObservers(): void;
}

interface AppObserver {
  update(steps: number, heartRate: number, sleep: number): void;
}

class FitnessTracker implements FitnessTrackerSubject {
  private observers: AppObserver[] = [];
  private steps: number = 0;
  private heartRate: number = 0;
  private sleep: number = 0;

  registerObserver(observer: AppObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: AppObserver) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.steps, this.heartRate, this.sleep);
    }
  }

  setActivityData(steps: number, heartRate: number, sleep: number): void {
    this.steps = steps;
    this.heartRate = heartRate;
    this.sleep = sleep;
    this.notifyObservers();
  }
}

class SmartWatch implements AppObserver {
  update(steps: number, heartRate: number, sleep: number): void {
    console.log(`SmartWatch - Steps: ${steps}, Heart Rate: ${heartRate}, Sleep: ${sleep} hours`);
  }
}

class MobileApp implements AppObserver {
  update(steps: number, heartRate: number, sleep: number): void {
    console.log(`MobileApp - Steps: ${steps}, Heart Rate: ${heartRate}, Sleep: ${sleep} hours`);
  }
}

const fitnessTracker = new FitnessTracker();
const smartWatch = new SmartWatch();
const mobileApp = new MobileApp();

fitnessTracker.registerObserver(smartWatch);
fitnessTracker.registerObserver(mobileApp);

fitnessTracker.setActivityData(10000, 72, 8);

/*
 * // OUTOUT:
 *    SmartWatch - Steps: 10000, Heart Rate: 72, Sleep: 8 hours
 *    MobileApp - Steps: 10000, Heart Rate: 72, Sleep: 8 hours
 */
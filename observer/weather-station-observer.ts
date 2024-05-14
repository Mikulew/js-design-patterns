interface AmirObserver {
  update(temp: number): void;
}

interface AmirSubject {
  registerObserver(o: AmirObserver): void;
  removeObserver(o: AmirObserver): void;
  notifyObservers(): void;
}

class WeatherStation implements AmirSubject {
  private temperature = 0;
  private observers: AmirObserver[] = [];

  registerObserver(o: AmirObserver) {
      this.observers.push(o);
  }

  removeObserver(o: AmirObserver) {
      const index = this.observers.indexOf(o);
      if (index > -1) {
          this.observers.splice(index, 1);
      }
  }

  notifyObservers() {
      for(let observer of this.observers) {
          observer.update(this.temperature);
      }
  }

  setTemperature(temp: number) {
      console.log('WeatherStation: new temperature measurement: ' + temp);
      this.temperature = temp;
      this.notifyObservers();
  }
}

class AmirTemperatureDisplay implements AmirObserver {
  private subject: AmirSubject;

  constructor(weatherStation: AmirSubject) {
      this.subject = weatherStation;
      weatherStation.registerObserver(this);
  }

  public update(temp: number) {
      console.log('TemperatureDisplay: I need to update my display');
      // Here you would update the display with the new temperature value
  }
}

class AmirFan implements AmirObserver {
  private subject: AmirSubject;

  constructor(weatherStation: AmirSubject) {
      this.subject = weatherStation;
      weatherStation.registerObserver(this);
  }

  public update(temp: number) {
      if(temp > 25) {
          console.log('Fan: It’s hot here, turning myself on...');
          // Here you would add the code to turn the fan on
      } else {
          console.log('Fan: It’s nice and cool, turning myself off...');
          // Here you would add the code to turn the fan off
      }
  }
}

let weatherStation = new WeatherStation();

let tempDisplay = new AmirTemperatureDisplay(weatherStation);
let fan = new AmirFan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
/*
 * // OUTPUT:
 * WeatherStation: new temperature measurement: 20
 * TemperatureDisplay: I need to update my display
 * Fan: It’s nice and cool, turning myself off...
 * WeatherStation: new temperature measurement: 30
 * TemperatureDisplay: I need to update my display
 * Fan: It’s hot here, turning myself on...
 */

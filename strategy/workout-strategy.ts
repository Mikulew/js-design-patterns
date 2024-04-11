interface FavoriteWorkout {
  begin(): void;
}

class Running implements FavoriteWorkout {
  public begin(): void {
    console.log('Go running on the park.');
  }
}

class Soccer implements FavoriteWorkout {
  public begin(): void {
    console.log('Play soccer with friends.');
  }
}

class Gym implements FavoriteWorkout {
  public begin(): void {
    console.log('Go to the gym.');
  }
}

class Volleyball implements FavoriteWorkout {
  public begin(): void {
    console.log('Play volleyball with his friends.');
  }
}

class Person {
  name: string;
  favoriteWorkout: FavoriteWorkout;

  constructor(name: string, favoriteWorkout: FavoriteWorkout) {
    this.name = name;
    this.favoriteWorkout = favoriteWorkout;
  }

  workout(): void {
    console.log(`${this.name} decided to:`);
    this.favoriteWorkout.begin();
  }
}

const josh = new Person('Josh', new Soccer());
const mikulew = new Person('Mikulew', new Running());

josh.workout() // Josh decided to: Go to the gym.
mikulew.workout() // Mikulew decided to: Go running on the park.
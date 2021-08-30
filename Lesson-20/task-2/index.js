// eslint-disable-next-line max-classes-per-file
export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const shipEvergreen = new Ship('Evergreen', 0, 40);
console.log(shipEvergreen);
shipEvergreen.move();
shipEvergreen.stop();


const shipArgo = new Ship('Argo', 0, 50);
console.log(shipArgo);
shipArgo.move();
shipArgo.stop();
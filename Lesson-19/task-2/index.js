function getOwnProps(obj) {
  const res = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const keys in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(keys) && typeof obj[keys] !== 'function') {
      res.push(keys);
    }
  }
  return res;
}

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log(getOwnProps(ship));
console.log(getOwnProps(vehicle));

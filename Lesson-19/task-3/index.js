export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.setAge = function (newAge) {
  if (newAge <= 0) {
    return false;
  }
  this.age = newAge;
  if (this.age >= 25) {
    this.requestNewPhoto();
  }
  return newAge;
};

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

const userAnton = new User('Anton', 25);
const userAnn = new User('Ann', 20);

userAnton.sayHi();
userAnn.sayHi();

console.log(userAnton.setAge(24));
userAnn.setAge(25);
console.log(userAnton.setAge(-1));

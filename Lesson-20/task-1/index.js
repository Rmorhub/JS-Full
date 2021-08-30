class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }
}

const userAnton = new User('Anton', 25);
const userAnn = new User('Ann', 20);

userAnton.sayHi();
userAnn.sayHi();

console.log(userAnton.setAge(24));
userAnn.setAge(25);
console.log(userAnton.setAge(-1));
console.log(userAnn.setAge(0));
console.log(userAnn.setAge(9));
console.log(User.createEmpty());

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.setAge = function (newAge) {
//   if (newAge <= 0) {
//     return false;
//   }
//   this.age = newAge;
//   if (this.age >= 25) {
//     this.requestNewPhoto();
//   }
//   return newAge;
// };

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// const userAnton = new User('Anton', 25);
// const userAnn = new User('Ann', 20);

// userAnton.sayHi();
// userAnn.sayHi();

// console.log(userAnton.setAge(24));
// userAnn.setAge(25);
// console.log(userAnton.setAge(-1));
// console.log(userAnn.setAge(0));
// console.log(userAnn.setAge(9));

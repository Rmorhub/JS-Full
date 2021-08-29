const user = {
  firstName: 'John',
  lastName: 'Doe',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [name, surname] = value.split(' ');
    this.firstName = name;
    this.lastName = surname;
  },
};

// export default user;

console.log(user.fullName);
user.fullName = 'Jack Daniels';
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);

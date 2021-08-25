const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());

const fullName = user.getFullName.bind(user);

console.log(fullName());

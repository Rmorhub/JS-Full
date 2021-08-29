const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const nameSurname = fullName.split(' ');
    const name = nameSurname[0];
    this.firstName = name;
    const surname = nameSurname[1];
    this.lastName = surname;
  },
};

console.log(user.getFullName());
user.setFullName('Tom Boston');
console.log(user.getFullName());
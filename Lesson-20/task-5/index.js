/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(el => el.name);
  }

  getUserIds() {
    return this.users.map(el => el.id);
  }

  getUserNameById(value) {
    // eslint-disable-next-line eqeqeq
    return this.users.find(user => user.id == value).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const userOne = new User('1', 'Bob', 'session-id');
const userTwo = new User('2', 'Mark', 'session-id');
const userThree = new User('3', 'Daniel', 'session-id');
const userFour = new User('4', 'Ann', 'session-id');
const userFive = new User('5', 'Julia', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const users = new UserRepository([userOne, userTwo, userThree, userFour, userFive]);
console.log(users);
console.log(users.getUserNames());
console.log(users.getUserIds());
console.log(users.getUserNameById(3));

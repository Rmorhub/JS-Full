const getKeys = (obj) => {
  Object.keys(obj).forEach((key) => console.log(key));
};

const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

getKeys(users);

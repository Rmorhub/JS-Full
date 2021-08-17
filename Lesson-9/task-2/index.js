const copyObj = (obj) => {
  const newObj = {... obj};
  return newObj;
};

// const copyObj = (obj) => Object.assign({}, obj);

const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

console.log(copyObj(users));

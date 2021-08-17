const buildObject = (keysList, valuesList) => {
  const newObject = {};
  for (let index = 0; index < keysList.length; index += 1) {
    newObject[keysList[index]] = valuesList[index];
  }
  return newObject;

  // keysList.reduce(
  //   (info, key, value) => ({ ...info, [key]: valuesList[value] }),
  //   {}

  
};

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);

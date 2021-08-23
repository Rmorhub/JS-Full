const createArrayOfFunctions = (num = 'notFound') => {
  if (num === 'notFound') {
    return [];
  }
  if (!Number.isInteger(num)) {
    return null;
  }

  // eslint-disable-next-line prefer-const
  let array = [];
  for (let index = 0; index < num; index += 1) {
    array[index] = function () {
      return index;
    };
  }
  return array;
};

console.log(createArrayOfFunctions(2));
console.log(createArrayOfFunctions(7)[6]());
console.log(createArrayOfFunctions(5));
console.log(createArrayOfFunctions(4)[2]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions('string'));

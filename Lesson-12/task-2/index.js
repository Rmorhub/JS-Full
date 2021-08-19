const reverseString = (expression) => {
  if (typeof expression !== 'string') {
    return null;
  }
  const result = expression.split('').reverse().join('');


  return result;
};

console.log(reverseString('KitKat'));

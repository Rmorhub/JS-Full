const getValue = value =>
  new Promise(resolve => {
    console.log(value);
    resolve(value);
    
  });

const asyncNum1 = getValue(144);
const asyncNum2 = getValue('124');
const asyncNum3 = getValue('some text');

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => Promise.all(asyncNumbers)
.then(numbers => getSum(numbers))
.catch(() => Promise.reject(new Error(`Can't calculate`)))

// asyncSum(asyncNum1, Promise.reject(new Error('Error')), asyncNum3).then(result => console.log(result));

// asyncSum(asyncNum1, asyncNum2, asyncNum3).then(result =>
//   console.log(result),
// );

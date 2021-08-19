// input: arr
// output arr with all changes
// changes :
// dont change input array , work with copy
// no strings in input array
// cut empty spaces
// output array --> ['$1.90','$2.00']
// every singe object in array must have 2numbers after point and $ ahead and be a string

// steps:
// step 1 copy input array
// step 2 clean  copied array out of any useless elements
// step 3 every singe object in array must have 2numbers after point and $ ahead and be a string
// return changed array

const cleanTransactionsList = (arr) => {
  const copiedArr = arr.slice();
  const cleanArr = copiedArr.filter((el) => Number(el));
  const toNumbers = cleanArr.map((el) => Number(el));
  const result = toNumbers.map((el) => `$${el.toFixed(2)}`);
  return result;
};

const transactions = ['1.9', '16.4', '17', ' 1 dollar'];

console.log(cleanTransactionsList(transactions));

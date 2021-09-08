localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));

// eslint-disable-next-line arrow-body-style
const getLocalStorageData = () => {
  // eslint-disable-next-line arrow-body-style
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

console.log(getLocalStorageData());

// let newValue;
// try {
//   newValue = JSON.stringify(value);
// } catch (e) {
//   newValue = value;
// }
// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(17));

// eslint-disable-next-line arrow-body-style
export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.stringify(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());

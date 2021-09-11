export const asyncCalculator = numbr =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(value => {
      console.log(`Doubled value: ${value * 2}`);
      return value * 2;
    });

// asyncCalculator(5);

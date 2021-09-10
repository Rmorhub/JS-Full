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
            console.log(`Initial value: ${value * value}`);
            resolve(value * value);
          }, 500);
        }),
    )
    .then(
      value =>
        new Promise(() => {
          console.log(`Initial value: ${value * 2}`);
        }),
    );

// asyncCalculator(5);


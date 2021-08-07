function primesNumbers(num) {
  for (let index = 2; index < num; index += 1) {
    if (num % index === 0) {
      return false;
    }
  }
  return num;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (primesNumbers(index)) {
      console.log(index);
    }
  }
}

getPrimes(-1);
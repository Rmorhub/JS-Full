let sum = 0;

for ( let index = 0; index <= 1000; index += 1) {
  sum += index;
}
console.log(Math.floor(sum / 1234) > sum % 1234);
export const shmoment = date => {
  const coppiedDate = new Date(date)
  const result = coppiedDate;

  const dateChanges = {
    add(text, number) {
      if (text === 'years') result.setFullYear(result.getFullYear() + number);
      if (text === 'months') result.setMonth(result.getMonth() + number);
      if (text === 'days') result.setDate(result.getDate() + number);
      if (text === 'hours') result.setHours(result.getHours() + number);
      if (text === 'minutes') result.setMinutes(result.getMinutes() + number);
      if (text === 'seconds') result.setSeconds(result.getSeconds() + number);
      if (text === 'milliseconds') result.setMilliseconds(result.getMilliseconds() + number);

      return this;
    },
    subtract(text, number) {
      if (text === 'years') result.setFullYear(result.getFullYear() - number);
      if (text === 'months') result.setMonth(result.getMonth() - number);
      if (text === 'days') result.setDate(result.getDate() - number);
      if (text === 'hours') result.setHours(result.getHours() - number);
      if (text === 'minutes') result.setMinutes(result.getMinutes() - number);
      if (text === 'seconds') result.setSeconds(result.getSeconds() - number);
      if (text === 'milliseconds') result.setMilliseconds(result.getMilliseconds() - number);
      return this;
    },
    result() {
      return result;
    },
  };
  return dateChanges;
};
const someDate = new Date(2020, 0, 7, 17, 17, 17);
const result = shmoment(someDate).add('minutes', 2).add('days', 8).subtract('years', 1).result();
// ... Jan 15 2019 17:19:17 ...

console.log(someDate);
console.log(result);

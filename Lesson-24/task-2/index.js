export const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const getGreenwichTime = date => formatter.format(date);

const currentData = new Date();
console.log(currentData);
console.log(getGreenwichTime(currentData));

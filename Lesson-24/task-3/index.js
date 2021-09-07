const getDiff = (startDate, endDate) => {
  const diff = startDate - endDate;
  const days = diff / 86400000;
  let hours = null;
  let minutes = null;
  let seconds = null;
  if (startDate > endDate) {
    hours = new Date(startDate - endDate).getUTCHours();
    minutes = new Date(startDate - endDate).getMinutes();
    seconds = new Date(startDate - endDate).getSeconds();
  } else {
    hours = new Date(endDate - startDate).getUTCHours();
    minutes = new Date(endDate - startDate).getMinutes();
    seconds = new Date(endDate - startDate).getSeconds();
  }
  const res = `${Math.abs(Math.floor(days))}d ${hours}h ${minutes}m ${seconds}s`;
  return res;
};

const firstDate = new Date(2020, 10, 0, 2, 10, 40);
console.log(firstDate);
const secondDate = new Date(2020, 10, 2, 1, 9, 41);
console.log(secondDate);

const thirdtDate = new Date(2020, 0, 1, 0, 0, 0);
const fourthDate = new Date(2020, 1, 3, 0, 0, 0);

console.log(getDiff(firstDate, secondDate));
console.log(getDiff(thirdtDate, fourthDate));

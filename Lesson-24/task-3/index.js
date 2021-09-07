export const getDiff = (startDate, endDate) => {
  const diff = startDate - endDate;
  const days = diff / 86400000;
  const hours = new Date(startDate - endDate).getUTCHours();
  const minutes = new Date(startDate - endDate).getMinutes();
  const seconds = new Date(startDate - endDate).getSeconds();

  const res = `${Math.abs(Math.floor(days))}d ${hours}h ${minutes}m ${seconds}s`;
  return res;
};

const firstDate = new Date(2020, 10, 2, 1, 10, 40);
console.log(firstDate);
const secondDate = new Date(2020, 10, 2, 1, 9, 41);
console.log(secondDate);

const thirdtDate = new Date(2018, 0, 1, 0, 0, 0);
const fourthDate = new Date(2020, 0, 1, 0, 0, 0);

console.log(getDiff(firstDate, secondDate));
console.log(getDiff(thirdtDate, fourthDate));

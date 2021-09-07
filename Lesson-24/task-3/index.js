const getDiff = (startDate, endDate) => {
  let diff = null;
  if (startDate > endDate) {
    diff = startDate - endDate;
  } else {
    diff = endDate - startDate;
  }
  const dayInMs = 86400000;
  const days = diff / dayInMs;
  const hours = new Date(diff).getUTCHours();
  const minutes = new Date(diff).getMinutes();
  const seconds = new Date(diff).getSeconds();
  return `${Math.floor(days)}d ${hours}h ${minutes}m ${seconds}s`;
};

const firstDate = new Date(2020, 10, 0, 2, 10, 40);
console.log(firstDate);
const secondDate = new Date(2020, 10, 2, 1, 9, 41);
console.log(secondDate);

const thirdtDate = new Date(2020, 0, 1, 0, 0, 0);
const fourthDate = new Date(2010, 1, 3, 0, 0, 0);

console.log(getDiff(firstDate, secondDate));
console.log(getDiff(thirdtDate, fourthDate));

// const getDiff = (startDate, endDate) => {
//   let days = null;
//   let hours = null;
//   let minutes = null;
//   let seconds = null;
//   if (startDate > endDate) {
//     days = (startDate - endDate) / 86400000;
//     hours = new Date(startDate - endDate).getUTCHours();
//     minutes = new Date(startDate - endDate).getMinutes();
//     seconds = new Date(startDate - endDate).getSeconds();
//   } else {
//     days = (endDate - startDate) / 86400000;
//     hours = new Date(endDate - startDate).getUTCHours();
//     minutes = new Date(endDate - startDate).getMinutes();
//     seconds = new Date(endDate - startDate).getSeconds();
//   }
//   const res = `${Math.floor(days)}d ${hours}h ${minutes}m ${seconds}s`;
//   return res;
// };

const multiRound = (num) => {
  const res = [];

  res.push(Math.floor(num * 100) / 100);
  res.push(Math.round(num * 100) / 100);
  res.push(Math.ceil(num * 100) / 100);
  res.push(Math.trunc(num * 100) / 100);
  res.push(Number(num.toFixed(2)));

  return res;
};

console.log(multiRound(1));
console.log(multiRound(-48.49));
console.log(multiRound(0.1));

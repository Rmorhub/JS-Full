const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) =>
  Object.values(obj)
    .flat()
    .map((name) => Object.values(name))
    .map((name) => name[0]);

console.log(getPeople(rooms));

// const rooms = {
//   room1: [
//     { name: 'Jack' },
//     { name: 'Andrey' },
//     { name: 'Ann' },
//     { name: 'Vasyl' },
//   ],
//   room2: [{ name: 'Dan' }],
//   room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
// };

// const getPeople = (obj) => {
//   const peopleList = Object.values(obj).flat();
//   const peolpeArray = peopleList.map((name) => Object.values(name));
//   const result = peolpeArray.map((name) => name[0]);
//   return result;
// };

// console.log(getPeople(rooms));

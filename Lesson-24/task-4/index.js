const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const studentsBirthDays = students => {
  const names = students.map(el => el.name);
  const birthdays = students.map(el => new Date(el.birthDate).getMonth());
  console.log(names);
  console.log(birthdays);

  // const sortedBirthdays = students.map(el => el.birthDate).sort((a, b) => new Date(a) - new Date(b));
};

const kids = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2006' },
  { name: 'Sam', birthDate: '03/15/2012' },
  { name: 'Ann', birthDate: '11/12/2011' },
  { name: 'Bob', birthDate: '04/20/2007' },
  { name: 'John', birthDate: '11/10/2005' },
];

//  { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }     { ...obj, [key]: value };

studentsBirthDays(kids);

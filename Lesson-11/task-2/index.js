const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Helen',
    phoneNumber: '333-33-33',
  },
  {
    name: 'John',
    phoneNumber: '111-11-11',
  },
  {
    name: 'Kate',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Bob',
    phoneNumber: '999-99-99',
  },
  {
    name: 'Alex',
    phoneNumber: '444-44-44',
  },
];

const sortContacts = (arr, boolean = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const result = arr.sort((a, b) => {
    if (boolean === true) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
};

console.log(sortContacts(contacts));
console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts, false));

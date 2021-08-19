const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }

  const splitText = [];
  const textLength = text.split(' ').length;

  let count = 0;

  for (let index = 0; index < textLength; index += 1) {
    splitText.push(text.split(' ')[index]);
    if (splitText[index].includes(str)) {
      count += 1;
    }
  }
  return count;
};

console.log(
  countOccurrences('Some text for function to count text in the text', 'text')
);

// const countOccurrences = (text = '', str) => {
//   if (str === '') {
//     return null;
//   }

//   let splitText = [];
//   let textLength = text.split(' ').length;
//   console.log(textLength);

//   let count = 0;

//   for (let index = 0; index < textLength; index += 1) {
//     splitText.push(text.split(' ')[index]);
//     if (splitText[index].includes(str)) {
//       count += 1;
//     }
//   }
//   console.log(splitText);
//   return count;
// };

// console.log(
//   countOccurrences('Some text for function to count text in the text', 'text')
// );

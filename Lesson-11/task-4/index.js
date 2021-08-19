const splitString = (text, len = 10) => {
  if (!(typeof text === 'string')) {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  let sameText = text.slice();

  while (sameText.length % len) {
    sameText += '.';
  }

  while (true) {
    let chunk = sameText.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk);
    startPosition += len;
  }

  return strArr;
};

console.log(splitString('asdasdad asdasdas'));
console.log(splitString(1, 3));
console.log(splitString('asdad aggdsfsdfsfsdfsdf sdfsdfsdf'));
console.log(splitString('asdada ggdsfsdfsfsdf sdfsdfsdfsdf', 4));

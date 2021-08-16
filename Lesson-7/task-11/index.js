const filterNames = (arr,text) => arr.filter((name) => name.includes(text) && name.length > 5);

console.log(filterNames(['John','Oliviya','Oleksandr','Emanuel','Vanya','Nastya'], 'ya'));

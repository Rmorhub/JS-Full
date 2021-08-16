const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => 'Good job, ' + name);

const allStud = ['Ann', 'Liza', 'Kate', 'Artem'];
const retakeStud = ['Liza', 'Artem'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

console.log(allStud);
console.log(retakeStud);


const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
   return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks`).then(response =>
     response.json(),
   );
}

export function getTaskById(taskId) {
  return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`).then(response =>
    response.json(),
  );
}

// examples
// getTasksList().then(tasksList => {
//   console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
// });

// getTaskById('2').then(taskData => {
//   console.log(taskData); // {'id':'2', 'done':true ... }
// }); // Eror 404 , в Postman по ссылке нашел только 1 объект , второй не был создан 
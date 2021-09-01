const input = document.querySelector('.task-status');

const checkboxStatus = event => (event.target.checked ? console.log(true) : console.log(false));

input.addEventListener('change', checkboxStatus);

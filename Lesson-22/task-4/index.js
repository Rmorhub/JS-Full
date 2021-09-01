const checkbox = document.querySelector('.task-status');

const checkBoxChecked = () => (checkbox.checked ? console.log(true) : console.log(false));
checkbox.addEventListener('change', checkBoxChecked);

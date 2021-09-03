const buttons = document.querySelectorAll('.pagination__page');
const button = Array.from(buttons);

const handleClick = event => {
  console.log(event.target.getAttribute('data-page-number'));
};

// button[0].addEventListener('click', handleClick);
// button[1].addEventListener('click', handleClick);
// button[2].addEventListener('click', handleClick);

button.forEach(elem => elem.addEventListener('click', handleClick));

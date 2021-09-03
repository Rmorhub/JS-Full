const buttons = document.querySelectorAll('.btn');
const button = Array.from(buttons);

const handleClick = event => {
  console.log(event.target.textContent);
};


button.forEach(elem => elem.addEventListener('click', handleClick));

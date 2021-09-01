const buttons = document.querySelectorAll('.btn');
const button = Array.from(buttons);

const handleClick = () => {
  const buttonName = event.target.textContent;
  console.log(buttonName);
};

button[0].addEventListener('click', handleClick);
button[1].addEventListener('click', handleClick);

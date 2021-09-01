const button = document.querySelectorAll('.btn');
const buttons = Array.from(button);

const handleClick = () => {
  console.log(event.target.textContent);
};

buttons[0].addEventListener('click', handleClick);
buttons[1].addEventListener('click', handleClick);

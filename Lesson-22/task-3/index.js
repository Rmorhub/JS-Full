const input = document.querySelector('.text-input');

const inputEvent = () => {
  const text = input.value 
  console.log(`${text}`);
}

input.addEventListener('change', inputEvent);

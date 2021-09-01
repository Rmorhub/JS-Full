const input = document.querySelector('.text-input');


const textEvent = event => {
  console.log(event.target.value);
};

input.addEventListener('change', textEvent);

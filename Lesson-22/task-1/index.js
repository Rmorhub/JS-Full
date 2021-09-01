// ================================================================
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventListElem = document.querySelector('.events-list');
// ================================================================
const logTarget = (text, color) => {
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// =========================clearBtn================================

const clearBtn = document.querySelector('.clear-btn');

const cleanWindow = () => {
  eventListElem.textContent = '';
};

clearBtn.addEventListener('click', cleanWindow);

// ===========================attachBtn===================================

const attachBtn = document.querySelector('.attach-handlers-btn');

const attachSquare = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

attachSquare();

attachBtn.addEventListener('click', attachSquare);

// =========================removeBtn===============================

const removeBtn = document.querySelector('.remove-handlers-btn');

const removeSquare = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

removeBtn.addEventListener('click', removeSquare);

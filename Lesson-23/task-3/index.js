const listElem = document.querySelector('.list');

// ======================================================================
const tasks = [
  { text: 'Buy milk', done: false, id: Math.ceil(Math.random() * 100).toFixed() },
  { text: 'Pick up Tom from airport', done: false, id: Math.ceil(Math.random() * 100).toFixed() },
  { text: 'Visit party', done: false, id: Math.ceil(Math.random() * 100).toFixed() },
  { text: 'Visit doctor', done: true, id: Math.ceil(Math.random() * 100).toFixed() },
  { text: 'Buy meat', done: true, id: Math.ceil(Math.random() * 100).toFixed() },
];

// =======================================================================
const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);
// ========================================================================
const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');

const inputEvent = () => {
  if (input.value !== '') {
    tasks.push({
      text: input.value,
      done: false,
      id: Math.ceil(Math.random() * 100).toFixed(),
    });
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
  input.value = '';
};

button.addEventListener('click', inputEvent);

// ==========================================================================

const checkBoxChecked = event => {

  const taskId = event.target.dataset.id;
  const tasksElem = tasks.find(el => el.id === taskId);

  if (event.target.checked) {
    tasksElem.done = true;
  } else {
    tasksElem.done = false;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('change', checkBoxChecked);
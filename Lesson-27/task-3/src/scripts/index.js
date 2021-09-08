import { todoListHandlers } from './todoListHandlers.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  todoListHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
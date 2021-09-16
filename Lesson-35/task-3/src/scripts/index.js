import { fetchUserData, fetchRepositories } from './gateWays.js';
import { renderUserData } from './user.js';
import { cleanReposList, renderRepos } from './reposi.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/a',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => hideSpinner());
};

showUserBtnElem.addEventListener('click', onSearchUser);

// 'https://api.github.com/users/USERNAME'
// fetch and render userdata ...

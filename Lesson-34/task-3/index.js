const baseUrl = 'https://6140a15a357db50017b3d77d.mockapi.io/api/v1/users';

const [emailInput, userNameInput, passwordInput] = document.querySelectorAll('.form-input');
const submitBtn = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form');
// ===========================================================
const newCreatedUser = {
  email: null,
  userName: null,
  password: null,
};
// ============================================================
const filledInputForm = event => {
  const emailText = emailInput.value;
  newCreatedUser.email = emailText;

  const userText = userNameInput.value;
  newCreatedUser.userName = userText;

  const passwordText = passwordInput.value;
  newCreatedUser.password = passwordText;

  const filledForm = loginForm.reportValidity(event.target.value);
  if (filledForm) {
    submitBtn.removeAttribute('disabled');
  }
  console.log(newCreatedUser);
};
loginForm.addEventListener('input', filledInputForm);

// ==============================================================================

const createUser = usersData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(usersData),
  });

// =======================================================================================

function getUsers() {
  return fetch(baseUrl).then(response => response.json());
}

function getUsersById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

// =======================================================================================
const sumbitCreatedUser = event => {
  event.preventDefault();
  createUser(newCreatedUser);

  getUsers().then(user => {
    getUsersById(user.length + 1).then(users => alert(JSON.stringify(users)));
  });

  emailInput.value = '';
  userNameInput.value = '';
  passwordInput.value = '';
};

loginForm.addEventListener('submit', sumbitCreatedUser);

// ================================================================================

// test ============================================================================
// function getUsersList() {
//   return fetch(baseUrl).then(response => response.json());
// }

// getUsersList().then(users => {
//   console.log(users);
// });

// function getUsersByEmail(email) {
//   return fetch(`${baseUrl}/${email}`).then(response => response.json());
// }

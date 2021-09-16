export const fetchUser = async userName => {
  try {
    const responce = await fetch(`https://api.github.com/users/${userName}`);
    if (!responce.ok) {
      return null;
    }
    const userData = await responce.json();
    return userData;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

fetchUser('facebook')
  .then(userData => console.log(userData))
  .catch(error => alert(error.message));

const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());

export const getUsersBlogs = async userName => {
  try {
    return await Promise.all(userName.map(user => fetchUserData(user).then(users => users.blog)));
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList));
// ["https://opensource.google/", "https://opensource.fb.com", "http://twitter.com/dan_abramov"]

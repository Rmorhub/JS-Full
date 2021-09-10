/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const p = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

  return p;
};

// requestUserData('userid777').then(user => console.log(user));

// requestUserData('broken').catch(error => console.log(error));

const succesfullUser = '{"name":"Tom","city":"New-York"}';

const brokenUser = '{"name":"Tom","city":"New-York"';

// eslint-disable-next-line consistent-return
export const parseUser = user => {
  try {
    const parsedUser = JSON.parse(user);
    return parsedUser;
  } catch (error) {
    return null;
  }
};

// parseUser(succesfullUser);
// parseUser(brokenUser);

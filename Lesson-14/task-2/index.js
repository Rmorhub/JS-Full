const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  const sendMessage = name => {
    console.log(`${name}, ${message}! Your ${sender}`);
  };

  const setMessage = text => {
    message = text;
  };

  const setSender = text => {
    sender = text;
  };

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

export default createMessenger;

const messenger = createMessenger();
messenger.sendMessage('Bob');
messenger.setMessage('Good job');
messenger.setSender('Gromcode');

const messenger2 = createMessenger();
messenger2.sendMessage('Ann');
messenger2.setMessage('Hi');
messenger2.sendMessage('Ann');
messenger2.setSender('Gmail');
messenger2.sendMessage('Ann');

// test
messenger.sendMessage('Bob');
messenger2.sendMessage('Ann');

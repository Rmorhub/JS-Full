/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
const createLogger = () => {
  const memory = [];

  const warn = string => {
    const warnObj = {
      message: string,
      dateTime: new Date(),
      type: 'warn',
    };
    memory.push(warnObj);
  };
  const error = string => {
    const errorObj = {
      message: string,
      dateTime: new Date(),
      type: 'error',
    };
    memory.push(errorObj);
  };
  const log = string => {
    const logObj = {
      message: string,
      dateTime: new Date(),
      type: 'log',
    };
    memory.push(logObj);
  };

  const getRecords = (loggerType = 'notFound') => {
    if (loggerType !== 'notFound') {
      const memoryFilter = memory.filter(element => {
        if (element.type === loggerType) {
          return element;
        }
      });
      return memoryFilter.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.sort((a, b) => b.dateTime - a.dateTime);
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();

logger.log('User logged in');
logger.warn('User try  to restricted this page');
logger.log('User logged out');
logger.error('Unexpected error on this site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords());

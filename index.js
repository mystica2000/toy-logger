const { createLogger } = require('./logger/logger');
const logger = createLogger();

logger.info('This is an informational message');
logger.debug('This is a debug message');


// Creating a logger instance with a custom log level
const customLogger = createLogger({ level: 'trace', service: 'userModel' });

customLogger.trace('This is a trace message');
customLogger.error('This is an error message', { error: new Error('Something went wrong') });
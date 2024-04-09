const fs = require("fs");
const path = require('path');

const logFileName = 'app.log';
const logDir = "logs";

const logFilePath = path.join(logDir, logFileName);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
  trace: 4
}

const env = process.env.NODE_ENV || 'development';
const levelConfig = env == "development" ? "debug" : "info";

function createLogger(options = {}) {
  const { level = levelConfig, service = "" } = options;

  const _currentLevel = logLevels[level];

  function writeToFile(message) {
    fs.appendFile(logFilePath, `${message} \n`, (err) => {
      if (err) {
        console.error("Error writing to log file: ", err);
      }
    })
  }

  function log(level, message, ...args) {
    if (logLevels[level] <= _currentLevel) {
      const timeStamp = new Date().toISOString();
      const logMessage = `${timeStamp} [${level.toUpperCase()}] - ${service.length > 0 ? `[${service}]` : ''} ${message} ${args.length > 0 ? JSON.stringify(args) : ''}`;

      console.log(logMessage)
      writeToFile(logMessage)
    }
  }

  return {
    error(message, ...args) {
      log("error", message, ...args);
    },

    warn(message, ...args) {
      log("warn", message, ...args);
    },

    info(message, ...args) {
      log("info", message, ...args);
    },

    debug(message, ...args) {
      log("debug", message, ...args);
    },

    trace(message, ...args) {
      log("trace", message, ...args);
    },
  }
}

module.exports = {
  createLogger,
};
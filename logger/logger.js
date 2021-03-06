const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;
const myFormat = printf(info => `${info.timestamp} ${info.message}`);
const logger = createLogger({
  level: 'info',
  format: combine(
    myFormat,
    timestamp(),
  ),
  transports: [new transports.File({ filename: 'main.log' })],
});

module.exports = logger;

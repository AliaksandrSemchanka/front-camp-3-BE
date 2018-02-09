const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;
const myFormat = printf(info => `${info.timestamp} ${info.message}`);
const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [new transports.File({ filename: 'main.log' })]
});

module.exports = logger;

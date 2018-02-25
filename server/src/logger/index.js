const {createLogger, format, transports} = require('winston');
const {timestamp, printf} = format;

const myFormat = printf(info => {
  return `[${info.level}]: ${info.message}`;
});

const logger = createLogger({
  colorize: true,
  transports: [
    new transports.File({filename: 'error.log', level: 'error'}),
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({all: true}),
      format.simple(),
      timestamp(),
      myFormat
    ),
    level: process.env.WRIKE_LOG_LEVEL ? process.env.WRIKE_LOG_LEVEL : 'info'
  }));
}


module.exports = logger;

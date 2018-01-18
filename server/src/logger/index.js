const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  colorize: true,
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({ all: true }),
      format.simple()
  )
  }));
}


module.exports = logger;

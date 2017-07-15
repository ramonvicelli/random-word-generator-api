'use strict';

const environment = require('../environment');
const winston = require('winston');

const DEFAULT_SERVER_PORT = 3000;

module.exports = app => {
  const configuration = environment.server;

  bootstrap();

  function bootstrap() {
    const port = configuration.porta || DEFAULT_SERVER_PORT;

    app.listen(port, () => {
      winston.info('##########################################################');
      winston.info('            Application  Randon Word Generator            ');
      winston.info(`    work in ${process.pid} started                        `);
      winston.info(`    listen in ${port}                                     `);
      winston.info('##########################################################');
    });
  }
};

'use strict';

const environment = require('../environment');
const winston = require('winston');

module.exports = app => {
  const configuration = environment.server;

  bootstrap();

  function bootstrap() {
    const port = configuration.port;

    app.listen(port, () => {
      winston.info('##########################################################');
      winston.info('            Application  Randon Word Generator            ');
      winston.info(`    work in ${process.pid} started                        `);
      winston.info(`    listen in ${port}                                     `);
      winston.info('##########################################################');
    });
  }
};

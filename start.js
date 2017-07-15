'use strict';

const cluster = require('cluster');
const os = require('os');
const winston = require('winston');

const CPUS = process.env.WEB_CONCURRENCY || 1;// os.cpus().length;

if (cluster.isMaster) {
  winston.log(`Starting ${CPUS} workers...`);

  for (let i = 0; i < CPUS; i++) {
    cluster.fork();
  }

  cluster.on('listening', worker => {
    winston.log(`Cluster ${process.pid} connected. ${worker}`);
  });

  cluster.on('disconnect', worker => {
    winston.log(`Cluster ${process.pid} disconnected. ${worker}`);
  });

  cluster.on('exit', worker => {
    winston.log(`Cluster ${process.pid} exit. ${worker}`);
    cluster.fork();
  });
} else {
  require('./src/api/app.js');
}

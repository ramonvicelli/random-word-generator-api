'use strict';
const WordService = require('./word-service');

module.exports = app => {
  const wordService = new WordService(app);

  app.route('/service/word')
    .get((req, res) => {
      const result = wordService.find(req.query);

      res.json(result);
    });
};

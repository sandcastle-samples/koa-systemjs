'use strict';

const
  compress = require('koa-compress'),
  router = require('koa-router')();


router.use(compress());

router.get('/api', function* () {
  this.body = 'The API :)~';
});

module.exports = function (app) {
  app.use(router.routes());
  app.use(router.allowedMethods());
};

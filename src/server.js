'use strict';

const
  path         = require('path'),
  logger       = require('koa-logger'),
  favicon      = require('koa-favicon'),
  serve        = require('koa-static'),
  compress     = require('koa-compress'),
  responseTime = require('koa-response-time'),
  mount        = require('koa-mount'),
  koa          = require('koa'),
  app          = koa();

const port = 3001;

app.use(responseTime());
app.use(logger());
app.use(favicon(path.join(__dirname, 'public/favicon.png')));

/**
 * Register nested routers.
 */
require('./routes/api')(app);

app.use(compress());

/**
 * Serve the static files.
 */
app.use(serve(path.join(__dirname, 'public')));

/**
 * We need to serve jspm_packages directly in the development workflow.
 */
if (process.env.NODE_ENV !== 'production') {
  app.use(mount('/jspm_packages', serve(path.join(__dirname, '../jspm_packages'))));
}

app.listen(port);
console.log(`listening on port ${port}`);

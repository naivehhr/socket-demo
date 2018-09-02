'use strict';

module.exports = app => {
  app.router.get('/home', app.controller.home.render);
  app.router.get('/foo', app.controller.foo.render);
  app.io.of('/').route('chat', app.io.controllers.chat);
};
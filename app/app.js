var domready = require('domready');
var MainView = require('./views/main.js');
var Router = require('./router');
var ExampleModel = require('./models/example');

domready(function() {
  var exampleModel = new ExampleModel({
    firstName: 'Joe',
    lastName: 'Johnson'
  });

  new MainView({
    el: document.body,
    model: exampleModel,
  }).render();
  
  Router.history.start({ pushState: false, root: '/' });
});

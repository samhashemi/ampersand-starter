var Router = require('ampersand-router');

var AppRouter = Router.extend({
  routes: {
    '': 'home',
    '*default': 'error'
  },

  home: function() {
    /* add any routing here, if needed... */
  },

  error: function() {
    console.log('Route not found. Mild moment of panic.');
  },
});

module.exports = new AppRouter();

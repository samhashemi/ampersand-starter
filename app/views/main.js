var multiline = require('multiline');
var View = require('ampersand-view');

module.exports = View.extend({
  template: multiline.stripIndent(function(){/*@preserve
    <body>
      <div>hello, <span data-hook="name"></span></div>
    </body>
  */console.log();}),

  bindings: {
    'model.fullName': {
      hook: 'name',
    }
  },
});

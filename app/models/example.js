var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    firstName: 'string',
    lastName: 'string'
  },
  session: {
    signedIn: ['boolean', true, false],
  },
  derived: {
    fullName: {
      deps: ['firstName', 'lastName'],
      fn: function () {
        return this.firstName + ' ' + this.lastName;
      }
    }
  }
});

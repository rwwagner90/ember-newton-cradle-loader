/*jshint node:true*/
module.exports = {
  description: 'Creates a loading.hbs',

  normalizeEntityName: function () {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  }
};

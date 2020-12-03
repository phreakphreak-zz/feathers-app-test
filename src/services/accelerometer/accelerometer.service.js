// Initializes the `accelerometer` service on path `/accelerometer`
const { Accelerometer } = require('./accelerometer.class');
const createModel = require('../../models/accelerometer.model');
const hooks = require('./accelerometer.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/accelerometer', new Accelerometer(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accelerometer');

  service.hooks(hooks);
};

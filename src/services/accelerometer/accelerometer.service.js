
const { Accelerometer } = require('./accelerometer.class');
const createModel = require('../../models/accelerometer.model');
const hooks = require('./accelerometer.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    //paginate: app.get('paginate')
    paginate:false
  };

  app.use('/accelerometer', new Accelerometer(options, app));

  const service = app.service('accelerometer');

  service.hooks(hooks);
};

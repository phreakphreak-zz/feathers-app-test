const users = require('./users/users.service.js');
const accelerometer = require('./accelerometer/accelerometer.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(accelerometer);
};

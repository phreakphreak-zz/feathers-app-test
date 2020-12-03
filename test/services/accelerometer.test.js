const assert = require('assert');
const app = require('../../src/app');

describe('\'accelerometer\' service', () => {
  it('registered the service', () => {
    const service = app.service('accelerometer');

    assert.ok(service, 'Registered the service');
  });
});

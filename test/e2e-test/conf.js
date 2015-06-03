// An example configuration file.
exports.config = {
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['todo-spec.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
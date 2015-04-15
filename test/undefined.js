var assert = require('assert');

var fakeHead = {};
global.document = {
  getElementsByTagName: function () {
    return [fakeHead];
  }
};

var head = require('../head');

assert.equal(head, fakeHead);

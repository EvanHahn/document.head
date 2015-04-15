var assert = require('assert');

var fakeHead = {};
global.document = { head: fakeHead };

var head = require('../head');

assert.equal(head, fakeHead);

/*global describe, it*/
'use strict';

var _ = require('underscore'),
    GhostApp = require('../');

describe('Module', function () {
    it('exports App directly', function () {
        _.isObject(GhostApp).should.equal(true);
    });
});
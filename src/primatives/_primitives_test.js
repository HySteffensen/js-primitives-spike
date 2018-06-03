"use strict";

var assert = require('chai').assert;
var primatives = require('./primitives');

describe("Primatives", function() {
    it("type undefined", function() {
        assert(primatives.returnsUndefined(), undefined);
    });
});
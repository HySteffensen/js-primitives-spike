/* jshint -W117, -W116, strict:false */

var assert = require('chai').assert;
var primitives = require('./primitives');

describe("Undeclared and Undefined Variables", function() {
    describe("Undeclared Primitives", function() {
        it("returns String 'undefined' when not declared", function() {
            assert.equal(primitives.returnsStringUndefinedWhenNotDeclared(), 'undefined');
        });
        
        it("variable throws error when not declared", function() {
            assert.throws(function() {
                primitives.returnsUndefinedWhenNotDeclared();
            });
        });
    });

    describe("Undefined Primitives", function() {
        it("returns undefined when declared but not defined", function() {
            assert.equal(primitives.returnsUndefinedWhenDeclaredButNotDefined(), undefined);
        });

        it("returns String 'undefined' when declared but not defined using typeof", function() {
            assert.equal(primitives.returnsStringUndefinedWhenDeclaredButNotDefinedUsingTypeof(), 'undefined');
        });

    });
});

describe("null", function() {
    it("typeof(null) equals 'object' ", function() {
        // null is typeof "object" because of legacy reasons
        assert.notEqual(typeof(null), null);
        assert.equal(typeof(null), "object");
        assert.isTrue(typeof(null) == "object");
        assert.isTrue(typeof(null) === "object");
    });

    it("coerces to equal undefined", function() {
        assert.isTrue(null == undefined);
        assert.isFalse(null === undefined);
    });

    it("null equals null", function() {
        assert.isTrue(null == null);
        assert.isTrue(null === null);
    });

    it("!null", function() {
        assert.isTrue(!null);
        // assert.isFalse(null);
    });

    it("null + 1 is a number", function() {
        assert.isFalse(isNaN(null + 1));
    });

    it("null + 1 is 1", function() {
        assert.equal(null + 1, 1);
    });

    it("null + undefined is not a number", function() {
        assert.isTrue(isNaN(null + undefined));
    });
});




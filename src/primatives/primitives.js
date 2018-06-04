/* jshint -W117, strict:false */


exports.returnsStringUndefinedWhenNotDeclared = function() {
    return typeof(test);
};

exports.returnsUndefinedWhenNotDeclared = function() {
    if (t === undefined) throw new Error("Variable Undeclared");
};

exports.returnsUndefinedWhenDeclaredButNotDefined = function() {
    var test;
    return test;
};

exports.returnsStringUndefinedWhenDeclaredButNotDefinedUsingTypeof = function() {
    var test;
    return typeof(test);
};


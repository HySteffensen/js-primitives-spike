"use strict";

const PORT = '8080';

var assert = require("chai").assert;
var server = require("./server");
var http = require("http");


describe("Server Sends Good Responses", function() {

    beforeEach(function(done) {
        server.start(PORT);
        done();
    });

    afterEach(function(done) {
        server.stop(function() {
            done();
        });
    });

    it("server returns a 200 response", function(done) {
        http.get("http://localhost:" + PORT, function(res) {
            // res.on("data", function(){});
            assert.equal(res.statusCode, 200);
            done();
        });
    });
    
    it("server returns Hello World", function(done) {
        var req = http.get("http://localhost:" + PORT);
        req.on("response", function(res) {
            var receivedData = false;
            res.setEncoding("utf8");
            
            res.on("data", function(chunk) {
                receivedData = true;
                assert.equal(chunk, "Hello World");
            });

            res.on("end", function() {
                assert.equal(receivedData, true);
                done();
            });

        });
    });

    it("server runs callback when stop completes", function(done) {
        server.stop(function() {
            done();
        });
        server.start(PORT);
    });


});

describe("Server Already Shut Down", function() {
    it("test requires port number", function(done) {
        assert.throws(function() {
            server.start();
        });
        done();
    });

    // it("stop called when server isn't running throws exception", function(done) {
    //     assert.throws(function() {
    //         server.stop();
    //     });
    //     done();
    // });

    
    it("calling stop when server isn't running throws exception", function(done) {
        server.stop(function(err) {
            assert.notEqual(err, undefined);
            // console.log(err);
            done();
        });
    });
});
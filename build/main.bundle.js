"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import test from "./test";


var Test = function () {
    function Test(name) {
        _classCallCheck(this, Test);

        this.name = name;
    }

    _createClass(Test, [{
        key: "testClass",
        value: function testClass() {
            console.log(thois.name);
        }
    }]);

    return Test;
}();

const test1 = new Test("Ashot");
test1.testClass();
test();

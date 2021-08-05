"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.func1 = void 0;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _array = require("lodash-es/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var num1 = 100;

var func1 = function func1() {
  console.log(num1 + 20);
};

exports.func1 = func1;
var arr = [1, 2, 3, 4];
var isOk = arr.includes(2);

var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "sayName",
    value: function sayName() {
      return this.name;
    }
  }]);

  return Person;
}();

exports.Person = Person;
var p = Promise.resolve();
p.then(function () {
  console.log('Promise');
});
var person = new Person('zjj');
person.sayName();
console.log('[DEBUG]: ', isOk, num1);

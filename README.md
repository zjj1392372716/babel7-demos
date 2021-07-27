## 本分支验证 7.4.0 以下的版本
###  阶段一：

```sh
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "chrome": 40,
        "safari": 6,
        "ie": 9
      },
      "debug": true,
      "useBuiltIns": "usage"
    }]
  ]
}
```

```js
const num1 = 100;

export const func1 = () => {
  console.log(num1 + 20)
};

const arr = [1, 2, 3, 4];

const isOk = arr.includes(2);

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }
}

const p = Promise.resolve();

p.then(() => {
  console.log('Promise')
})

const person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);

```

```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.func1 = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.array.includes");

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

```

- usage 选项，不需要在 index 中引入 polyfill
- 能够实现按需引入
- 如果配置的是 entry 选项，需要在 index 中引入 polyfill
- 配置成 true 无意义
- 这个版本阶段，跟babel6时候最大的不同就是增加了 usage，实现了按需引入。

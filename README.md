## Babel7x demo

### 阶段一：

```js
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "chrome": 40,
        "safari": 6,
        "ie": 10
      },
      "debug": true,
      "useBuiltIns": false
    }]
  ]
}
```
In:
```js
const num1 = 100;

export const func1 = () => {};

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
Out:
```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.func1 = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var num1 = 100;

var func1 = function func1() {};

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

- 未启用 polyfill
- 未启用松散模式
- 未启用 spec

### 阶段二：

```js
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "chrome": 40,
        "safari": 6,
        "ie": 10
      },
      "debug": true,
      "useBuiltIns": false,
      "loose": true
    }]
  ]
}
```
Out:
```js
"use strict";

exports.__esModule = true;
exports.Person = exports.func1 = void 0;
var num1 = 100;

var func1 = function func1() {};

exports.func1 = func1;
var arr = [1, 2, 3, 4];
var isOk = arr.includes(2);

var Person = /*#__PURE__*/function () {
  function Person(name) {
    this.name = name;
  }

  var _proto = Person.prototype;

  _proto.sayName = function sayName() {
    return this.name;
  };

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

- 开启 loose 后，代码更像是我们写的
- ES6规范中是不允许直接在对象上去添加属性的，推荐使用 Object.defineProperty，且属性默认是不可枚举的

### 阶段三：

```js
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "chrome": 40,
        "safari": 6,
        "ie": 10
      },
      "debug": true,
      "useBuiltIns": false,
      "spec": true
    }]
  ]
}
```
Out:
```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.func1 = void 0;

var _this = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var num1 = 100;

var func1 = function func1() {
  _newArrowCheck(this, _this);
}.bind(void 0);

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
  _newArrowCheck(this, _this);

  console.log('Promise');
}.bind(void 0));
var person = new Person('zjj');
person.sayName();
console.log('[DEBUG]: ', isOk, num1);

```

- 开启了 spec
- 增加了箭头函数的this校验

```js

```

```js

```

```js

```

```js

```

```js

```

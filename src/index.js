import { differenceWith } from 'lodash-es/array'


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

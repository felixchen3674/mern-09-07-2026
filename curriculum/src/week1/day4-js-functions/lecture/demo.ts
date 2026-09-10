// many ways to declare a function

// 1. function keyword + name + arguments + body + return
function foo1(message: string) {
  return "received:" + message;
}
foo1("hello");

// 2. function expression
const foo2 = function (message: string) {};
foo2("hello");

// 3. arrow function expression
// variable name + argument + arrow + body

// simple reason: cleaner syntax, implicit return
// deeper reason: this keyword binding
const foo3 = (message: string) => {};
foo3("hello");

// get the return value of the function
// 1. log it directly
// console.log(foo1("Hello"));

// 2. use a variable to store the return value
const value1 = foo1("hello");

// expression is a value
// it can be console logged, can be put on the right side of =

// foo1 vs foo1()
// foo1 is just a reference to the function
// foo1() means calling the function, and getting the return value of the function

// console.log(typeof foo1);
// console.log(typeof foo1("hello"));

const sum = (a: number, b: number) => {
  return a + b;
};

// console.log(sum)
// console.log(sum(1,2))

// function being passed as argument
function alertWindow(msg: string) {
  console.log("alert: " + msg);
}

function hof(callbackFn: any, arg: any) {
  // console.log("callbackFn", callbackFn);
  callbackFn(arg);
}

// hof(alertWindow, "hello")

// hof(alertWindow())

function hof2() {
  return function () {
    // console.log("i'm hof 2")
    return "something";
  };
}

const output = hof2();
// output()

// console.log(output())

// built in method
// array built in

// all arrays have these methods for them: forEach, filter, map, find, includes, etc
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((num, i) => {
  //   console.log("num is", num);
});

// the under the hood implementation of forEach
function myForEach(arr: any[], callback: (element: any) => void) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    callback(element);
  }
}

myForEach(numbers, (num) => {
  //   console.log("num is", num);
});

const numOutput = numbers.map((x) => {
  return x * 2;
});

function myMap<T, K = any>(
  array: T[],
  callback: (element: T, index: number) => K,
) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const value = callback(element, i);
    output.push(value);
  }
  return output;
}

const numOutput2 = myMap(numbers, (num) => {
  return num * 2;
});
// console.log(numOutput2);

// walk through
const people = [
  { id: 1, name: "John", age: 11, gender: "M" },
  { id: 2, name: "Sarah", age: 25, gender: "F" },
  { id: 3, name: "Miguel", age: 34, gender: "M" },
  { id: 4, name: "Aisha", age: 19, gender: "F" },
  { id: 5, name: "David", age: 42, gender: "M" },
  { id: 6, name: "Priya", age: 28, gender: "F" },
];

// forEach
let totalAge = 0;
people.forEach((person) => {
  // console.log(person)
  totalAge += person.age;
});

// map, transform array
const newPeople = people.map((person) => {
  //   return { id: person.id, name: person.name };
  const { id, name } = person;
  //   return { id: id, name: name };
  //   when key and value are spelled the same, you can simplify
  return { id, name };
});

// console.log(newPeople);

// filter
const filteredPeople = people.filter((person) => {
  // return a boolean
  // if true, keep it, if false, remove it
  return person.age > 28;
});

// console.log("filteredPeople", filteredPeople);
// console.log("originalPeople", people);

// combination of map and filter
const processedPeople = people
  .filter((person) => person.gender === "F")
  .map((person) => {
    return { id: person.id };
  });

// find
// find the first element that matches
const personToBeFound = people.find((person) => person.id === 1)!;
// if found, will get the reference to that element
// if not, then undefined
// console.log(personToBeFound);

// includes
// tell you if something exist
const _array = [1, 2, 3];
// console.log(_array.includes(2));

// other basic array methods
// push, pop,
// other useful methods
// reduce, some, every, reverse, slice, sort, toSorted, indexOf

const _numbers = [1, 2, 3, 2, 3, 8, 9, 8, 8, 2, 4, 6, 7, 8, 2, 5, 5];
// sort mutates the original array
// _numbers.sort((a, b) => {
//   return a - b;
// });

// sort without mutating
// const sorted = [..._numbers].sort((a,b)=>a-b);
// simpler method with new built in method
const sorted = _numbers.toSorted((a, b) => b - a);

// console.log(sorted);
// console.log(_numbers);

// scope & closure

const a = "a1";
const b = "b1";
if (true) {
  const a = "a2";
  if (true) {
    const b = "b3";
    const c = "c3";
    // console.log(b)
  }
}

const person = { name: "John" };

function getPerson(person1: any) {
  // console.log(person)
}

getPerson({ name: "Jack" });

function counter(name: string) {
  let count = 0;
  //   closure, the returned function still has access to the scope
  return () => {
    count++;
    console.log(name, count);
  };
}

const accessor = counter("one");
accessor();
accessor();
// accessor();
// accessor();
// accessor();
// accessor();

const accessor2 = counter("two")
accessor2()
accessor2()
accessor2()
accessor2()
accessor2()


// use cases for closure
// 1. debounce
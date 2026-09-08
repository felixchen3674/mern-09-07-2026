// typescript = javascript + explicit types
// ts is a superset of js

// to define a type
// you just put : after the variable name declaration

// let / const

// primitive data types: 5 most common
const str1: string = "string";
const str2: string = `string`; //backtick symbol for string. top left of your keyboard

const wholeNumber: number = 123;
const decimal: number = 123.123;

const bool1: boolean = true;
const bool2: boolean = false;

const und: undefined = undefined;
const n: null = null;

// typescript is smart, if you don't define a type for it, it will know / infer
let firstName = "John"; // ts will know that it should be string
// firstName = 123; // if you change it to number afterward, it will complain

// reference types
// arrays, objects, functions
// define type for array: put [] after the type
const words: string[] = ["apple", "banana", "leet code"];
const scores: number[] = [1, 2, 3, 4];

// const doesn't allow "reassignment" at all
// let allows reassignment, but in Typescript, has to be of same type

// two ways to define type for object
// interface vs type
// good coding practice: always use interface, unless you need type
// if you miss any type, then error;
// if you assign wrong type, then error;

// type is for more specific types
// union type
type Gender = "male" | "female" | "others";

// order doesn't matter for objects
interface Person {
  name: string;
  age: number;
  isRetired: boolean;
  address: {
    street: string;
    country: string;
  };
  gender: Gender;
  // make it optional
  ssn?: string;
}

// // ctrl + space / option + esc
// const gender: Gender = "male";
// // "male", "female", "others"

// object
const person1: Person = {
  name: "John Wick",
  address: {
    street: "123",
    country: "USA",
  },
  gender: "male",
  age: 11,
  isRetired: true,
  ssn: "0001230000",
};

const person2: Person = {
  name: "John Wick",
  address: {
    street: "123",
    country: "USA",
  },
  gender: "others",
  age: 11,
  isRetired: true,
};

// variable naming convention:
// for a single thing, use singular noun 单数
// for array, use plural 复数
const people: Person[] = [person1, person2];

type SpecialType = string | number;
const strsAndNumsMix: SpecialType[] = [123, "412", 124];

// to define a type
// you just put : after the variable name declaration

// if you don't define a return type, then ts will guess
function sum(a: number, b: number): number {
  return a + b;
}

// const output = sum(1, 123);
// console.log(typeof output)

// other common types
// any is not safe
// if you use "any" everything, that is the same as using javascript
let wild: any = "213";
wild = 123;

const todo = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

// const data = [
//   1,
//   "412",
//   2,
//   3,
//   "124",
//   false,
//   "41",
//   true,
//   function () {
//     return 1;
//   },
// ];

// function processData(data: unknown[]) {
//   for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     // unknown forces you to check the data type before you use it
//     if(typeof element === "string"){
//       // do string thing

//     } else if(typeof element === "number"){
//       // do number thing
//     }

//   }
// }

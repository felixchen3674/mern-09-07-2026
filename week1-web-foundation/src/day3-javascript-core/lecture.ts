// data types
// integer, string, char, boolean, float, double, null

// In javascript:
// primitives types: number, string, boolean, null, undefined;

let person = {
  name: "john",
  profilePic: null, // null is empty on purpose
  // address: {
  //   city: "NY"
  // }
};

// undefined is just undefined, we didn't purposefully set it empty

// this is not a runtime error, just a typescript error / warning
// console.log(person.firstName);
// person.address.city

// the function didn't return anything = returning undefined
function foo() {}

// console.log(foo())

// var vs let vs const
// 1. don't use var (it's very very old, back in ES5)
// 2. const: cannot re-assign value
// 3. let: can re-assign

// rule: always use const, unless you need let

// const city = "New York";

// use let for count, because we need to change it
let count = 0;
for (let i = 0; i < 10; i++) {
  count += i;
}
// console.log(count)

// reference types: everything other than primitive
// objects (everything that's non-primitive is an object)
// arrays, functions, class

const nums: number[] = [1, 2, 3, 4, 5];
// access element based on index
const firstNum = nums[0]; // index 0: 1st element
const numsLength = nums.length;
const lastNum = nums[nums.length - 1];
// console.log(nums[1000]);
// js array has no fixed length

// reference types
nums.push(6); // we are modifying nums by reference, we didn't change nums variable itself
nums[0] = 1000; // modify by reference
// console.log(nums);

// ❌ this is not allowed, because you tried to modify by "nums = something"
// nums = [1,2,3]

// ❌ reference error: something is not defined
// console.log(somethingThatDoesntExist);

// undefined vs "not defined"
// undefined is a value, a valid value
// "not defined" is an error

interface Book {
  title: string;
  price: number;
  author: {
    name: string;
    address: { name: string; geo?: { lat: number; lon: number } };
  };
}

const book: Book = {
  title: "intro to typescript",
  price: 10.99,
  author: {
    name: "Felix",
    address: {
      name: "123 street",
      // geo: {
      //   lat: 100,
      //   lon: 100,
      // },
    },
  },
};

// access object property
// 1. use the dot operator
// console.log(book.author);
// optional chaining operator ?.
// console.log(book.author.address.geo.lat)
// 2. use [] with a string inside. Only use this way when needed
console.log(book["author"]);
// const str = "author"
// console.log(book[str]);

// update object property
book.price = 200000;
// console.log(book)
// console.log(book)

function getSummary(longBookVariableName: Book) {
  // 1. using object.property over and over, makes code bulky & hard to read
  // return (
  //   longBookVariableName.title +
  //   " is written by " +
  //   longBookVariableName.author +
  //   ", sold at a price of " +
  //   longBookVariableName.price +
  //   " who lives at " +
  //   longBookVariableName.author.address.name
  // );

  // 2. use destructure to simplify the syntax
  const { author, price, title } = longBookVariableName;
  // return (
  //   title +
  //   " is written by " +
  //   author +
  //   ", sold at a price of " +
  //   price +
  //   " who lives at " +
  //   author.address.name
  // );

  // 2.1 make it even better with string interpolation / string literal / string template
  // backtick ``
  return `${title} is written by ${author} sold for ${price}`;
}

// console.log(getSummary(book));

// primitive types are passed by value
// because they are small
let count1 = 100;
let count2 = count1;

count2 = 200;

// console.log("count1", count1);
// console.log("count2", count2);

// reference types are always passed by reference
const user1 = {
  id: 1,
  name: "user101",
  role: "admin",
  metaData: { a: "a" },
  /// a hundred properties...
};

// share the same reference, if we modify one, it will change both
const user2 = user1; // doesn't copy value, it only shares the address
// console.log(user1 === user2) // true, because objects compare by reference
user2.name = "user202";
// console.log(user1)

// actual copy (shallow copy)
// spread operator ...
const user3 = { ...user1 };
// console.log(user1 === user3)
user3.name = "user303";
// shallow copy doesn't copy beyond 1st layer
user3.metaData.a = "bbb";

// console.log(user2)
// console.log(user3)

// deep copy will copy every layer by value
// in old time
// 1. write a deepClone function yourself
// 2. use JSON.stringify + JSON.parse
// 3. use a library like lodash

// now we can do this
const userDeepClone = structuredClone(user3);

const scores1 = [1, 2, 3, 4, 5];
const scores2 = scores1; //share same address
scores1.push(6);

// shallow copy with ...
const scores3 = [...scores1];
scores3.pop();
scores3.pop();
scores3.pop();

// == vs ===
// == is a loose comparison: type coercion
// only use ===, it is strict comparison, compares the type as well

// if ([] === []) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// control flow


let counter = 0
// count = count + 10
count += 1
count++

const str = "123";


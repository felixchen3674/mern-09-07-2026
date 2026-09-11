// console.log("1")
// console.log("2")
// console.log("3")

// // 10000000
// for (let i = 0; i < 100; i++) {

// }

// // everything after will wait
// console.log("4")
// console.log("5")

// single thread vs multithread
// Single thread, blocking operation

// client/browser vs server
// client sends a request => server
// wait for server to get back (0ms - 5s)
// client get response => do something

// callback function

// function getPersonInfo(){
//   // wait a bit
//   const res = getAPICall()
//   // then you can proceed
//   console.log(res);

// }

// call api with callback function, so we don't block the main thread
// callback fn handles the network latency
// getPersonInfo((person)=>{
//   console.log(person)
// })

// console.log("qoiwdj")

// if you are calling multiple apis, the rely on each other,
// then you would have callback hell
// getPersonInfo(person=>{
//   anotherReeust((res1)=>{
//     anotherRequest2(res=>{
//       anotherRequst3(res=>{

//       })
//     })
//   })
// })

// promise represents an eventual completion of something

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("succeeded");
  } else {
    // reject("failed");
  }
});

// console.log(promise)

// .then + .catch
// async / await syntax

async function bar() {}
const bar2 = async () => {};

// in progress: promise pending
// success: promise fulfilled
// fail: promise rejected
// final: promise settled

const foo = async () => {
  // wrap things that might throw error inside "try" block
  try {
    // put await before a promise to get the successful response
    const res = await promise;
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("but at least we tried");
  }
};

const foo2 = async () => {
  // .then can only be put after a promise
  // .then for success
  // .catch for failure
  // .finally for final
  promise
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log("error", err);
    })
    .finally(() => {
      console.log("finally");
    });
};

// foo2();

const meals = [
  { id: 1, name: "burger" },
  { id: 2, name: "pizza" },
  { id: 3, name: "salad" },
];

async function getMeal() {
  // if have meal, then success
  // if no meal, then fail

  return new Promise((resolve, reject) => {
    const meal = meals.pop();
    if (meal) {
      resolve(meal);
    } else {
      reject(new Error("No meal left"));
    }
  });
}

// await + promise = promise's success response
async function main() {
  try {
    const meal1 = await getMeal();
    console.log(meal1);
    const meal2 = await getMeal();
    console.log(meal2);
    const meal3 = await getMeal();
    console.log(meal3);
    const meal4 = await getMeal();
    // we failed here, we stop, and jump to catch
    console.log(meal4);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("today's done");
  }

  // if meal success
  // print meal
  // else
  // print error message
}

// main();

// application programming interface

// GET
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  // only unique to fetch
  // fetch returns a Response promise, .json will give you the actual data
  const users = await response.json();
  console.log(users);
}
// fetchUsers()


// POST
// username, email, phone
async function addProduct() {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      description: "this pencil is the best",
      /* other product data */
    }),
  });
}

// addProduct();

async function updateProductById(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "iPhone Galaxy +1",
    }),
  });

  const updatedProduct = await response.json();
  console.log(updateProductById);
}

// updateProductById(1)

async function deleteProductById(id: number) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("" + response.status);
    }

    const deletedProduct = await response.json();

    const { title, price } = deletedProduct;
    console.log(`Your product of ${title} is deleted at $${price}`);
  } catch (err) {
    console.log(err);
  } finally {
  }
}


deleteProductById(10000000);

// Async/Await

// Async Keyword is used in JavaScript to initalise the async function when it is used before a function.

// -> It always returns a PROMISE.
// -> If the return value is not a PROMISE, it is going to wrap the value inside a promise and then return it.

async function getData() {
  return p; // Returning a Promise
  // return "Namaste" // Returning a non-promise value -> It will wrap this value inside a promise and then return it.
}

// Initialising a promise using the Promise constructor to return it from the function.
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value");
});

const dataPromise = getData(); //Data Promise consists of the promise which the getData function returns.

// We're using the then chaining to get hold of the promise data.
dataPromise.then((res) => {
  console.log(res);
}); // This will return "Promise Resolved Value"

// Await Keyword

// Await Keyword is used before/ in front of an promise which is yet to be resolved. Its pauses the execution of the async function and waits for the Promise to either resolve successfully or reject with an error.

async function handlePromise() {
  const val = await p;
}
console.log(handlePromise());

// Trying the combination of async and await
const dummyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dummy promise has been resolved");
  }, 5000);
});

async function asyncAwaitFunction() {
  const result = await dummyPromise;
  console.log(result);
}

// asyncAwaitFunction();

// Why Async and Await instead of old method of using Promises?

//This is the normal behavior of Promises.

function asyncAwaitFunciton2() {
  dummyPromise.then((res) => {
    console.log(res);
  }); // Will log "Dummy promise has been resolved" after 5 seconds after "Namaste"!
  console.log("Namaste"); // This will print before the promise as JavaSCript engine goes not block and wait
  //   for the promises to be resolved.
}

// asyncAwaitFunciton2();

// Normally promises inside a function dont make the other parts of the functions wait,
// they normally just dont block the program.

async function asyncAwaitFunction() {
  const result = await dummyPromise;
  console.log("Namaste");
  console.log(result);
}

asyncAwaitFunction();

const API_URL = "https://api.github.com/users/utkkkarshhh";

const handleAPICall = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching the API:", error);
  }
};

handleAPICall();


// Which one to use: Promise (then/catch) or Async/Await?

// Async/Await is syntactic sugar over Then/Catch:

// async/await provides a more readable and concise way to work with Promises. Under the hood, the JavaScript engine still uses then and catch for async functions.
// Both are good, but while using async and await:
// You don't have to deal with callbacks directly.
// Using .then method requires attaching callbacks and handling promise chaining.

// Then and Catch
fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


//   Async / Await
  const asyncAwaitExample = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching the API:", error);
    }
  };
  
  asyncAwaitExample();







const cart = ["shoes", "pants", "kurta"];

//Create Order API which returns orderId which is then used by proceedToPayment function.
createOrder(cart); //Return orderId
proceedToPayment(orderId);

// ->

createOrderApi(cart, function () {
  proceedToPayment(orderId);
}); // Problem with this approach is inversion of control.

// - > How we handle such situations with Promises

const promise = createOrder(cart);

// Promise -> Empty object with data value in it, this data value will
// whatever createOrder api will return.

// A Promise is an object resperesenting the eventual completion or faliure of an asynchronous operation

// {data : undefined}

// const promise = createOrder(cart); whenever this line is executed the
// createOrder api will return us a promise which is an empty object,
// and the program will go on executing. After the execution of the function
// This promise object will be filled by data automatically.

promise.then(function () {
  proceedToPayment(orderId);
});

// Difference b/w callback and promises
// - In callback, we were passing a function to another function
// - In Promise, we are attaching a callback function to a promise object.

//  As soon as the Promise object has data, it will call its callback function. and promise gives us this gurantee that this will call our callback function, whenever there is data in callback function.
// It will be called just once.

//Fetch is a web api which return a promise.

const user = fetch(api)
  // Promise Chaining
  // This can be used instead of Callback Hell or Pyramid of Doom

  .createOrder(cart)
  .then(function () {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    updateWalletBalance(paymentInfo);
  });

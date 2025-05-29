const cart = [
  { productName: "shoes", productCost: 99 },
  { productName: "pants", productCost: 40 },
  { productName: "kurta", productCost: 55 },
];

const validateCart = (cart) => {
  return cart && cart.length > 0;
};

const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    // Validate cart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
      return;
    }

    // Logic to create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 2000);
    } else {
      reject(new Error("Failed to create order"));
    }
  });
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("Payment Successful for Order Id: " + orderId);
    } else {
      reject(new Error("Invalid orderId"));
    }
  });
};

const showOrderSummary = (cart) => {
    return new Promise((resolve, reject) => {
      if (validateCart(cart)) {
        const summary = "Order Summary: " + cart.map(cartItem => cartItem.productName).join(", ");
        resolve(summary);
      } else {
        reject(new Error("Cannot show order summary for an invalid cart"));
      }
    });
  };
  

const updateWalletBalance = () => {
  console.log("Wallet balance updated");
};

createOrder(cart)
  .then((orderId) => {
    console.log("Order ID: " + orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return showOrderSummary(cart);
  })
  .then((orderSummary) => {
    console.log(orderSummary);
    updateWalletBalance();
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });

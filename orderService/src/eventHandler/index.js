const paymentCompleted = require("./paymentCompleted");
module.exports = (message) => {
  console.log("aaaaaaayayay---message.type", message.topic);
  switch (message.topic) {
    case "ORDER_PAYMENT_COMPLETED":
      paymentCompleted(message);
      break;

    default:
      break;
  }
};

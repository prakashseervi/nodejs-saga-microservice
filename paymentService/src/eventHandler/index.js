const executePayment = require("./executePayment");
module.exports = (message) => {
  // console.log("message.topic", message.topic);
  switch (message.topic) {
    case "EXECUTE_PAYMENT":
      executePayment(message.payload);
      break;

    default:
      break;
  }
};

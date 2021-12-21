const orderModel = require("../Model/orderModel");
module.exports = async (message) => {
  try {
    console.log("aaya- message", message);
    const transactionId = message.payload.data;
    const order = await orderModel.findOneAndUpdate(
      { transactionId: transactionId },
      {
        status: "PAYMENT_COMPLETED",
      }
    );
  } catch (e) {
    console.log(e);
  }
  //Payment Completed Status Updated on Order Service
};

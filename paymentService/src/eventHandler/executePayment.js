const Producer = require("../../../kafkaBroker/kafkaHandler/routes");
module.exports = (data) => {
  /** Database Layer Logic Comes Here  */
  try {
    console.log("-aayaya-data", data.data);
    Producer({
      topic: "ORDER_CREATION_TRANSACTIONS",
      type: "PAYMENT_COMPLETED_STATE",
      payload: {
        transactionId: data.data.transactionId,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

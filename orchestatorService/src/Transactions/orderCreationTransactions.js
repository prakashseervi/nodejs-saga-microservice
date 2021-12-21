const Producer = require("../../../kafkaBroker/kafkaHandler/routes");

module.exports = (message) => {
  console.log("message.payload.data", message.type);
  switch (message.type) {
    case "ORDER_CREATED":
      Producer({
        topic: "EXECUTE_PAYMENT",
        payload: {
          data: message.payload.data,
        },
      });
      break;
    case "PAYMENT_COMPLETED_STATE":
      console.log("message.payload.data", message.payload);
      Producer({
        topic: "ORDER_PAYMENT_COMPLETED",
        payload: {
          data: message.payload.transactionId,
        },
      });
    default:
      break;
  }
};

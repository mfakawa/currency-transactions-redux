export const deleteTransfer = id => {
  return {
    type: "DELETE_TRANSFER",
    id
  };
};

export const addTransfer = (name, amount) => {
  let date = Date.now();
  let id = require("shortid").generate();

  return {
    type: "ADD_TRANSFER",
    name,
    amount: parseFloat(amount).toFixed(2),
    id,
    date
  };
};

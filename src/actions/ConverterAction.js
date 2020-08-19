export const euroCost = pln => {
  return {
    type: "EUR_COST",
    pln: parseFloat(pln).toFixed(2)
  };
};

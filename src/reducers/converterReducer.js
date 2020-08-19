const initState = {
  pln: "4.00"
};

const converterReducer = (state = initState, action) => {
  switch (action.type) {
    case "EUR_COST": {
      return { pln: action.pln };
    }
    default:
      return state;
  }
};

export default converterReducer;

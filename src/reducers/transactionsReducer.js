const initState = {
  transactions: [
    { name: "Rachunek za telefon", amount: "8.43", id: 1, date: 1 },
    { name: "Wyjście do kina", amount: "12.02", id: 2, date: 2 },
    { name: "Bilet komunikacji miejskiej", amount: "0.81", id: 3, date: 3 }
  ]
};

const transactionsReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_TRANSFER": {
      return {
        transactions: state.transactions.filter(t => t.id !== action.id)
      };
    }
    case "ADD_TRANSFER": {
      let transaction = {
        name: action.name,
        amount: action.amount,
        id: action.id,
        date: action.date
      };
      return {
        transactions: [...state.transactions, transaction]
      };
    }
    default:
      return state;
  }
};

export default transactionsReducer;

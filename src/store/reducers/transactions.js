import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  transactionList: [
    {
      id: 1,
      date: "2018-04-22",
      description: "Uber",
      value: 150.67,
      category: {
        id: 1,
        name: "Transport",
        color: "#DDD"
      },
      account: {
        id: 1,
        name: "Default",
        initialBalance: 0
      },
      transactionType: "expense"
    },
    {
      id: 2,
      date: "2018-04-23",
      description: "Lorem Ipsum Dolor Transaction Mousepad Monitor",
      value: 200.43,
      category: {
        id: 2,
        name: "Salary",
        color: "lightblue"
      },
      account: {
        id: 1,
        name: "Default",
        initialBalance: 0
      },
      transactionType: "earning"
    },
    {
      id: 3,
      date: "2018-04-24",
      description: "Lorem Ipsum Dolor",
      value: 8.34,
      category: {
        id: 3,
        name: "Home",
        color: "#FA7203"
      },
      account: {
        id: 1,
        name: "Default",
        initialBalance: 0
      },
      transactionType: "expense"
    }
  ]
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case actionTypes.FETCH_TRANSACTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default transactions;

// reducer.js

// Declare initial state
const initialState = {
  basket: [], // Shopping basket details of the logged-in user
  user: null, // Details of the logged-in user
};

// Calculate the total amount of items in the basket
const calculateBasketTotal = (basket) => {
  return basket.reduce((total, item) => total + item.price, 0);
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const updatedBasket = state.basket.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        basket: updatedBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "ADD_TO_BASKET":
      return {
        ...state,

        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

// Export the reducer
export { initialState, calculateBasketTotal, reducer };

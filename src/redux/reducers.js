const initialState = {
    cart: []
  };
  
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItem = state.cart.find(item => item._id === action.payload._id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item._id === action.payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }]
          };
        }
      // cartReducer.js
    case 'REMOVE_FROM_CART':
    return {
      ...state,
      cart: state.cart.filter(item => item._id !== action.payload)
    };
    case 'UPDATE_QUANTITY':
    return {
        ...state,
        cart: state.cart.map(item =>
        item._id === action.payload.itemId
            ? { ...item, quantity: Math.max(1, action.payload.newQuantity) } // Забезпечте, що кількість не менше 1
            : item
        )
  };
  case 'EMPTY_CART':
    return {
      ...state,
      cart: []
    };
      default:
        return state;
    }
    
  }

  export default cartReducer;
  
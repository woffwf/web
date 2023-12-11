export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      payload: item
    };
  };
  
  
  export const removeFromCart = (itemId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: itemId
    };
  };


export const updateQuantity = ({ itemId, newQuantity }) => {
    return {
      type: 'UPDATE_QUANTITY',
      payload: { itemId, newQuantity }
    };
  };

export const emptyCart = () => {
    return {
      type: 'EMPTY_CART'
    };
  };
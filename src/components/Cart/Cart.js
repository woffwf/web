import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; 
import { removeFromCart, updateQuantity } from '../../redux/actions';
import ButtonSelect from '../ButtonSelect/ButtonSelect';
import CheckoutModal from '../CheckoutModal/CheckoutModal'; // Імпортуйте компоненту модального вікна

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart || []);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const calculateTotal = (items) => 
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalCost = calculateTotal(cartItems);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false);
  };

  return (
    <div className="cart-container">
      <h2>Ваш кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик пустий</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Ціна: {item.price}₴</p>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                  <p>Кількість: {item.quantity}</p>
                  <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                </div>
                <p>Об'єм: {item.volume}</p>
                <p>Опис: {item.description}</p>
                <ButtonSelect onClick={() => handleRemove(item._id)}>Видалити</ButtonSelect>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Загальна вартість: {totalCost}₴</p>
        <button 
          className="checkout-button" 
          onClick={handleCheckout} 
          disabled={cartItems.length === 0}
        >
          Оформити замовлення
        </button>
      </div>
      {showCheckoutModal && <CheckoutModal totalCost={totalCost} onClose={handleCloseModal} />}
    </div>
  );
};

export default Cart;

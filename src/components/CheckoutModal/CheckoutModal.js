import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/actions';
import './CheckoutModal.css'; // Ваші стилі для модального вікна

const CheckoutModal = ({ onClose, totalCost }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, address, phone } = formData;
    const isValid = 
      name.trim() !== '' &&
      email.trim() !== '' &&
      address.trim() !== '' &&
      phone.trim() !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(emptyCart());
      alert('Ваше замовлення прийнято успішно. Ми з вами зв\'яжемося найближчим часом');
      onClose(); // Закриття модального вікна
    }
  };

  return (
    <div className="checkout-modal">
      <div className="modal-content">
        <h2>Оформлення замовлення</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Адреса"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
          />
          <p>Сума до сплати: {totalCost}₴</p>
          <button type="submit" disabled={!isFormValid}>Підтвердити замовлення</button>
        </form>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default CheckoutModal;

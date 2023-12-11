import React, { useState } from 'react';
import { createBeverage } from '../../api'; // Переконайтесь, що цей API метод існує
import './ModalCreateBeverage.css'; // Переконайтесь, що ці стилі підключені правильно
import { useNavigate } from 'react-router-dom';

function AddBeverageModal({ onClose }) {
  const navigate = useNavigate();
  const [beverageData, setBeverageData] = useState({
    name: '',
    brand: '',
    price: '',
    volume: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setBeverageData({ ...beverageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBeverage(beverageData).then((response) => {
      alert('Напій успішно додано.');
      onClose();
      navigate(0); // Оновлення сторінки
    }).catch(error => {
      console.error('Помилка при додаванні напою:', error);
      alert('Виникла помилка при додаванні напою. Спробуйте знову.');
    });
  };

  // Перевірка чи всі поля форми заповнені
  const isFormIncomplete = Object.values(beverageData).some(value => value.trim() === '');

  return (
    <div className="add-beverage-modal">
      <div className="modal-content">
        <h2>Додати Новий Напій</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Назва"
            value={beverageData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Бренд"
            value={beverageData.brand}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Ціна"
            value={beverageData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="volume"
            placeholder="Об'єм"
            value={beverageData.volume}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Опис"
            value={beverageData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="URL зображення"
            value={beverageData.image}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isFormIncomplete}>Додати Напій</button>
        </form>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
}

export default AddBeverageModal;

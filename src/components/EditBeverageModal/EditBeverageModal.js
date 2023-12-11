import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateBeverage } from '../../api'; // Переконайтесь, що цей метод API існує
import './EditBeverageModal.css'; // Переконайтесь, що ці стилі підключені правильно

function EditBeverageModal({ beverage, onClose }) {
    const [beverageData, setBeverageData] = useState({ ...beverage });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setBeverageData({ ...beverageData, [e.target.name]: e.target.value });
    };
  
    const isFormIncomplete = Object.values(beverageData).some(value => {
      // Перевірка, чи значення є рядком, і якщо так, чи воно пусте
      return typeof value === 'string' ? value.trim() === '' : value === '';
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!isFormIncomplete) {
        updateBeverage(beverage._id, beverageData).then(() => {
          alert('Напій успішно оновлено.');
          onClose(); // Закриття модального вікна після оновлення напою
          navigate('/beverages');
        }).catch(error => {
          console.error('Помилка при оновленні напою:', error);
          alert('Виникла помилка при оновленні напою. Спробуйте знову.');
        });
      }
    };

  return (
    <div className="edit-beverage-modal">
      <div className="modal-content">
        <h2>Редагувати Напій</h2>
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
          <button type="submit" disabled={isFormIncomplete}>Оновити Напій</button>
        </form>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
}

export default EditBeverageModal;

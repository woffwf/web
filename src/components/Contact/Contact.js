import React from 'react';
import './Contact.css'; // Переконайтеся, що ви створили цей CSS файл

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Зв'яжіться з Нами</h1>

      <div className="contact-info">
        <section className="contact-details">
          <h2>Контактна Інформація</h2>
          <p><strong>Телефон:</strong> +380 123 456 789</p>
          <p><strong>Email:</strong> info@nonalco-drinks.com</p>
          <p><strong>Адреса:</strong> вул. Незалежності, 10, Київ, Україна</p>
          <p><strong>Години Роботи:</strong> Пн-Пт 9:00 - 18:00</p>
        </section>

        <section className="contact-form">
          <h2>Форма Зворотного Зв'язку</h2>
          <form>
            <input type="text" placeholder="Ваше Ім'я" required />
            <input type="email" placeholder="Ваш Email" required />
            <textarea placeholder="Ваше Повідомлення" required></textarea>
            <button type="submit">Надіслати</button>
          </form>
        </section>
      </div>

      <section className="map-section">
        <h2>Наше Розташування</h2>
        <p>Знайдіть нас на карті та завітайте особисто!</p>
        {/* Припустимо, що тут буде вбудована карта Google Maps */}
      </section>
    </div>
  );
};

export default Contact;

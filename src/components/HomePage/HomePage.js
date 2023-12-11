import React from 'react';
import { Link } from 'react-router-dom'; // Якщо ви використовуєте React Router
import './HomePage.css';
import Carousel from '../Carousel/Carousel';
import AboutUs from '../AboutUs/AboutUs';


function HomePage() {
    const specialOffers = [
        { id: 1, image: '/img/cola.png', description: 'Акція 2+1. Купуй 2 бутилки і отримуй 1 в подарунок!' },
        { id: 2, image: '/img/zhivchik.png', description: 'Бери участь в розіграші автомобіля від ЖИВЧИК!:)' },
        // ... інші пропозиції
      ];
  return (
    <div className="home-page">
      <section className="hero-section">
       
        <h1>Ласкаво просимо до нашого магазину безалкогольних напоїв!</h1>
      </section>

      <section className="featured-products">
        <h2>Спеціальні пропозиції</h2>
        <p className="featured-description">
            Не пропустіть наші неймовірні спеціальні пропозиції! Це унікальна можливість отримати ексклюзивні напої за вигідними цінами. Обирайте з широкого асортименту особливих товарів, які зроблять ваш день особливим.
        </p>
        <div className="App">
            <Carousel items={specialOffers} />
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default HomePage;

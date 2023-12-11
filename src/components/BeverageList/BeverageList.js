import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BeverageItem from '../Beverage/BeverageItem';
import Loader from '../Loader/Loader';
import ButtonSelect from '../ButtonSelect/ButtonSelect'; // Переконайтесь, що шлях до файлу вірний
import AddBeverageModal from '../ModalCreateBeverage/ModalCreateBeverage'; // Переконайтесь, що шлях до файлу вірний
import './BeverageList.css';
import {fetchBeverages} from '../../api';

function BeverageList() {
  const [beverages, setBeverages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [filteredBeverages, setFilteredBeverages] = useState([]);
  const [showModal, setShowModal] = useState(false); // Для управління відображенням модального вікна

  useEffect(() => {
    setIsLoading(true);
    fetchBeverages()
      .then(response => {
        setBeverages(response.data);
        const prices = response.data.map(b => b.price);
        setPriceRange({ min: Math.min(...prices), max: Math.max(...prices) });
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка при завантаженні напоїв:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = beverages.filter(beverage => 
      (beverage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beverage.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
      beverage.price >= priceRange.min && beverage.price <= priceRange.max
    );
    setFilteredBeverages(filtered);
  }, [searchTerm, beverages, priceRange]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({ ...prev, [name]: Number(value) }));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const renderBeverages = () => {
    return filteredBeverages.map((beverage) => (
      <BeverageItem key={beverage._id} {...beverage} />
    ));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Пошук за назвою або брендом напою..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="price-filter">
          <label htmlFor="minPrice">Мінімальна ціна: </label>
          <input
            type="number"
            id="minPrice"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
          />
          <label htmlFor="maxPrice">Максимальна ціна: </label>
          <input
            type="number"
            id="maxPrice"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
          />
        </div>
        <ButtonSelect onClick={toggleModal}>Додати Напій</ButtonSelect>
      </div>
      {showModal && <AddBeverageModal onClose={toggleModal} />}
      <div className="card-container">
        {renderBeverages()}
      </div>
    </div>
  );
}

export default BeverageList;

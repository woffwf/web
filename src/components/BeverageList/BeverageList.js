// BeverageList.js
import React, { useState, useContext, useEffect } from 'react';
import BeverageItem from '../Beverage/BeverageItem';
import BeverageContext from '../../BeverageContext';
import './BeverageList.css';

function BeverageList() {
  const { beverages } = useContext(BeverageContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBeverages, setFilteredBeverages] = useState(beverages);

  useEffect(() => {
    // Фільтрація напоїв за пошуковим запитом по назві та бренду
    const filtered = beverages.filter(beverage => 
      beverage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beverage.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeverages(filtered);
  }, [searchTerm, beverages]);

  // Обробник зміни пошукового поля
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Функція для рендеринга напоїв
  const renderBeverages = () => {
    return filteredBeverages.map((beverage, id) => (
      <BeverageItem key={id} {...beverage} />
    ));
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Пошук за назвою або брендом напою..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="card-container">
        {renderBeverages()}
      </div>
    </div>
  );
}

export default BeverageList;

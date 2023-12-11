import React, { createContext, useState } from 'react';

const BeverageContext = createContext();

export const BeverageProvider = ({ children }) => {
  // Встановлюємо початкові дані як стан
  const [beverages, setBeverages] = useState([
    { id: 1, brand: 'Coca Cola', name: 'Blackcurrant Royale', price: 39, volume: '0.5л', description: 'Non-alcoholic beverage with blackcurrant flavor', image: './img/cola.png' },
    { id: 2, brand: 'Живчик', name: 'Garden Spritz', price: 30, volume: '0.5л', description: 'Refreshing non-alcoholic spritz', image: './img/zhivchik.png' },
    { id: 3, brand: 'Спрайт', name: 'Tale of Forest', price: 32, volume: '0.5л', description: 'Non-alcoholic beverage Tale of Forest', image: './img/sprite.png' },
    { id: 4, brand: 'Доктор Пепер', name: 'Blueberry Juniper', price: 49, volume: '0.5л', description: 'Non-alcoholic beverage with hazelnut flavorNon-alcoholic beverage with hazelnut flavorNon-alcoholic beverage with hazelnut flavorNon-alcoholic beverage with hazelnut flavorNon-alcoholic beverage with hazelnut flavorNon-alcoholic beverage with hazelnut flavor', image: './img/drpepper.png' }
  ]); // Початковий стан із вашими даними

  const addBeverage = (newBeverage) => {
    setBeverages((prevBeverages) => [...prevBeverages, newBeverage]);
  };

  return (
    <BeverageContext.Provider value={{ beverages, addBeverage }}>
      {children}
    </BeverageContext.Provider>
  );
};

export default BeverageContext;

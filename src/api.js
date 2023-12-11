import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Замініть на URL вашого сервера

// Функція для отримання напоїв із можливістю передачі параметрів фільтрації
export const fetchBeverages = (searchTerm = '', minPrice, maxPrice) => {
    const params = { searchTerm };
    if (minPrice !== undefined) params.minPrice = minPrice;
    if (maxPrice !== undefined) params.maxPrice = maxPrice;
  
    return axios.get(`${BASE_URL}/beverages`, { params });
  };
  

// Функція для створення нового напою
export const createBeverage = (newBeverage) => {
  return axios.post(`${BASE_URL}/beverages`, newBeverage);
};

// Функція для оновлення існуючого напою
export const updateBeverage = (id, updatedBeverage) => {
  return axios.put(`${BASE_URL}/beverages/${id}`, updatedBeverage);
};

// Функція для видалення напою
export const deleteBeverage = (id) => {
  return axios.delete(`${BASE_URL}/beverages/${id}`);
};

// Функція для отримання деталей напою за ID
export const fetchBeverageById = (id) => {
    return axios.get(`${BASE_URL}/beverages/${id}`);
  };
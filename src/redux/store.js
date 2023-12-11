import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState); // Змінено ключ з 'cart' на 'reduxState'
  } catch(e) {
    console.error("Не вдалося зберегти стан", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState'); // Змінено ключ з 'cart' на 'reduxState'
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Не вдалося завантажити стан", e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: cartReducer,
  preloadedState: persistedState ? { cart: persistedState.cart } : undefined // Забезпечує правильну структуру стану
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

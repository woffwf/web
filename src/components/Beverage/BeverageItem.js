import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions'; // Переконайтеся, що шлях до файлу вірний
import './BeverageItem.css';
import ButtonSelect from '../ButtonSelect/ButtonSelect';


function truncateDescription(description, maxWords) {
  const words = description.split(' ');
  if (words.length <= maxWords) {
    return description;
  }
  const truncatedWords = words.slice(0, maxWords);
  return `${truncatedWords.join(' ')}...`;
}

function BeverageItem({ _id, brand, name, price, volume, description, image }) {
  const truncatedDescription = truncateDescription(description, 10);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { _id, brand, name, price, volume, description, image };
    console.log(item)
    dispatch(addToCart(item));
  };

  return (
    <div className="beverage-item">
      <Link to={`/beverages/${_id}`}>
        <img src={image} alt={`${brand} ${name}`} />
        <p>Бренд: {brand}</p>
        <p>Назва: {name}</p>
        <p>Ціна: {price}₴</p>
        <p>Об'єм: {volume}</p>
        <p>Опис: {truncatedDescription}</p>
      </Link>
      <ButtonSelect onClick={handleAddToCart} className="add-to-cart-button">
        Додати в кошик
      </ButtonSelect>
    </div>
  );
}

export default BeverageItem;

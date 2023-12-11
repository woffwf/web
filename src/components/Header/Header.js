import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css'; // Припустимо, стилі заголовка знаходяться в цьому файлі
import cartIcon from '../../assets/cart-icon.svg'; // Шлях до вашого зображення/іконки кошика
import { Link } from 'react-router-dom';
function Header() {
  const cartItems = useSelector(state => state.cart || []);

  return (
    <header className="header">
      <h1>Магазин безалкогольних напоїв</h1>
      <nav>
        <ul className="navigation">
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/beverages">Наші продукти</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
          <li className="cart-icon">
            <Link to="/cart">
              <li className="cart-icon">
                <Link to="/cart">
                  <img className='cart-icon-img' src={cartIcon} alt="Кошик" />
                  {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                </Link>
              </li>
             
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

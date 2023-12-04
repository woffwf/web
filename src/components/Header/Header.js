import React from 'react';
import './Header.css'; // Припустимо, стилі заголовка знаходяться в цьому файлі

function Header() {
  return (
    <header className="header">
      <h1>Магазин безалкогольних напоїв</h1>
      <nav>
        <ul className="navigation">
          <li><a href="/">Головна</a></li>
          <li><a href="/products">Наші продукти</a></li>
          <li><a href="/about">Про нас</a></li>
          <li><a href="/contact">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

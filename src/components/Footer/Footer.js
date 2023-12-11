import React from 'react';
import './Footer.css'; // Підключення CSS стилів для Footer

function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 Магазин безалкогольних напоїв. Всі права захищені.</p>
      <p><a href="/contact">Контакти</a></p>
    </footer>
  );
}

export default Footer;

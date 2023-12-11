import React from 'react';
import './Footer.css'; // Підключення CSS стилів для Footer
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 Магазин безалкогольних напоїв. Всі права захищені.</p>
      <p><Link to="/contact">Контакти</Link></p>
    </footer>
  );
}

export default Footer;

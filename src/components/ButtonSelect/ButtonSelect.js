// ButtonSelect.js
import React from 'react';
import './ButtonSelect.css'; // Імпорт CSS стилів для ButtonSelect

function ButtonSelect({ children, onClick }) {
  return (
    <button className="button-select" onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSelect;

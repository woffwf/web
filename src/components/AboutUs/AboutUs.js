import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Якщо ви хочете додати стилі

function AboutUs() {
  return (
    <section className="about-us">
      <h2>Про нас</h2>
      <p>Дізнайтеся більше про нашу місію та цінності.</p>
      <Link to="/about">Детальніше</Link>
    </section>
  );
}

export default AboutUs;

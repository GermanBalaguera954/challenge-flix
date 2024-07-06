import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import './Style.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="banner-content">
          <h1>Front End</h1>
          <p>Challenge React</p>
        </div>
      </div>
      <div className="categories">
        <h2>Front End</h2>
        <div className="cards">
          <Card title="¿Cuándo usar let, var y const?" />
          <Card title="¿Qué es JavaScript?" />
          <Card title="Equipo Front End" />
        </div>
        <h2>Back End</h2>
        <div className="cards">
          <Card title="Spring Framework" />
          <Card title="¿Qué es SQL y NoSQL?" />
          <Card title="Conoce los Enum" />
        </div>
        <h2>Innovación y Gestión</h2>
        <div className="cards">
          <Card title="¿Qué son las Soft Skills?" />
          <Card title="Las 7 Soft Skills más demandadas" />
          <Card title="¿Qué son metodologías ágiles?" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

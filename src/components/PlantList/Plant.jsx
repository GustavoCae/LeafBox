import React from 'react';
import { Link } from 'react-router-dom';
import "./PlantList.css";

// Componente funcional Plant que recebe uma planta como prop
const Plant = (plant) => {
  return (
    <div className="plant-item flex flex-column flex-sb">
      <div className="plant-item-img">
        <img src={plant.cover_img} alt="Sem Imagem" />
      </div>
      <div className='plant-item-info text-center'>
        <Link to={`/plant/${plant.id}`}>
          <div className='plant-item-info-item title fw-7 fs-18'>
            <span>{plant.name}</span>
          </div>
        </Link>
        <div className='plant-item-info-item binomial-name fs-15'>
          <span className='text-capitalize fw-7'>Binomial name: </span>
          <span>{plant.binomial_name || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default Plant;

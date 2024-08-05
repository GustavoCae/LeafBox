import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader"; 
import coverImg from '../../images/foto_nao_disponivel.png'; 
import "./PlantDetails.css";
import { FaArrowLeft } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const URL = "https://openfarm.cc/api/v1/crops/"; // URL base para a API


const PlantDetails = () => {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(false); 
  const [plant, setPlant] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getPlantDetails() {
      try {
        const response = await axios.get(`${URL}${id}.json`); // Requisição para a API com o id da plantas
        const data = await response.data; // dados da resposta

        if (data && data.data) {
          // Desestruturação dos dados retornados pela API
          const {
            attributes: {
              name,
              binomial_name,
              description,
              sun_requirements,
              sowing_method,
              main_image_path
            }
          } = data.data;

          // Cria um novo objeto planta com os dados obtidos
          const newPlant = {
            name: name || "N/A",
            binomial_name: binomial_name || "N/A",
            description: description || "N/A",
            cover_img: main_image_path ? `${main_image_path}` : coverImg,
            sun_requirements: sun_requirements || "N/A",
            sowing_method: sowing_method || "N/A"
          };
          setPlant(newPlant); // Define o estado da planta com o novo objeto
        } else {
          setPlant(null); // Define o estado da planta como null se não houver dados
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPlantDetails(); // Chama a função para obter os detalhes da planta
  }, [id]); // Executa o efeito quando o id muda

  console.log(plant); // Loga a planta no console para depuração

  if (loading) return <Loading />;

  return (
    <section className='plant-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/plant")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Voltar</span>
        </button>
        <div className='plant-details-content grid'>
          <div className='plant-details-img'>
            <img src={plant?.cover_img} alt="Sem imagem" />
          </div>
          <div className='plant-details-info'>
            <div className='plant-details-item name'>
              <span className='fw-6 fs-24'>{plant?.name}</span>
            </div>
            <div className='plant-details-item binomial-name'>
              <span className='fw-6'>Binominal name: </span>
              <span>{plant?.binomial_name}</span>
            </div>
            <div className='plant-details-item description'>
            <span className='fw-6'>Description: </span>
              <span>{plant?.description}</span>
            </div>
            <div className='plant-details-item name'>
              <span className='fw-6'>Sowing method: </span>
              <span>{plant?.sowing_method}</span>
            </div>
            <div className='plant-details-item name'>
              <span className='fw-6'>Sun requirements: </span>
              <span>{plant?.sun_requirements}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlantDetails;
import React from 'react'; 
import { useGlobalContext } from '../../context'; 
import Loading from "../Loader/Loader"; 
import coverImg from "../../images/foto_nao_disponivel.png"; 
import Plant from '../PlantList/Plant'; 
import "./PlantList.css"; 


const PlantList = () => {
  // Desestruturação do contexto global para obter plantas, estado de carregamento e o resultado da busca
  const { plants, loading, resultPlant } = useGlobalContext();

  const plantsWithCovers = plants.map((singlePlant) => {
    return {
      ...singlePlant,
      cover_img: singlePlant.main_image_path ? `${singlePlant.main_image_path}` : coverImg
    };
  });

  // Log das plantas com imagens de capa para depuração
  console.log(plantsWithCovers);

  if (loading) return <Loading />;

  return (
    <section className='plantList'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultPlant}</h2>
        </div>
        <div className='plantlist-content grid'>
          {
            // Mapeia as primeiras 30 plantas e renderiza o componente Plant para cada uma
            plantsWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Plant key={index} {...item} />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default PlantList;
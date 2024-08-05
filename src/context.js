import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

// URL base para a API de dados de plantas
const URL = "https://openfarm.cc/api/v1/crops/?filter=";

// Criação do contexto da aplicação
const AppContext = React.createContext();

// Componente provedor do contexto
const AppProvider = ({ children }) => {
  // Estado para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState("coconut");
  // Estado para armazenar a lista de plantas retornadas pela API
  const [plants, setPlants] = useState([]);
  // Estado para indicar se os dados estão sendo carregados
  const [loading, setLoading] = useState(true);
  // Estado para armazenar a mensagem de resultado da busca
  const [resultPlant, setResultPlant] = useState("");

  // Função para buscar os dados das plantas da API
  const fetchPlants = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${URL}${searchTerm}`);
      const data = response.data;
      console.log('API response data:', data); // Log para verificar a resposta da API

      // Verifica se os dados existem e se têm a estrutura esperada
      if (data && data.data) {
        // Mapeia os dados para um novo array de plantas com os atributos desejados
        const newPlants = data.data.slice(0, 30).map((plantSingle) => {
          const {
            id,
            attributes: {
              name,
              binomial_name,
              description,
              sun_requirements,
              sowing_method,
              main_image_path
            }
          } = plantSingle;

          return {
            id,
            name,
            binomial_name,
            description,
            sun_requirements,
            sowing_method,
            main_image_path
          };
        });
        setPlants(newPlants); // Atualiza o estado das plantas

        // Define a mensagem de resultado baseada na quantidade de plantas encontradas
        if (newPlants.length > 0) {
          setResultPlant("Resultado da sua busca");
        } else {
          setResultPlant("Resultado não encontrado!");
        }
      } else {
        setPlants([]); // Limpa a lista de plantas se os dados não forem válidos
        setResultPlant("Resultado não encontrado para a busca");
      }
    } catch (error) {
      console.log(error); 
    } finally {
      setLoading(false); 
    }
  }, [searchTerm]); // Reexecuta a função sempre que o termo de busca mudar

  // Hook useEffect para executar a busca de plantas quando o componente for montado ou quando o termo de busca mudar
  useEffect(() => {
    fetchPlants();
  }, [searchTerm, fetchPlants]);

  // Provedor do contexto, passando os estados e funções para os componentes filhos
  return (
    <AppContext.Provider value={{
      loading, plants, setSearchTerm, resultPlant, setResultPlant,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

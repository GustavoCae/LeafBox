import React, { useRef, useEffect } from 'react'; 
import { FaSearch } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom'; 
import { useGlobalContext } from '../../context'; 
import "./SearchForm.css"; 


const SearchForm = () => {
  const { setSearchTerm, setResultPlant } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  // Hook useEffect para focar no campo de texto ao montar o componente
  useEffect(() => {
    searchText.current.focus();
  }, []);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim(); // Remove espaços em branco no início e no fim
    // Verifica se o termo de busca é vazio ou contém apenas caracteres especiais
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("coconut"); // Define um termo de busca padrão
      setResultPlant("Por favor, digite alguma coisa!"); // Define mensagem de erro caso nada seja digitado
    } else {
      setSearchTerm(searchText.current.value); // Define o termo de busca
    }
    navigate("/plant");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder='Coconut ...'
                ref={searchText}
              />
              <button type="submit" className='flex flex-c'>
                <FaSearch className='text-green' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
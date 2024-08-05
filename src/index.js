import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from '../src/context'; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About'; 
import PlantList from "./components/PlantList/PlantList";
import PlantDetails from "./components/PlantDetails/PlantDetails";

// Cria a raiz do aplicativo usando React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo
root.render(
  // Envolve o aplicativo no AppProvider para fornecer o contexto
  <AppProvider>
    {/* Configura o roteamento do aplicativo */}
    <BrowserRouter>
      <Routes>
        {/* Define a rota raiz que renderiza o componente Home */}
        <Route path="/" element={<Home />}>
          {/* Define a rota para a página About */}
          <Route path="about" element={<About />} />
          {/* Define a rota para a lista de plantas */}
          <Route path="plant" element={<PlantList />} />
          {/* Define a rota para os detalhes de uma planta específica com base no ID */}
          <Route path="/plant/:id" element={<PlantDetails />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

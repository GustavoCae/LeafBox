import React from 'react';
import "./About.css";
import aboutImg from "../../images/plant-shelf.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sobre</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Sobre o LEAFBOX</h2> 
            <p className='fs-17'>
              O LEAFBOX é um projeto acadêmico desenvolvido para proporcionar uma experiência fácil e intuitiva de consulta de informações sobre plantas. Utilizando a poderosa API do Open Farm, nosso site permite que você busque dados detalhados sobre uma vasta gama de plantas, desde informações básicas até detalhes específicos sobre cultivo e cuidados.
              Nosso objetivo é ajudar entusiastas de jardinagem, estudantes, pesquisadores e qualquer pessoa interessada no mundo das plantas a acessar informações precisas e úteis de maneira rápida e eficiente. Aqui no LEAFBOX, acreditamos que o conhecimento sobre plantas deve ser acessível a todos e que, com as informações corretas, qualquer um pode se tornar um jardineiro de sucesso.
              Explore o nosso site para descobrir tudo o que você precisa saber sobre as suas plantas favoritas, desde o nome científico e a descrição até os requisitos de luz solar e métodos de plantio. Estamos comprometidos em fornecer a você as melhores ferramentas e recursos para transformar seu conhecimento e amor pelas plantas em um jardim próspero e saudável.
            </p>
            <p className='fs-17'>
              Obrigado por visitar o LEAFBOX. Esperamos que você encontre o que procura e que nosso site se torne uma referência confiável em suas jornadas botânicas. Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato conosco.
              Feliz jardinagem!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;

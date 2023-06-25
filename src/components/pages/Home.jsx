import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import MiniIDE from "../MiniIDE";
import Navbar from '../Navbar'
import Footer from '../Footer'
import "./Home.css";

const Home = () => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    
    let frase =  "Bem-vindo(a)! Aqui você encontrará uma coleção dos meus trabalhos e projetos mais recentes. Graduando em Análise e Desenvolvimento de Sistemas, atualmente estou focado em aprimorar minhas habilidades em tecnologias como React e Node JS, buscando projetos desafiadores para expandir meus conhecimentos.";

    let i = 0;
    const interval = setInterval(() => {
      setTexto((prevText) => {
        const nextIndex = i + 1;
        return frase.slice(0, nextIndex);
      });

      i = (i + 1) % frase.length;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <Navbar/>
      <div className="apresentacao">
        <div id="div01">
          <Pokemon />
          <h4>{texto}</h4>
          <br />
        </div>
      </div>
      <div className="ide">
        <MiniIDE />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
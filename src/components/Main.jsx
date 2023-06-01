import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import React from "react";
import './main.css';


const Main = () => {

    const [texto, setTexto] = useState('');

    useEffect(() => {
      let texto01 = 'Bem-vindo(a)! Aqui você encontrará uma coleção dos meus trabalhos e projetos mais recentes. '
      let texto02 = 'Graduando em Análise e Desenvolvimento de Sistemas, atualmente estou focado em aprimorar minhas habilidades em tecnologias como React e Node JS, buscando projetos desafiadores para expandir meus conhecimentos.'
      let texto03 = 'Decidi juntar alguns dos meus projetos em um site de portfólio. Acredito que é uma maneira eficaz de apresentar meu trabalho de forma organizada e acessível a um público mais amplo.'
      const frase =  texto01 + texto02;
      

      let i = 0;
  
      const interval = setInterval(() => {
        setTexto(prevText => {
          const nextIndex = i + 1;
          return frase.slice(0, nextIndex);
        });
  
        i = (i + 1) % frase.length;
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  
    
    return (
        <div id="main">
            <div id="div01">
            <Pokemon/>
            <h4>{texto}</h4>
            </div>

            <div id="div02">
            
            </div>
            
            <div id="div03">
           
            </div>
        </div>
    );
};

export default Main;
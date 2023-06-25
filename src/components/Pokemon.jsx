import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [urlSprite, setUrlSprite] = useState("");
 
  useEffect(() => {
    const id = Math.floor(Math.random() * 898) + 1; // Gera um número aleatório entre 1 e 898 (total de Pokémon)
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    setUrlSprite(url);
  }, []);

  return (
    <div>
      <div id="imgPkm">
        <img src={urlSprite} alt="Pokemon Sprite" />
      </div>
    </div>
  );
};

export default Pokemon;

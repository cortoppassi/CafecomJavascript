import React, { useEffect, useState } from 'react';

const Coding = () => {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const frase = ' CODING...';
    let i = 0;

    const interval = setInterval(() => {
      setTexto(prevText => {
        const nextIndex = i + 1;
        return frase.slice(0, nextIndex);
      });

      i = (i + 1) % frase.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <h1>{texto}</h1>;
};

export default Coding;
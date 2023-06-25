import React, { useState } from "react";

export default function ValidadorJS() {
  const [codeInBytes, setCodeInBytes] = useState(0);
  const [passedOrFailed, setPassedOrFailed] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [runtime, setRuntime] = useState(0);
  const [totalOfLines, setTotalOfLines] = useState(0);

    const bytes = encodeURI(textAreaValue).split(/%..|./).length - 1;

    try {
      eval(textAreaValue);
      setPassedOrFailed("Código Válido!");
    } catch (err) {
      setPassedOrFailed("Código inválido!");
    }

    const inicio = performance.now();
    textAreaValue;
    const fim = performance.now();
    setRuntime(fim - inicio);

    console.time("Meu timer");
    textAreaValue;
    console.timeEnd("Meu timer");

    const linhas = textAreaValue.split("\n");
    setTotalOfLines(linhas.length);


  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  };
  return (
    <div>
        <h5>javascript validator</h5>
        <textarea onKeyup={elementByte} id="areaTxt" onChange={handleChange}></textarea>
        <ul>
          <li>{passedOrFailed}</li>
        </ul>
        <ul>
          <li>{totalOfLines} line</li>
        </ul>
        <ul>
          <li>Este código levou: {runtime} milissegundos.</li>
        </ul>
        <ul>
          <li>{codeInBytes} byte</li>
        </ul>
    </div>
  );
}

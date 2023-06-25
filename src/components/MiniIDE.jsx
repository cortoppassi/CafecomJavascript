import React, { useState } from 'react';

import './MiniIDE.css';

function MiniIDE() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [consoleOutput, setConsoleOutput] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = () => {
    try {
      const iframe = document.createElement('iframe');
      document.body.appendChild(iframe);

      const iframeWindow = iframe.contentWindow;
      iframeWindow.console = {
        log: (message) => {
          setConsoleOutput((prevOutput) => prevOutput + message + '\n');
        },
        error: (message) => {
          setConsoleOutput((prevOutput) => prevOutput + 'Erro: ' + message + '\n');
        },
      };

      const iframeDocument = iframeDocument.contentDocument || iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(`
        <script>
          try {
            ${code}
          } catch (error) {
            console.error(error);
          }
        </script>
      `);
      iframeDocument.close();

      setOutput(iframe.contentWindow.document.body.innerHTML);
      document.body.removeChild(iframe);
    } catch (error) {
      setOutput('');
      setConsoleOutput('Erro: ' + error);
    }
  };

  return (
    <div>
      <h1>Mini IDE HTML/CSS/JS</h1>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows={10}
        cols={50}
        placeholder="Digite seu código HTML, CSS e JavaScript aqui"
      />
      <button onClick={runCode}>Executar</button>
      <h2>Output:</h2>
      <div className="output" dangerouslySetInnerHTML={{ __html: output }}></div>
      <h2>Console:</h2>
      <pre className="console">{consoleOutput}</pre>
    </div>
  );
}

export default MiniIDE;

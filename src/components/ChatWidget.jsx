import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './ChatWidget.css'
const ChatWidget = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (newMessage) => {
    // Adiciona a mensagem do usuário ao estado de mensagens
    setMessages([...messages, { author: 'user', message: newMessage }]);

    // Chama a API ou qualquer outra lógica para enviar a mensagem para o ChatGPT
    // e obter a resposta

    // Aqui você pode usar a lógica da API do GPT-3.5 para obter uma resposta
    // Consulte a documentação da API para obter mais detalhes

    // Por enquanto, vou adicionar uma resposta de exemplo
    const response = 'Exemplo de resposta do ChatGPT';

    // Adiciona a resposta do ChatGPT ao estado de mensagens
    setMessages([...messages, { author: 'ChatGPT', message: response }]);
  };

  return (
    <div className="chat-widget">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="ChatGPT"
        subtitle=""
      />
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.author}`}>
            <span className="author">{message.author}: </span>
            <span className="content">{message.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWidget;

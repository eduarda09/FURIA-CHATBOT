import React from 'react';
import '../Header/Header.css';
import { useChat } from '../../context/ChatContext';



const Header = () => {
  const { setIsChatOpen } = useChat();
  return (
    <header className="header">
      <h1>Bem-Vindo ao <br/>FanBot FURIA!</h1>
      <p>O seu canal direto com <br/>o time mais furioso.</p>
      <button onClick={() => setIsChatOpen(true)}>Começar conversa</button>
    </header>
  );
};

export default Header;
import React, { useEffect, useRef, useState } from 'react';
import ChatForm from '../ChatForm/ChatForm';
import ChatMessage from '../ChatMessage/ChatMessage';
import { useChat } from '../../context/ChatContext';


const ChatBot = () => {
      const { isChatOpen, setIsChatOpen } = useChat();
      const [chatHistory, setChatHistory] = useState([]);
      const chatBodyRef = useRef();

      const generateBotResponse = async (history) => {

        const updateHistory = (text) => {
          setChatHistory(prev => [...prev.filter(msg => msg.text !== "Pensando..."), { role: "model", text }])
        }

        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));


        const userMessage = history[history.length - 1].parts[0].text;
        const messageToSend = `Essa pergunta é sobre a FURIA Gaming: ${userMessage}`;


        updateHistory("Pensando...");

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: messageToSend }] }] })
        }

        try {
          const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
          const data = await response.json();
          if (!response.ok) throw new Error(data.error.message || "Algo deu errado!");

          const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
          updateHistory(apiResponseText);
        } catch (error) {
          console.log(error);
          updateHistory("Desculpe, ocorreu um erro ao tentar responder.");
        }
      };

      useEffect(() => {
        if (chatBodyRef.current) {
          chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
        }
      }, [chatHistory]);

  return (
    <div className={`container ${isChatOpen ? "show-chatbot" : ""}`}>
            <button onClick={() => setIsChatOpen(prev => !prev)} id="chatbot-toggler">
                <span className="material-symbols-outlined">mode_comment</span>
                <span className="material-symbols-outlined">close</span>
            </button>
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <div className="header-info">
              <img className="logo" src="../src/assets/furia.png" alt="" />
              <h2 className="logo-text">FURIA ChatBot</h2>
            </div>
            <button
              onClick={() => setIsChatOpen(prev => !prev)}
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </button>
          </div>
          <div ref={chatBodyRef} className="chatbot-body">
            <div className="message bot-message">
              <p className="message-text">
                Olá! Como a FURIA pode te ajudar hoje?
              </p>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

          </div>
          <div className="chatbot-footer">
            <ChatForm setChatHistory={setChatHistory} chatHistory={chatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      </div>


  )
}

export default ChatBot;

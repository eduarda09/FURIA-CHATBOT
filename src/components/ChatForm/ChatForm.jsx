import React, { useRef } from 'react'

const ChatForm = ({setChatHistory, chatHistory, generateBotResponse}) => {

  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = ""

    setChatHistory(history => [...history, { role: "user", text: userMessage}]);

    setTimeout(() => {

      setChatHistory((history) => [...history, {role: "model", text: "Pensando..."}]);


      generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    },600);

  }

  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Mensagem..."
          className="message-input"
          required />
        <button className="material-symbols-outlined">arrow_upward</button>
      </form>
    </div>
  )
}

export default ChatForm

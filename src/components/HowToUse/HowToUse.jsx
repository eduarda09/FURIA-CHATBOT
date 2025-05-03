import React, { useRef, useEffect} from 'react';
import './HowToUse.css';



const HowToUse = () => {
  const imgRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  // Função para armazenar as refs
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section id="como-usar" className="container">
      <div className="chat-description">
        <h1>Veja o FanBot em <br/> ação!</h1>
        <video
          src="../../assets/chat-video.mp4"
          controls
          width="600"
        ></video>
        <ul className="description">
          <li ref={addToRefs}><span>✔️</span> Chat Inteligente com informações sobre o time</li>
          <li ref={addToRefs}><span>✔️</span> Funciona em tempo real</li>
          <li ref={addToRefs}><span>✔️</span> Curiosidades, estatísticas e interatividade</li>
        </ul>
      </div>
      <img ref={imgRef} className="animated-image"  src="../../assets/chat.jpg" alt="" />
    </section>
  );
};

export default HowToUse;
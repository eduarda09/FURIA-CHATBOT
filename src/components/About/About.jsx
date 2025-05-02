import React, { useRef, useEffect } from 'react';
import '../About/About.css';

const About = () => {
  const titleRef = useRef(null);
  const boxRefs = useRef([]);

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

    if (titleRef.current) observer.observe(titleRef.current);
    boxRefs.current.forEach(box => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  const addToBoxRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  return (
    <div>
      <section id="sobre" className="about-container">
        <h1 ref={titleRef} className="animated-title">
          Sobre a FURIA
        </h1>

        <div className="grid-container">
          <div className="box-1" ref={addToBoxRefs}>
            <p>Quem somos</p>
            <p>FURIA é uma organização brasileira de Esports conhecida mundialmente por sua paixão e dedidação aos jogos.</p>
          </div>
          <div className="box-2" ref={addToBoxRefs}>
            <p>Missão</p>
            <p>Levar o nome do Brasil ao topo do Esport mundial.</p>
          </div>
          <div className="box-3" ref={addToBoxRefs}>
            <p>Mais que um time</p>
            <p>A FURIA é uma família formada por jogadores, torcedores e criadores de conteúdo.</p>
          </div>
          <div className="box-4" ref={addToBoxRefs}>
            <p>Conquistas</p>
            <ul>
              <li>Valorant Champions Tour 2022: Game Changers</li>
              <li>Campeã do VALORANT Ignition Series: Brazil (2020)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
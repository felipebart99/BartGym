import { useState } from "react";

const Beneficios = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const beneficios = [
    {
      titulo: "Treinos Personalizados",
      descricao:
        "Planos de treino adaptados ao seu objetivo, seja ganho de massa, emagrecimento ou condicionamento físico.",
    },
    {
      titulo: "Estrutura Moderna",
      descricao:
        "Ambiente amplo, climatizado e equipado com aparelhos de última geração para garantir o melhor desempenho.",
    },
    {
      titulo: "Acompanhamento Profissional",
      descricao:
        "Equipe de instrutores qualificados sempre pronta para orientar e acompanhar sua evolução.",
    },
    {
      titulo: "Aulas Dinâmicas",
      descricao:
        "Variedade de modalidades, como funcional, HIIT, dança e muito mais para deixar seu treino divertido.",
    },
    {
      titulo: "Bem-Estar e Saúde",
      descricao:
        "Espaços planejados para promover qualidade de vida, disposição e energia no seu dia a dia.",
    },
    {
      titulo: "Comunidade Ativa",
      descricao:
        "Um ambiente motivador, onde você encontra incentivo, amizades e muita energia positiva.",
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="problems" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">É provável que você já sentiu...</h2>

        <div className="accordion">
          {beneficios.map((problema, index) => (
            <div
              key={index}
              className={`accordion-item ${
                index % 2 === 0 ? "destaque" : "destaque2"
              } ${activeIndex === index ? "active" : ""}`}
            >
              <h3
                className="accordion-header"
                onClick={() => toggleItem(index)}
              >
                {problema.titulo}
                <span className="accordion-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h3>

              <div
                className="accordion-content"
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  opacity: activeIndex === index ? "1" : "0",
                }}
              >
                <p>{problema.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;

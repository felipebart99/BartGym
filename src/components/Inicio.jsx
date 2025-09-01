import Banner from "../assets/BanneGym.jpg";
import Typewriter from "./Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";
const Inicio = () => {
  return (
    <section
      id="inicio"
      style={{
        position: "relative", // limita o overlay só a essa seção
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay com opacidade só no fundo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1, // overlay no fundo
        }}
      ></div>

      {/* Conteúdo acima do overlay */}
      <div className="principal" style={{ position: "relative", zIndex: 2 }}>
        <div className="description text-center text-md-start">
          <h1 className="title-main">Qualidade de vida é aqui</h1>
          <h2 className="subtitle">Conheça a melhor academia da cidade </h2>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <i className="bi bi-geo-alt-fill"></i>
            <Typewriter
              text="Recife - Pernambuco"
              speed={70}
              startOnView={true}
            />
          </div>
          <p className="text-content">
            Sua transformação começa aqui, conheça nossa unidade e metodologias
            de treino feita especialmente para você!
          </p>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Conheça a BART GYM
          </a>
        </div>
      </div>
    </section>
  );
};
export default Inicio;

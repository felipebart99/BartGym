import Barra from "../assets/BarraComPeso.jpg";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Contato = () => {
  return (
    <div
      id="contato"
      style={{
        position: "relative",
        backgroundImage: `url(${Barra})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
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
          backgroundColor: "rgba(0, 0, 0, 0.5)", // preto com 50% de opacidade
          zIndex: 1,
        }}
      ></div>

      {/* Conteúdo */}
      <div
        className="principal"
        style={{ position: "relative", zIndex: 2, color: "white" }}
      >
        <h2>Nosso WhatsApp</h2>
        <p>
          Tem alguma dúvida? Entre em contato com o nosso WhatsApp que
          responderemos rapidamente
        </p>
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
        >
          FALAR AGORA
        </a>
      </div>
    </div>
  );
};

export default Contato;

import Academia from "../assets/academiaImagem.jpg";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Unidade = () => {
  return (
    <section id="unidade">
      <div className="principal">
        <h2>Conheça nossa unidade principal</h2>
        <p>
          Na nossa unidade principal você encontra um espaço moderno, equipado
          com aparelhos de última geração e ambientes pensados para proporcionar
          o máximo de conforto e desempenho. Cada detalhe foi planejado para que
          você tenha a melhor experiência de treino, seja no ganho de massa
          muscular, na perda de peso ou na busca por mais qualidade de vida.
        </p>
        <p>
          Além da estrutura, contamos com uma equipe de profissionais
          especializados, sempre prontos para orientar e acompanhar sua
          evolução. Aqui, você não treina sozinho: fazemos parte da sua jornada,
          oferecendo motivação, segurança e resultados reais que transformam sua
          rotina e seu corpo.
        </p>

        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Agendar visita
        </a>
      </div>
      <img src={Academia} />
    </section>
  );
};

export default Unidade;

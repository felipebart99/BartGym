import Logo from "../assets/LogoBartGym.png";
import Typewriter from "../../src/components/Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Sobre = () => {
  return (
    <section id="sobre">
      <img src={Logo} />
      <div className="principal">
        <h2>Sobre mim</h2>
        <h3>
          <Typewriter text=" BART GYM" speed={200} startOnView={true} />
        </h3>
        <p>
          Aqui acreditamos que cada pessoa tem o poder de transformar sua rotina
          e alcançar resultados reais. Nossa missão é mostrar que evoluir é
          possível e que cada treino pode ser o primeiro passo para um novo
          estilo de vida.
        </p>
        <p>
          Nossa unidade oferece um ambiente amplo e acolhedor, com equipamentos
          de alta performance e estrutura planejada para atender diferentes
          objetivos. Além disso, você conta com profissionais qualificados e
          prontos para acompanhar sua jornada, tornando seus treinos mais
          eficazes, motivadores e cheios de conquistas
        </p>

        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
};
export default Sobre;

import Logo from "../assets/LogoBartGym.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          {/* Sobre a academia */}
          <div className="col-md-4 mb-3">
            <h5>BART GYM</h5>
            <p>
              Transformando vidas através do treino e da saúde. Aqui você
              encontra qualidade, resultado e motivação todos os dias!
            </p>
          </div>

          {/* Contato */}
          <div className="col-md-4 mb-3">
            <h5>Contato</h5>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Rua da Saúde, 123 -
              Recife/PE
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> (81) 99999-8888
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> contato@bartgym.com
            </p>
            <p>
              <i className="bi bi-clock-fill"></i> Seg - Sáb: 06h - 22h
            </p>
          </div>

          {/* Redes sociais */}
          <div className="col-md-4 mb-3">
            <h5>Redes Sociais</h5>
            <a href="#" className="text-white me-3 fs-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3 fs-4">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white me-3 fs-4">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3 fs-4">
              <i className="bi bi-youtube"></i>
            </a>
            <br />
            <img src={Logo} alt="Logo da gym" className="logo-img-end" />
          </div>
        </div>

        <hr className="border-light" />

        {/* Direitos autorais */}
        <div className="text-center">
          <p className="mb-0">© 2025 BART GYM - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

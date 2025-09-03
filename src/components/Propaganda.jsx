import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";

const Propaganda = () => {
  return (
    <section id="propaganda">
      <div className="principal"></div>
      <div className="cards">
        <div className="card">
          <img src={icon1} alt="" />
          <h3>Quebre o sedentarismo</h3>
          <p>
            Vem fazer parte do nosso grupo de corrida e melhorar sua
            performance.
          </p>
        </div>
        <div className="card">
          <img src={icon2} alt="" />
          <h3>Programa de Hipertrofia</h3>
          <p>
            Ganhe massa muscular e defina seu físico com o nosso programa de
            hipertrofia.
          </p>
        </div>
        <div className="card">
          <img src={icon3} alt="" />
          <h3>Foco no Emagrecimento</h3>
          <p>
            Temos um programa de emagrecimento eficiente, dinâmico e de
            resultados.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Propaganda;

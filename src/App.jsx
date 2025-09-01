import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Beneficios from "./components/Beneficios";
import Gestalt from "./components/Gestalt";
import FAQ from "./components/Faq";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import Sobre from "./components/Sobre";
import Planos from "./components/Planos";
import Agendamento from "./components/Agendamento";
import Unidade from "./components/Unidade";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ImageCarousel from "./components/Carousel";
import FormularioContato from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Unidade />
      <Beneficios />
      <Sobre />
      <Contato />
      <Planos />
      <ImageCarousel />
      <FormularioContato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

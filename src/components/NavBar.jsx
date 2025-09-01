import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/LogoBartGym.png";

const NavBar = () => {
  // Função para rolagem suave
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3 navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#inicio" onClick={() => handleScroll("inicio")}>
          <img src={Logo} alt="Logo da academia" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#unidade" onClick={() => handleScroll("unidade")}>
              Conheça a unidade
            </Nav.Link>
            <Nav.Link href="#sobre" onClick={() => handleScroll("sobre")}>
              Sobre Mim
            </Nav.Link>
            <Nav.Link href="#planos" onClick={() => handleScroll("planos")}>
              Planos
            </Nav.Link>
            <Nav.Link
              href="#formulario"
              onClick={() => handleScroll("formulario")}
            >
              Fale conosco
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

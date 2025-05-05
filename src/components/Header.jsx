import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import "../App.css";

function Header() {
  const { language, toggleLanguage } = useLanguage();

  const labels = {
    eng: {
      home: "Home",
      crime: "Crime and Punishment",
      nights: "White Nights",
      karamazov: "Brothers Karamazov",
      login: "Login",
      register: "Register",
    },
    srb: {
      home: "Početna",
      crime: "Zločin i kazna",
      nights: "Bele Noći",
      karamazov: "Braća Karamazovi",
      login: "Prijava",
      register: "Registracija",
    }
  };

  // Sigurnosna provera za 'language', podrazumevana vrednost 'eng'
  const t = labels[language] || labels.eng;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="ms-3">Dostoyevsky Quotes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-3">
          <Nav.Item>
            <Link to="/" className="nav-link">{t.home}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/crime-and-punishment" className="nav-link">{t.crime}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/white-nights" className="nav-link">{t.nights}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/brothers-karamazov" className="nav-link">{t.karamazov}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">{t.login}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" className="nav-link">{t.register}</Link>
          </Nav.Item>
        </Nav>
        <Button variant="outline-light" className="me-3" onClick={toggleLanguage}>
          {language === 'eng' ? 'SRB' : 'ENG'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

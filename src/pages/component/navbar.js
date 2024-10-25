import {Container,Nav, Navbar} from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"
export default function Menu() {
  return (
    <Container>
    <Navbar expand="lg" className={`${styles.navGradiente} my-3 px-5 border-1 rounded-4 rounded-end-pill`}>
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/noticias">noticias</Nav.Link>
            <Nav.Link href="/promesa">promesa</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  );
}
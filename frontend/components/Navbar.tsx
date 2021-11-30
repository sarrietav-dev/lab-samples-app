import { Navbar as BNavbar, Container } from 'react-bootstrap';

const Navbar = () => (
  <BNavbar bg="primary" variant="dark">
    <Container fluid>
      <BNavbar.Brand>Laboratorio</BNavbar.Brand>
    </Container>
  </BNavbar>
);

export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbarr() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">ETNA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/students">students</Nav.Link>
            <Nav.Link href="/planning">Planning</Nav.Link>
            <Nav.Link href="/tags">Tags</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbarr;
import { useRouter } from 'next/router';
import { Navbar, Container } from 'react-bootstrap';

const ResultPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div style={{ height: '100vh' }}>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>Laboratorio</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>{id}</h1>
      <i className="bi bi-person-circle" style={{ fontSize: '2rem' }}></i>
      <span>David Null</span>
      <i className="bi bi-clock" style={{ fontSize: '2rem' }}></i>
      <span>Noviembre 16, 2021. 9:00 A.M</span>
      <i className="bi bi-file-medical" style={{ fontSize: '2rem' }}></i>
      <span>Sangre</span>
      <h2>Detalles</h2>
      <textarea
        value={'bslasalbsalsbalbsl'}
        cols={30}
        rows={10}
        disabled
      ></textarea>
    </div>
  );
};

export default ResultPage;

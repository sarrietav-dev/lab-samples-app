import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

/**
 * ![](https://user-images.githubusercontent.com/25210925/144118833-40a00919-e871-490d-a9c8-60b0c64169a7.png)
 */
const ResultPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <main className="p-4">
        <h1>{id}</h1>
        <Container className="d-flex flex-column my-5">
          <Row className="align-items-center">
            <Col className="col-auto">
              <BiIcon iconClass="person-circle" />
            </Col>
            <Col>
              <span>David Null</span>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="col-auto">
              <BiIcon iconClass="clock" />
            </Col>
            <Col>
              <span>Noviembre 16, 2021. 9:00 A.M</span>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="col-auto">
              <BiIcon iconClass="file-medical" />
            </Col>
            <Col>
              <span>Sangre</span>
            </Col>
          </Row>
        </Container>
        <h2 className="mb-4">Detalles</h2>
        <textarea
          value={'bslasalbsalsbalbsl'}
          cols={30}
          rows={10}
          disabled
        ></textarea>
      </main>
    </div>
  );
};

/**
 * Bootstrap Icon
 */
const BiIcon = ({ iconClass }: { iconClass: string }) => (
  <i className={`bi bi-${iconClass}`} style={{ fontSize: '2rem' }}></i>
);

export default ResultPage;

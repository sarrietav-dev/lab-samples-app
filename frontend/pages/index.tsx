import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Container, Navbar, Table } from 'react-bootstrap';
import ResultsListModal from '../components/ResultListModal';
import ScheduleModal from '../components/ScheduleModal';

const UserHome: NextPage = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showResultListModal, setResultListModal] = useState(false);

  const handleShowScheduleModal = () => setShowScheduleModal(true);
  const handleShowResultsListModal = () => setResultListModal(true);

  return (
    <div style={{ height: '100vh' }}>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>Lab</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="d-flex h-100 flex-column align-items-center justify-content-evenly">
        <h1>Bienvenido, David Null</h1>
        <Table hover className="mx-4">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Tipo de examen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">9/9/9</th>
              <td>Sangre</td>
            </tr>
            <tr>
              <th scope="row">10/10/10</th>
              <td>Sangre</td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex flex-column">
          <Button
            variant="primary"
            className="my-2"
            onClick={handleShowScheduleModal}
          >
            Agendar Cita
          </Button>
          <Button
            variant="info"
            className="my-2"
            onClick={handleShowResultsListModal}
          >
            Ver Resultados
          </Button>
        </div>
      </div>
      <ScheduleModal
        show={showScheduleModal}
        handleShow={setShowScheduleModal}
      />
      <ResultsListModal
        show={showResultListModal}
        handleShow={setResultListModal}
      />
    </div>
  );
};

export default UserHome;

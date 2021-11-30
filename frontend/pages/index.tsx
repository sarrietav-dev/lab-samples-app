import type { NextPage } from 'next';
import { useReducer } from 'react';
import { Button, Container, Navbar, Table } from 'react-bootstrap';
import ResultsListModal from '../components/ResultListModal';
import ScheduleModal from '../components/ScheduleModal';

interface ModalState {
  showScheduleModal: boolean;
  showResultListModal: boolean;
}

const UserHome: NextPage = () => {
  const [state, dispatch] = useReducer(modalReducer, {
    showResultListModal: false,
    showScheduleModal: false,
  });

  /**
   * Opens a given Modal
   */
  const handleShowModal = (modal: 'SCHEDULE' | 'RESULT_LIST') =>
    dispatch({ type: 'SHOW', payload: modal });

  /**
   * Closes a given Modal
   */
  const handleCloseModal = (modal: 'SCHEDULE' | 'RESULT_LIST') =>
    dispatch({ type: 'CLOSE', payload: modal });

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
            onClick={() => handleShowModal('SCHEDULE')}
          >
            Agendar Cita
          </Button>
          <Button
            variant="info"
            className="my-2"
            onClick={() => handleShowModal('RESULT_LIST')}
          >
            Ver Resultados
          </Button>
        </div>
      </div>
      <ScheduleModal
        show={state.showScheduleModal}
        handleClose={() => handleCloseModal('SCHEDULE')}
      />
      <ResultsListModal
        show={state.showResultListModal}
        handleClose={() => handleCloseModal('RESULT_LIST')}
      />
    </div>
  );
};

/**
 * Controls the state of the modals
 * @param action The types can be **SHOW** to show the modal, **CLOSE** to close it.
 * And the payload handles witch of the two modals is going to be used.\
 * **SCHEDULE**: For {@link ScheduleModal}\
 * **RESULT_LIST**: For {@link ResultsListModal}
 */
function modalReducer(
  state: ModalState,
  action: { type: 'SHOW' | 'CLOSE'; payload: 'SCHEDULE' | 'RESULT_LIST' },
): ModalState {
  switch (action.type) {
    case 'SHOW':
      if (action.payload === 'SCHEDULE')
        return { ...state, showScheduleModal: true };
      else return { ...state, showResultListModal: true };
    case 'CLOSE':
      if (action.payload === 'SCHEDULE')
        return { ...state, showScheduleModal: false };
      else return { ...state, showResultListModal: false };
  }
}

export default UserHome;

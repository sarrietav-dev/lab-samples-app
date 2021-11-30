import { Button, Modal } from 'react-bootstrap';

interface ResultListProps {
  show: boolean;
  handleShow: (show: boolean) => void;
}

const ResultsListModal = ({ show, handleShow }: ResultListProps) => {
  const handleClose = () => handleShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agendar Cita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-hover ">
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
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Agendar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsListModal;

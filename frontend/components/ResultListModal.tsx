import { Button, Modal } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';

interface ResultListProps {
  show: boolean;
  handleShow: (show: boolean) => void;
}

const ResultsListModal = ({ show, handleShow }: ResultListProps) => {
  const [activeRow, setActiveRow] = useState('');

  const results: { id: string; date: string; testType: string }[] =
    useMemo(() => {
      return [
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
      ];
    }, []);

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
            {results.map((item) => {
              const handleOnClick = () => setActiveRow(item.id);
              return (
                <tr
                  key={item.id}
                  onClick={handleOnClick}
                  className={`${activeRow === item.id ? 'table-primary' : ''}`}
                >
                  <th scope="row">{item.date}</th>
                  <td>{item.testType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Consultar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsListModal;

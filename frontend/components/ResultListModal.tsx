import { Modal, Table } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import Link from 'next/link';

interface ResultListProps {
  show: boolean;
  handleClose: (show: boolean) => void;
}

/**
 * ![image](https://user-images.githubusercontent.com/25210925/144107403-1f931dc2-45a4-4ed3-bcac-61f4d1ddce03.png)
 */
const ResultsListModal = ({ show, handleClose }: ResultListProps) => {
  const [activeRow, setActiveRow] = useState('');

  const results: { id: string; date: string; testType: string }[] =
    useMemo(() => {
      return [
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '9/9/9', testType: 'Sangre' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
        { id: nanoid(), date: '10/10/10', testType: 'Orina' },
      ];
    }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selecciona una cita</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '11rem' }} className="overflow-scroll">
        <Table hover>
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
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Link href={`/result/${encodeURIComponent(activeRow)}`}>
          <a className="btn btn-primary">Consultar</a>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsListModal;

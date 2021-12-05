import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import TheNavbar from '../components/TheNavbar';

const AppointmentsPage = () => {
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
    <div className="vh-100 d-flex flex-column">
      <TheNavbar />
      <div className="d-flex h-100 flex-column align-items-center justify-content-evenly">
        <h1>Selecciona una cita</h1>
        <div
          className="d-flex flex-column overflow-scroll"
          style={{ maxHeight: '11rem' }}
        >
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
                    className={`${
                      activeRow === item.id ? 'table-primary' : ''
                    }`}
                  >
                    <th scope="row">{item.date}</th>
                    <td>{item.testType}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Button>Escribir resultados</Button>
      </div>
    </div>
  );
};

export default AppointmentsPage;

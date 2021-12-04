import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import TheNavbar from '../components/TheNavbar';

const HealthTests = () => {
  const healthTests: { id: string; name: string }[] = useMemo(() => {
    return [
      { id: nanoid(), name: 'Cras Justo Odio' },
      { id: nanoid(), name: 'Dapibus ac facilisis in' },
      { id: nanoid(), name: 'Morbi leo risus' },
      { id: nanoid(), name: 'Porta ac concectetur ac' },
      { id: nanoid(), name: 'Vestibulum at eros' },
    ];
  }, []);

  return (
    <div className="vh-100 d-flex flex-column">
      <TheNavbar />
      <div className="h-100 d-flex justify-content-center align-items-center">
        <ListGroup>
          {healthTests.map((test) => (
            <ListGroupItem key={test.id} className="p-3">
              <div className="row">
                <div className="col">{test.name}</div>
                <div className="col-3 d-flex align-items-center gap-2">
                  <i
                    style={{ cursor: 'pointer' }}
                    className="bi bi-pencil-fill"
                  ></i>
                  <i
                    style={{ cursor: 'pointer' }}
                    className="bi bi-trash-fill"
                  ></i>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default HealthTests;

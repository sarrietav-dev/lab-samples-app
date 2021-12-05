import type { NextPage } from 'next';
import { Button } from 'react-bootstrap';
import TheNavbar from '../components/TheNavbar';

/**
 * The main page that an external user sees.\
 * ![image](https://user-images.githubusercontent.com/25210925/144761212-57ee02ad-a046-47c4-8da5-12315621b58c.png)
 */
const EmployeeHome: NextPage = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <TheNavbar />
      <div className="d-flex h-100 flex-column align-items-center justify-content-evenly">
        <h1>Bienvenido, David Null</h1>
        <div className="d-flex flex-column">
          <Button variant="primary" className="my-2">
            Gestionar tipos de examenes
          </Button>
          <Button variant="info" className="my-2">
            Ver agenda de hoy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;

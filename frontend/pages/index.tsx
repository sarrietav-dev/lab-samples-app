import type { NextPage } from 'next';

const UserHome: NextPage = () => {
  return (
    <div style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <p className="navbar-brand">Lab</p>
        </div>
      </nav>
      <div className="d-flex h-100 flex-column align-items-center justify-content-evenly">
        <h1>Bienvenido, David Null</h1>
        <table className="table table-hover mx-4">
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
        <div className="d-flex flex-column">
          <button className="btn btn-primary my-2">Agendar Cita</button>
          <button className="btn btn-info my-2">Ver Resultados</button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

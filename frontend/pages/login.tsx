import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Form
      method="POST"
      className="vh-100 d-flex flex-column justify-content-center gap-4"
      style={{ padding: '4rem' }}
    >
      <Form.Group controlId="email">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group controlId="passwords">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="d-flex justify-content-between">
        <Link href={"/"}>
          <a className="btn btn-primary">
            Ingresar
          </a>
        </Link>
        <Link href={"/signup"}>
          <a className="btn btn-outline-info">
            Registrarse</a>
        </Link>
      </Form.Group>
    </Form>
  );
};

export default LoginPage;

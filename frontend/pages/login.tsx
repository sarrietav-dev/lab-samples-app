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
        <Button type="submit" variant="primary">
          Ingresar
        </Button>
        <Button variant="outline-info">Registrarse</Button>
      </Form.Group>
    </Form>
  );
};

export default LoginPage;

import { Button, Form } from 'react-bootstrap';

const SignupPage = () => (
  <Form
    method="POST"
    className="vh-100 d-flex flex-column justify-content-center gap-4"
    style={{ padding: '4rem' }}
  >
    <Form.Group controlId="name">
      <Form.Label>Tu nombre</Form.Label>
      <Form.Control type="text" placeholder="Escribe tu nombre aquí" />
    </Form.Group>
    <Form.Group controlId="email">
      <Form.Label>Correo Electronico</Form.Label>
      <Form.Control type="email" placeholder="nombre@ejemplo.com" />
    </Form.Group>
    <Form.Group controlId="passwords">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Contraseña" />
    </Form.Group>
    <Form.Group controlId="validate-passwords">
      <Form.Label>Validar Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Validar Contraseña" />
    </Form.Group>
    <Form.Group className="d-flex flex-column ">
      <Button variant="primary">Registrarse</Button>
    </Form.Group>
  </Form>
);

export default SignupPage;

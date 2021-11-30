import { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface ScheduleModalProps {
  show: boolean;
  handleClose: () => void;
}

const ScheduleModal = ({ show, handleClose }: ScheduleModalProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = () => formRef.current?.submit();

  return (
    <Modal backdrop="static" show={show}>
      <Modal.Header>
        <Modal.Title>Agendar Cita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method="POST" ref={formRef}>
          <Form.Group controlId="testType">
            <Form.Label>Tipo de Examen</Form.Label>
            <Form.Select placeholder="Elija el tipo de examen">
              <option value="sangre">Sangre</option>
              <option value="orina">Orina</option>
              <option value="vista">Vista</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha para agendar</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleFormSubmit}>
          Agendar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleModal;

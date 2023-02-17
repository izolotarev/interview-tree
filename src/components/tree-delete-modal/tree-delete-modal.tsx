import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TreeType } from '../../types/types';

type DeleteModalProps = {
  show: boolean
  onHide: () => void
  node: TreeType
}

function DeleteModal({ show, onHide: handleClose }: DeleteModalProps) {

  const handleConfirm = () => {

  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CANCEL
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          DELETE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
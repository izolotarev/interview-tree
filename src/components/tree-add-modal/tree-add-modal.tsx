import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TreeType } from '../../types/types';

type AddModalProps = {
  show: boolean
  onHide: () => void
  node: TreeType
}

function AddModal({ show, onHide: handleClose }: AddModalProps) {

  const handleConfirm = () => {

  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CANCEL
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          ADD
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
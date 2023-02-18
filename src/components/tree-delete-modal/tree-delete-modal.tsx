import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TreeType } from '../../types/types';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteTree } from '../../store/actions/api-actions';
import { TREE_NAME } from '../../const/const';

type DeleteModalProps = {
  show: boolean
  onHide: () => void
  node: TreeType
}

function DeleteModal({ show, onHide: handleClose, node }: DeleteModalProps) {

  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(deleteTree(TREE_NAME, node.id));
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete {node.name}?</Modal.Body>
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
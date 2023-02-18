import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TreeType } from '../../types/types';
import Form from 'react-bootstrap/Form';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { addTree } from '../../store/actions/api-actions';
import { TREE_NAME } from '../../const/const';

type AddModalProps = {
  show: boolean
  onHide: () => void
  node: TreeType
}

function AddModal({ show, onHide: handleClose, node }: AddModalProps) {

  const [nodeName, setNodeName] = useState('');

  const handleNodeNameChange = (evt: SyntheticEvent) => {
    const nameInput = evt.target as HTMLInputElement
    if (!nameInput) { return; }
    setNodeName(nameInput.value);
  }

  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(addTree(TREE_NAME, node.id, nodeName));
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={nodeName}
              placeholder='Node Name'
              autoFocus
              onChange={handleNodeNameChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
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
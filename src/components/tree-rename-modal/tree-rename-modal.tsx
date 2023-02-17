import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TreeType } from '../../types/types';
import Form from 'react-bootstrap/Form';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { renameTree } from '../../store/actions/api-actions';
import { useSelector } from 'react-redux';
import { getRootName } from '../../store/reducers/tree/tree-selectors';

type RenameModalProps = {
  show: boolean
  onHide: () => void
  node: TreeType
}

function RenameModal({ show, onHide: handleClose, node }: RenameModalProps) {

  const [newName, setNewName] = useState(node.name);

  const handleNewNameChange = (evt: SyntheticEvent) => {
    const nameInput = evt.target as HTMLInputElement
    if (!nameInput) { return; }
    setNewName(nameInput.value);
  }

  const dispatch = useAppDispatch();

  const rootName = useSelector(getRootName);

  const handleConfirm = () => {
    if (!rootName) { return; }
    dispatch(renameTree(rootName, node.id, newName));
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>New Node Name</Form.Label>
            <Form.Control
              value={newName}
              autoFocus
              onChange={handleNewNameChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CANCEL
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          RENAME
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RenameModal;
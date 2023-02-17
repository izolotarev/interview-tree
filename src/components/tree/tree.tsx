import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { clearAddTreeAction, clearDeleteTreeAction, clearRenameTreeAction, selectNodeAction } from '../../store/actions/actions';
import { fetchTree } from '../../store/actions/api-actions';
import { getAddSuccess, getDeleteSuccess, getRenameSuccess, getRootId, getRootName, getSelectedId } from '../../store/reducers/tree/tree-selectors';
import { TreeType } from '../../types/types';
import AddModal from '../tree-add-modal/tree-add-modal';
import DeleteModal from '../tree-delete-modal/tree-delete-modal';
import RenameModal from '../tree-rename-modal/tree-rename-modal';

type TreeProps = {
  node?: TreeType
}

function Tree({ node }: TreeProps):JSX.Element {

  const [active, setActive] = useState(false);
  const selectedId = useSelector(getSelectedId);
  const rootId = useSelector(getRootId);
  const addSuccess = useSelector(getAddSuccess);
  const renameSuccess = useSelector(getRenameSuccess);
  const deleteSuccess = useSelector(getDeleteSuccess);
  const rootName = useSelector(getRootName);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (addSuccess ) {
      if (!rootName) { return; }
      dispatch(fetchTree(rootName));
      dispatch(clearAddTreeAction());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addSuccess])

  useEffect(() => {
    if (renameSuccess ) {
      if (!rootName) { return; }
      dispatch(fetchTree(rootName));
      dispatch(clearRenameTreeAction());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renameSuccess])

  useEffect(() => {
    if (deleteSuccess ) {
      if (!rootName) { return; }
      dispatch(fetchTree(rootName));
      dispatch(clearDeleteTreeAction());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess])


  const [addModalShow, setAddModalShow] = useState(false);
  const [renameModalShow, setRenameModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  if (!node) { return <></>;}

  const { id, name, children} = node;

  const handleClick = () => {
    setActive(!active);
    dispatch(selectNodeAction(id));
  }

  const handleAddClick = () => {
    setAddModalShow(true);
  }

  const handleRenameClick = () => {
    setRenameModalShow(true);
  }

  const handleDeleteClick = () => {
    setDeleteModalShow(true);
  }

  return (
    <>
      <li>
        <div className={`${selectedId === id ? 'selected' : ''}`}>
          <span className={`caret ${active ? 'caret-down' : ''}`} onClick={handleClick}>{ name }</span>
          {
            selectedId === id
              ?
              <>
                <button className='btn-purple' onClick={handleAddClick}>
                  <i className="bi bi-plus-circle"></i>
                </button>
              </>
              :
              null
          }
          {
            selectedId === id && rootId !== id
              ?
              <>
                <button className='btn-purple' onClick={handleRenameClick}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button className='btn-red' onClick={handleDeleteClick}>
                  <i className="bi bi-trash3"></i>
                </button>
              </>
              :
              null
          }
        </div>
        {
          children.length > 0 
            ?
            <ul className={`nested ${active ? 'active' : ''}`}>
              {
                children.map((child) => <Tree key={child.id} node={child} />)
              }
            </ul>
            :
            null
        } 
      </li>
      <AddModal show={addModalShow} onHide={() => setAddModalShow(false)} node={node}/>
      <RenameModal show={renameModalShow} onHide={() => setRenameModalShow(false)} node={node}/>
      <DeleteModal show={deleteModalShow} onHide={() => setDeleteModalShow(false)} node={node}/>
    </>

    
  );
}

export default Tree;


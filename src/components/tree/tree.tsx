import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { selectNodeAction } from '../../store/actions/actions';
import { getSelectedId } from '../../store/reducers/tree/tree-selectors';
import { TreeType } from '../../types/types';


type TreeProps = {
  node?: TreeType
}

function Tree({ node }: TreeProps):JSX.Element {

  const [active, setActive] = useState(false);
  const selectedId = useSelector(getSelectedId);

  const dispatch = useAppDispatch();

  if (!node) { return <></>;}

  const { id, name, children} = node;

  const handleClick = () => {
    setActive(!active);
    dispatch(selectNodeAction(id));
  }

  return (
    <li>
      <span className={`caret ${active ? 'caret-down' : ''} ${selectedId === id ? 'selected' : ''}`} onClick={handleClick}>{ name }</span>
      {
        children.length > 0 
          ?
          <ul className={`nested ${active ? 'active' : ''}`}>
            {
              children.map((child) => <Tree key={child.id} node={child} />)
            }
          </ul>
          :
          ''
      } 
    </li>
  );
}

export default Tree;
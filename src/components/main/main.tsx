import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getTree, getTreeLoadedStatus } from '../../store/reducers/tree/tree-selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import Tree from '../tree/tree';


function Main() {

  const root = useSelector(getTree);
  const treeLoaded = useSelector(getTreeLoadedStatus);

  if (!root || !treeLoaded) {
    <LoadingScreen/>
  }

  return (
    <Container>
      <ul id="myUL">
        <Tree node={root} />
      </ul>
    </Container>
  );
}

export default Main;

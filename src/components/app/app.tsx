import { AppRoute } from '../../const/const';
import Main from '../main/main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<Main/>}/>
    </Routes>
  );
}

export default App;

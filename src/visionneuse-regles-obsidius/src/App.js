import { Routes, Route, HashRouter } from 'react-router-dom';
import ReglesHub from './pages/reglesHub';
import Pouvoirs from './component/pouvoirs';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<ReglesHub />} />
        <Route path='/pouvoirs' element={<Pouvoirs />}></Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

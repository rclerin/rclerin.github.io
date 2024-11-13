import { Routes, Route, HashRouter } from 'react-router-dom';
import ReglesHub from './pages/reglesHub';
import PageNotFound from './pages/pageNotFound';
import ListePouvoirs from './pages/listePouvoirs';
import ListeSorts from './pages/listeSorts';

function App() {
  return (
    <HashRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}>
      <Routes>
        <Route path='/' element={<ReglesHub />} />
        <Route path='/*' element={<PageNotFound />}></Route>
        <Route path='/pouvoirs' element={<ListePouvoirs />}></Route>
        <Route path='/sorts' element={<ListeSorts />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

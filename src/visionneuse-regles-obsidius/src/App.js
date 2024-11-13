import { Routes, Route, HashRouter } from 'react-router-dom';
import ReglesHub from './pages/reglesHub';
import PageNotFound from './pages/pageNotFound';
import ListePouvoirs from './pages/listePouvoirs';

function App() {
  return (
    <HashRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}>
      <Routes>
        <Route path='/' element={<ReglesHub />} />
        <Route path='/pouvoirs' element={<ListePouvoirs />}></Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

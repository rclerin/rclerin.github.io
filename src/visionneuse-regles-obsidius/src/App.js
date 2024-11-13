import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReglesHub from './pages/reglesHub';
import Pouvoirs from './component/pouvoirs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReglesHub />} />
        <Route path='/pouvoirs' element={<Pouvoirs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

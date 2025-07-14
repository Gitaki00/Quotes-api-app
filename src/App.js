import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add';
import Search from './Components/Search';
import Delete from './Components/Delete';
import View from './Components/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/a' element={<Add />}/>
        <Route path='/s' element={<Search />}/>
        <Route path='/d' element={<Delete />}/>
        <Route path='/v' element={<View />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

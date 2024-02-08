import logo from './logo.svg';
import './App.css';
import ViewDr from './ViewDr';
import Patientform from './Patientform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/view' element={<ViewDr/>} />
        <Route path='/' element={<Patientform/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

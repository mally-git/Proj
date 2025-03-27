import logo from './logo.svg';
import './App.css';
import TlmTable from './componnents/TLMcomp/TLM';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import Appbar from './componnents/AppBar1';
import CreateTlc from './componnents/TLCcomp/TLCpage';
import { Routes,Route,Router } from 'react-router-dom';
import Home from './componnents/HomePage';


function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/TLM" element={<TlmTable />} />
          <Route path="/TLC" element={<CreateTlc />} />
      </Routes>
      
     
      
    </div>
  );  
}

export default App;

import logo from './logo.svg';
import './App.css';
import TlmTable from './componnents/TLMcomp/TLM';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import CreateTlc from './componnents/TLCcomp/TLC';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/TLM" element={<TlmTable/>}/>
        <Route path="/TLC" element={<CreateTlc/>}/>
      </Routes>
      
      
    </div>
  );  
}

export default App;

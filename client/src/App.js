import logo from './logo.svg';
import './App.css';
import TlmTable from './componnents/users/TLMcomp/TLM';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
function App() {
  return (
    <div className="App">
      <TlmTable/>
    </div>
  );  
}

export default App;

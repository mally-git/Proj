import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useLocation } from "react-router-dom";
import TlmTable from './componnents/TLMcomp/TLM';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import Appbar from './componnents/AppBar1';
import CreateTlc from './componnents/TLCcomp/TLCpage';
import { Routes,Route,Router } from 'react-router-dom';
import Home from './componnents/HomeComp/HomePage';
import LogIn from './componnents/LogInPage';
import Registerr from './componnents/RegisterPage';


function App() {

  const location = useLocation();

  // בדיקת מיקום הדף - אם זהו דף ההתחברות, לא נציג את ה-AppBar
  const isLoginPage = location.pathname === "/";

  return (
    
    <div className="App">
       {!isLoginPage && <Appbar />}
      
      <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Registerr" element={<Registerr/>} />
        <Route path="/Home" element={<Home />} />
          <Route path="/TLM" element={<TlmTable />} />
          <Route path="/TLC" element={<CreateTlc />} />
      </Routes>
      
     
      
    </div>
  );  
}

export default App;

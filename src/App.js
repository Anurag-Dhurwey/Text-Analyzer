
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Resource from './Components/Resource';

function App() {
  // Function of Dark Mode Started
  const [Dmode,setMode]=useState('light')
  const [Textmode,setTextMode]=useState('dark')
  const mode=()=>{
    if(Dmode==='light'){
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      setMode('dark');
      setTextMode('light')
      showalert('Dark mode enabled','Success')
    }else{
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      setMode('light');
      setTextMode('dark')
      showalert('Dark mode Disabled','Success')
    }}
    // Function of Dark Mode Ended

    // Function of Alert Mode Started
    const [alert,setalert]=useState(null);
    const showalert=(massage,type)=>{
       setalert(
        {msg:massage,
        type:type}
       )
       setTimeout(()=>{
        setalert('')
       },1500)
    }
  // Function of Alert Mode Ended
   
  return (
    <>
    <BrowserRouter>
    <Navbar darkmode={mode} Tmode={Textmode}/>
    <Alert alert={alert} />
    <Routes>
      <Route path='/' element={<Textform showalert={showalert} darkmode={Dmode} Tmode={Textmode}/>}/>
      <Route path='/Components/Resource' element={<Resource />}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

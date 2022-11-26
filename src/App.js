
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [Dmode,setMode]=useState('light')
  const [Textmode,setTextMode]=useState('dark')
  const Changemode=()=>{
    if(Dmode==='light'){
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      setMode('dark');
      setTextMode('light')
    }else{
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      setMode('light');
      setTextMode('dark')
    }
  }
  return (
    <>
    <Navbar darkmode={Changemode} Tmode={Textmode}/>
    <Textform darkmode={Dmode} Tmode={Textmode}/>
    </>
  );
}

export default App;

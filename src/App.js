
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() { 
  const [mode, setMode]=useState("light");
  const [alert, setAlert]=useState(null);

const toggleMode=()=>{
     if(mode==="light"){
       setMode("dark");
       document.body.style.backgroundColor="#002147";
       document.body.style.color="white";
       showAlert("Dark mode has been enabled!", "success");
     }else{
       setMode("light");
       document.body.style.backgroundColor="white";
       document.body.style.color="black";
       showAlert("Light mode has been enabled!", "success");
     }
}
const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type,
    }) ;
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
}
  



  return (
    <>
    <Router>
     <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <div className='container'>
      <Routes>
      <Route path="/" element={
     <Textarea heading="Enter Your Text To Do Formatting" mode={mode} showAlert={showAlert}/>
     }/>
     <Route path="/about" element={<About mode={mode}/>}></Route>

     </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;

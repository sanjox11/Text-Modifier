import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import react , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const showAlert=(message , type)=>
  {
    setAlert({
      msg : message ,
      type : type
    })
    setTimeout(() => {
      showAlert(null)
    }, 3000);
  }
  const togglemode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#1c193f';
      showAlert(" Dark mode has been enabled","success ");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert(" Light mode has been enabled","success");
    }
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  return (
   <>
   <Router>
   <Navbar title="TEXT MODIFIER" Home="HOME" about="ABOUT" Contact="CONTACT" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   <Routes>
          <Route exact path="/about" element= {<About/>}/>

          <Route exact path="/"  element = {<Textform showAlert={showAlert} heading="Enter the text to analyze :" mode={mode}/>} />
    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;

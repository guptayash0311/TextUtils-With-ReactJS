import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
// import Contactform from './Components/Contactform';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>

            <Route exact path ="/about"element={<About mode={mode}/>}>
              
            </Route>
            <Route exact path ="/"element={<Textform textarea="Enter text here..." mode={mode} showAlert={showAlert} />}>
            
            </Route>
          </Routes>
        </div>
      </Router>
      {/* <div className="container">
        <Contactform heading="Info Form" username="Email Address" password="Password" checkbox="I agree with the Terms and Conditions"/>
      </div> */}
      {/* <About abouttext="About Us"/> */}
    </>
  );
}

export default App;

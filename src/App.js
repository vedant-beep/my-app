import { useEffect, useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
function App() {
  const [mode, setMode] = useState(null);
  const [navStyle, setNavStyle] = useState(null);
  const [textStyle, setTextStyle] = useState(null);
  const [buttonStyle, setButtonStyle] = useState(null);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  const toggleMode = (event)=>{
    setMode(event.target.id);
  }
  useEffect(()=>{
    if(mode === 'react'){
      document.body.style.backgroundColor = '#020a31';
      document.body.style.color = 'white';
      setNavStyle({
        backgroundColor: '#020827',
        color: 'white'
      })
      setTextStyle({
        backgroundColor: '#020a31',
        color: 'white',
        border: '1px solid white'
      })
      setButtonStyle({
        backgroundColor: '#020a31',
        color: 'white',
        border: '2px solid white'
      })
      showAlert('React mode enabled', 'success');
    }
    else if(mode === 'light'){
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setNavStyle(null);
      setTextStyle({
        backgroundColor: 'white',
        color: 'black',
      });
      setButtonStyle(null);
      showAlert('Light mode enabled', 'success');
    }
    else if(mode === 'wood'){
      document.body.style.backgroundColor = '#633b3b';
      document.body.style.color = '#DCB579';
      setNavStyle({
        backgroundColor: '#4d3737',
        color: '#DCB579'
      });
      setTextStyle({
        backgroundColor: '#633b3b',
        color: '#DCB579',
        border: '1px solid #4d3737'
      });
      setButtonStyle({
        backgroundColor: '#4d3737',
        color: '#DCB579',
        border: '2px solid #DCB579'
      })
      showAlert('Wood mode enabled', 'success');
    }
    else if(mode === 'hacker'){
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#149414';
      setNavStyle({
        backgroundColor: '#000',
        color: '#149414'
      });
      setTextStyle({
        backgroundColor: '#121212',
        color: '#149414',
        border: '1px solid #149414'
      });
      setButtonStyle({
        backgroundColor: '#121212',
        color: '#149414',
        border: '2px solid #149414'
      })
      showAlert('Hacker mode enabled', 'success');
    }
    else if(mode === 'dark'){
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setNavStyle(null);
      setTextStyle({
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white'
      });
      setButtonStyle(null);
      showAlert('Dark mode enabled', 'success');
    }
  }, [mode])
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} navStyle={navStyle}></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
          <Route exact path="/about" element={<About aboutStyle = {textStyle} />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TextUtils - words counter, charachter counter, remove duplicates" mode={mode} textStyle={textStyle} buttonStyle={buttonStyle} />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;

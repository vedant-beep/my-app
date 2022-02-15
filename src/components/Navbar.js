import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleActive = (event)=>{
    if(event.target.id === "home"){
      event.target.classList.add('active');
      document.getElementById('about').classList.remove('active');
    }
    else if (event.target.id === "about"){
      event.target.classList.add('active');
      document.getElementById('home').classList.remove('active');
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg${props.mode === null?' navbar-light bg-light':props.mode === 'dark' || props.mode === 'light' ? ' navbar-'+props.mode+' bg-'+props.mode:' navbar-dark'}`} style={props.navStyle}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" onClick={handleActive} id="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={handleActive} id="about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className="container mt-3">
          <ul className="swatch-list d-flex justify-content-end">
            <strong className='m-3'>Choose different color modes: </strong>
            <li className="swatch" onClick={props.toggleMode}>
              <div className="swatch-color color-react" id='react'></div>
            </li>
            <li className="swatch" onClick={props.toggleMode}>
              <div className="swatch-color color-wood" id='wood'></div>
            </li>
            <li className="swatch" onClick={props.toggleMode}>
              <div className="swatch-color color-hacker" id='hacker'></div>
            </li>
            <li className="swatch" onClick={props.toggleMode}>
              <div className="swatch-color color-light" id='light'></div>
            </li>
            <li className="swatch" onClick={props.toggleMode}>
              <div className="swatch-color color-charcoal" id='dark'></div>
              <div className="dark" id='dark'>
                <img src="/dark.svg" height="30px" width="30px" alt="" id='dark' />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'About'
}

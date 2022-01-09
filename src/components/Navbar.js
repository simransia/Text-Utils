import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {

const handleActive=(event)=>{
  var elems = document.querySelector(".active");
  if(elems !==null){
   elems.classList.remove("active");
  }
     event.target.classList.add("active");
 }
 


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={handleActive}>
                <Link className="nav-link" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
             
              <li className="nav-item" onClick={handleActive}>
                <Link className="nav-link"  to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch ms-auto">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="SwitchCheck"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="SwitchCheck">
               Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

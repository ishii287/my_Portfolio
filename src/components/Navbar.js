import React from 'react'
import logo from "../assets/images/logo.svg"
import {FaBars} from "react-icons/fa"
import {Link } from "react-scroll"


function Navbar() {
    return (
      <div id="home" >
            <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{backgroundColor:"#dee2ff"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="dreams" src={logo} alt="logo" style={{paddingBottom:'10px', paddingTop:'5px'}}/></a>
    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation">
       <span className="bars"  ><FaBars /></span>
      {/* <span className="navbar-toggler-icon" ></span> */}
    </button>
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto" style={{textAlign:'center'}}>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="home"  smooth={true} duration={1000}>Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about" smooth={true} duration={3000}>About ME</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="projects" smooth={true} duration={3000}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact" smooth={true} duration={4000}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar

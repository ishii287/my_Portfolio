import React from 'react'
// import Typed from "react-typed";
import Particles from "react-particles-js"

// import freelancing from "../assets/images/freelancing.svg"
import bg from "../assets/images/bg.png"
import cv from "../assets/images/Ishita_Agarwal.pdf"

import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithubSquare} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Main() {
    return (
        <div id="home">
         {/* <div className="main-img"> */}
            {/* </div> */}
            <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3F327A",
            					blur: 0.2,
                                width: 9,
            				}
            			}
            		}
            	}} />
            
           
            <br />
            <br />
            <br/>
          <br />
            {/* <Typed 
            className="typed-text text-center"
            strings={["WEB DESIGNER","WEB DEVELOPER"]}
            typeSpeed={40}
            backSpeed={80}
            loop
            /> */}
             <div className="header-bg">
                 <div className="row">
                     <div className="about-content col-12 col-md-4">
            
            <h1 className="intro">
                Hello! I'm <br/> <span className="main-txt"> <h1> Ishita Agarwal </h1> </span>
            </h1>
            <h1>Full Stack Web Developer</h1>
            <div className="contact-icons">
                              <IconContext.Provider value={ {size: '3rem', className:"contactIcon"}}>
                              <a href="#" target="_blank"><FaTwitterSquare /></a>
                              <a href="https://github.com/ishii287" target="_blank"> <FaGithubSquare /></a>
                              <a href="https://www.linkedin.com/in/ishii-agarwal" target="_blank">   <FaLinkedin /></a>
                              <a href="#" target="_blank"> <FaTelegram /></a>
        
        </ IconContext.Provider>  
        </div>  
            {/* <a type="button"  className="btn btn-warning" href="https://drive.google.com/drive/u/0/folders/1MGTfoDdgkmn9yGBb9j7s0kdVqVci-wuY" >Resume <i class="fas fa-arrow-right"></i></a> */}

            <button className="btn btn-warning" style={{ marginTop:"20px"}}>Resume</button>
        
                     </div>
                     <div className="about-content col-md-8">
                <img src={bg} alt="project-image" className="img-responsive img-fluid main-img" ></img>
                </div>
                </div>
        </div>
      

        </div>
    )
    
}

export default Main

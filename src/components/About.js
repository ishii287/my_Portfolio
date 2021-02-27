import React from 'react'
// import me from"../assets/images/ishita.jpg"
// import me from"../assets/images/ishu.jpg"
import me from"../assets/images/ish.jpg"


import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import {FaAngular} from "react-icons/fa"

function About() {
    return (
        
        <div id="about" >
            <br />
            <br />
            <br />
            <div className="me">
            <div className="about-me row" >
            <div className="col-12 col-md-4 about-me-img">
        <img src={me} alt="image"  style={{boxShadow:" 10px 15px black", borderRadius:"20px"}} />
        </div>
        <div className="col-12 col-md-8 about-me-content">
        <h1 className="text-center" style={{color:"rgb(65, 52, 122)",fontWeight:"bolder",letterSpacing:"1.8px"}}> GET TO KNOW ME!   </h1>

            <p style={{paddingTop:"15px",paddingLeft:"20px", fontWeight:"650",fontSize:"19px"}}> I am a 3rd year student pursuing Bachelor's of Technology in Computer 
                    Science. I am an avid learner and always curious to learn about new technologies. I enjoy  the process of
                    learning and building stuff. Whenever I am not coding, I like to spend my time doing silly stuff. </p>
                    <br />

                    <IconContext.Provider value={ {size: '30px'}}>
            <p className="icons-layout-about-me"> 
                        <span className="icons-about-me"><AiFillHtml5 /> HTML5 </span>
                        <span className="icons-about-me"><FaCss3Alt /> CSS3 </span>
                        <span className="icons-about-me"><FaJs /> JavaScript</span>
                        <span className="icons-about-me"><FaReact /> React</span>
                        <span className="icons-about-me"><FaNode /> NodeJs/Express</span>
                        <span className="icons-about-me"><DiMongodb /> MongoDB</span>
                        <span className="icons-about-me"><FaBootstrap /> Bootstrap4</span>
                        <span className="icons-about-me"><i className="fab fa-cuttlefish"></i>++</span>
                        <span className="icons-about-me"><FaAngular />Angular</span>

                    </p>
        </IconContext.Provider>
        </div>
        </div>
        </div>
                     </div>
        
    )
  
}


export default About

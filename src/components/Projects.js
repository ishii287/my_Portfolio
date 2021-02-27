import React from 'react'

import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaAngular} from "react-icons/fa"


import sushi from "../assets/images/sushi.png"
import museum from "../assets/images/museum.png"
import mern from "../assets/images/mern.png"
import chat from "../assets/images/chat.png"
import salon1 from "../assets/images/salon1.png"

import mern1 from "../assets/images/mern1.png"
import mern2 from "../assets/images/mern2.png"

import salon2 from "../assets/images/salon2.png"
import salon3 from "../assets/images/salon3.png"

import sushi1 from "../assets/images/sushi1.png"
import sushi2 from "../assets/images/sushi2.png"

import museum1 from "../assets/images/museum1.png"
import museum2 from "../assets/images/museum2.png"

import chat1 from "../assets/images/chat1.png"



function Projects() {
    return (
          
        <div id="projects">
       
          <hr />
          <br />
          <br />
          <br />
        
     
   <IconContext.Provider value={ {size: '20px'}}>
      <div className="text-center project">
          
    <h1 className="project-title"><span>P</span>rojects</h1>

 
<div className="project-content">

    <div className="project-item row">
        <div className="col-12 col-lg-5 project-item-img">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
    <div className="carousel-item active">
            <img className="shadow img-fluid" alt="mern" src={mern} style={{borderRadius:"8px"}} />
            </div>
            <div class="carousel-item">
      <img src={mern1} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
    <div className="carousel-item">
      <img src={mern2} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
            </div>
          </div>
        
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
        <div className="col-12 col-lg-7 project-desc">
            <div>
                <h4 className="project-item-title">T-shirt Store</h4>
                <p  className="project-desc-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
                <p className="icon-parent"><span className="icons"> <FaReact /> React</span>
                <span className="icons"><FaNode /> NodeJs/Express</span>
                <span className="icons"><DiMongodb /> MongoDB</span></p>
                <div className="link-buttons">
                    <a type="button" className="btn  btn-dark" href="https://t-shirt-store.netlify.app/" target="_blank"><FaLink /> Live Demo</a>
                    <a type="button" className="btn  btn-dark" href="https://github.com/ishii287/E-commerce_website" target="_blank"><FaGithub /> Source Code</a>
                </div>
            </div>
        </div>
    </div>



    <div className="project-item row">
        <div className="col-12 col-lg-5 project-item-img">
        <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
    <div className="carousel-item active">
            <img className="shadow img-fluid" alt="mern" src={chat} style={{borderRadius:"8px"}}></img>
            </div>
            <div class="carousel-item">
      <img src={chat1} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
            </div>
          </div>
        
          <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
        <div className="col-12 col-lg-7 project-desc ">
            <div>
                <h4 className="project-item-title">Chat App</h4>
                <p  className="project-desc-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                 and </p>
                <p className="icon-parent"><span className="icons"><FaReact /> React</span>
                <span className="icons"><FaBootstrap /> Bootstrap4</span></p>
                <div className="link-buttons">
                <a type="button" className="btn  btn-dark" href="https://gossip-app.netlify.app/" target="_blank"><FaLink /> Live Demo</a>
                <a type="button" className="btn  btn-dark" href="https://github.com/ishii287/chat-app" target="_blank"><FaGithub /> Source Code</a>

                </div>
            </div>
        </div>
    </div>
    <div className="project-item row">
        <div className="col-12 col-lg-5 project-item-img">
        <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
    <div className="carousel-item active">
            <img className="shadow img-fluid" alt="mern" src={salon1} style={{borderRadius:"8px"}} ></img>
            </div>
            <div class="carousel-item">
      <img src={salon2} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
    <div className="carousel-item">
      <img src={salon3} class="d-block w-100" alt="..." style={{borderRadius:"8px"}}/>
    </div>
            </div>
          </div>
        
          <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
        <div className="col-12 col-lg-7 project-desc ">
            <div>
                <h4 className="project-item-title">Salon Website</h4>
                <p  className="project-desc-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
                <p className="icon-parent">
                <span className="icons"><FaAngular />Angular</span>
                   <span className="icons"><FaBootstrap />  Bootstrap4</span>
                    <span className="icons"><AiFillHtml5 /> HTML </span>
                    <span className="icons"><FaCss3Alt /> CSS </span>

                    </p>
                    <div className="link-buttons">
                    <a type="button" className="btn  btn-dark" href="https://salon-management.netlify.app/" target="_blank"><FaLink /> Live Demo</a>
                    <a type="button" className="btn  btn-dark" href="https://github.com/ishii287/Salonmanagement" target="_blank"><FaGithub /> Source Code</a>
                    </div>
            </div>
        </div>
    </div>
                    
                
    <div className="project-item row">
        <div className="col-12 col-lg-5 project-item-img">
        <div id="carouselExampleControls3" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
    <div className="carousel-item active">
            <img className="shadow img-fluid" alt="mern" src={museum} style={{borderRadius:"8px"}} />
            </div>
            <div class="carousel-item">
      <img src={museum1} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
    <div className="carousel-item">
      <img src={museum2} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
            </div>
          </div>
        
        <a className="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
        <div className="col-12 col-lg-7 project-desc ">
            <div>
                <h4 className="project-item-title">Museum of Candy</h4>
                <p  className="project-desc-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  </p>
                <p className="icon-parent"> <span className="icons"><FaJs /> JavaScript</span>
                    <span className="icons"><AiFillHtml5 /> HTML </span>
                    <span className="icons"><FaCss3Alt /> CSS </span>
                    </p>
                    <div className="link-buttons">
                    <a type="button" className="btn  btn-dark" href="https://ishii287.github.io/museum_of_candy/" target="_blank"><FaLink /> Live Demo</a>
                    <a type="button" className="btn  btn-dark" href="https://github.com/ishii287/museum_of_candy" target="_blank"><FaGithub /> Source Code</a>
                    </div>
            </div>
        </div>
    </div>
    <div className="project-item row">
        <div className="col-12 col-lg-5 project-item-img">
        <div id="carouselExampleControls4" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
    <div className="carousel-item active">
            <img className="shadow img-fluid" alt="mern" src={sushi} style={{borderRadius:"8px"}}/>
            </div>
            <div class="carousel-item">
      <img src={sushi1} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
    <div className="carousel-item">
      <img src={sushi2} class="d-block w-100" alt="..." style={{borderRadius:"8px"}} />
    </div>
            </div>
          </div>
        
        <a className="carousel-control-prev" href="#carouselExampleControls4" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls4" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
        <div className="col-12 col-lg-7 project-desc ">
            <div>
                <h4 className="project-item-title">Sushi Website</h4>
                <p className="project-desc-para" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
                <p className="icon-parent"> 
                {/* <span className="icons"><FaJs /> JavaScript</span> */}
                    <span className="icons"><AiFillHtml5 /> HTML </span>
                    <span className="icons"><FaCss3Alt /> CSS </span>
                    </p>
                    <div className="link-buttons">
                    <a type="button" className="btn  btn-dark" href="https://sushii-monster.netlify.app/" target="_blank"><FaLink /> Live Demo</a>
                    <a type="button" className="btn  btn-dark" href="https://github.com/ishii287/sushi_monster" target="_blank"><FaGithub /> Source Code</a>

                    </div>
            </div>
        </div>
    </div>
    <div className="text-center find-more"><a className="btn" href="https://github.com/ishii287" target="_blank">More Projects <i className="fab fa-github"></i> </a>
    </div>
</div>

</div>
</IconContext.Provider>


                
        </div>    
    )
}

export default Projects

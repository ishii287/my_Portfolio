import { TableFooter } from '@material-ui/core'
import React from 'react'

import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
        <div className="contact-icons">
                              <IconContext.Provider value={ {size: '3rem', className:"contactIcon"}}>
                              <a href="https://github.com/ishii287" target="_blank"> <FaGithubSquare /></a>
                              <a href="https://twitter.com/IshitaA72547344" target="_blank"><FaTwitterSquare /></a>
                              <a href="https://www.instagram.com/ishii_287/" target="_blank"> <FaInstagram /></a>
                              <a href="https://www.linkedin.com/in/ishii-agarwal" target="_blank">   <FaLinkedin /></a>

        
        </ IconContext.Provider>  
        </div> 
        </div>
    )}

export default Footer;
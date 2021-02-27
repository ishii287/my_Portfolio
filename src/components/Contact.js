import React from 'react'

import emailjs from 'emailjs-com';

import contact from "../assets/images/conta.png"
import footer from "../assets/images/fo.png"

function Contact() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7hp3phj', e.target, 'user_T6bya1Lyg6lvtkYbiMGtf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
      <div  id="contact">
      
<br />
      <div>
        <div className="row">
          <div className="col-md-6">
      <img src={contact} alt="contact-img" className="contactImg" />
      <img src={footer} alt="footer-img" className="footer-image" style={{width:"45%", paddingTop:"0px"}} />

      </div>
      <div className="col-md-6"> 

      
      <div className="contact-content" >

        {/* <div className="text-center"> */}
{/* https://formspree.io/f/xvovylky */}
      <div className="form" >

          <form onSubmit={sendEmail} method="POST">
      <h3 style={{color:"darkblack", paddingTop:"8px",letterSpacing:"1.8px"}} className="text-center ">GET IN TOUCH</h3>
    <br />
      <input type="text" name="name" required="required" placeholder="Name" className="name formEntry" />
      
      <br />
      <input type="email" name="email" required="required" placeholder="Email" className="email formEntry"  />
      <br />

      <textarea className="message formEntry" placeholder="Message" name="message" className="message formEntry"></textarea>
     
      <input type="submit" value="Send" className="submit formEntry" />
</form >
</div>
</div>
</div>
        </div>
        </div>
        
         </div>
        
    )
}

export default Contact

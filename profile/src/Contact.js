import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import profile_pic from './static/profile-pic.jpg';
import gmail_logo from './static/gmail-logo.png'
import linkedin_logo from './static/linkedin-logo.png';
import github_logo from './static/github-logo.png';

function Contact() {
    return(
        <div className="Contact">
          <div className="pic-display">
            <img src={profile_pic} alt="Profile Picture" className="profile-pic" />
            <div className="text-column">
              <h3>Akul Joshi</h3>
              <hr className="contact-line"></hr>
              <div className="contact-bar">
                <div id="email">
                  <a href="mailto:joshi.akul@gmail.com" target="_blank" rel="noopener noreferrer"><img className="icon" src={gmail_logo} alt="Email" /></a>
                </div>
                <div id="linkedin">
                  <a href="http://linkedin.com/in/akul-joshi" target="_blank" rel="noopener noreferrer"><img className="icon" src={linkedin_logo} alt="Linkedin" /></a>
                </div>
                <div id="github">
                  <a href="https://github.com/akuljos" target="_blank" rel="noopener noreferrer"><img className="icon" src={github_logo} alt="Github" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Contact;
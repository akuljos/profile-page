import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import profile_pic from './static/profile-pic.jpg';
import gmail_logo from './static/gmail-logo.png'
import linkedin_logo from './static/linkedin-logo.png';
import github_logo from './static/github-logo.png';


function App() {
  return(
      <div className="App">
          <Navbar fixed="top" expand="lg" className="bg-success-subtle">
            <Container>
              <Navbar.Brand href="#home">Akul Joshi</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#education">Education</Nav.Link>
                  <Nav.Link href="#experience">Experience</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        <div id="home" className="profile-section">
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
          <h3 className="about-me">About Me</h3>
          <hr></hr>
          <p>Hello and welcome to my page! I am a Master in Computer Science graduate from the 
            University of Illinois Urbana-Champaign whose passions lie in exploring state-of-the-art
            machine learning research and developing innovative and impactful solutions through technology.</p> 

          <p>Through my internship experiences, I gained hands-on experience as a Software Development
             Engineer Intern at Amazon, where I spearheaded the development of a dashboard to track and
            visualize rate predictions for worldwide package fulfillment centers as well as optimized 
            a machine learning model that predicted the efficiency of associates in those fulfillment 
            centers, saving the company millions of dollars annually. I also built a streamlined 
            pipeline for multi-billion-dollar clients to set up their IBM Cloud solutions and led a
            team of my fellow interns in designing the architecture for a crowdsourced recycling application
            as part of an internal sustainability hackathon as a Cloud Solutions Developer Intern at IBM.</p> 

          <p>I am actively seeking full-time roles as a machine learning engineer or a software developer
             where I can apply my expertise in AI/ML and cloud to build innovative solutions for positive
             social change. I am eager to learn from and collaborate with diverse and talented teams and
             contribute to advancing cutting-edge technology.</p>
        </div>


        <div id="education" className="profile-section">
          <h3>Education</h3>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium augue ut lectus fringilla porta. Donec suscipit magna sit amet tristique tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim pharetra enim sed lobortis. In sed ex justo. Aliquam semper sit amet magna dapibus blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent id imperdiet orci. Ut nulla metus, malesuada aliquam tortor sed, maximus vehicula eros. Morbi eleifend, velit non bibendum tincidunt, orci sem volutpat lorem, at vulputate lorem dolor id nulla. In nisi odio, sollicitudin quis varius non, mollis eget arcu. Mauris accumsan neque vitae tempus venenatis.

Vivamus blandit interdum velit, pellentesque sagittis leo congue sit amet. Etiam condimentum egestas vulputate. Phasellus vel odio ornare, venenatis felis sit amet, lacinia metus. Ut vitae auctor nulla, pulvinar pharetra neque. Integer sit amet magna pharetra, placerat elit et, dictum ipsum. Duis volutpat urna vitae ante cursus, eget fermentum nulla pulvinar. Nam id nibh ac risus ultrices posuere at sed est. Nulla eget elit at elit lacinia egestas. Morbi quis sodales velit, in hendrerit massa. Nulla eget augue iaculis, tincidunt nunc et, dapibus urna. Nullam venenatis euismod justo, id cursus ex varius fringilla.

Aenean ut sapien malesuada, faucibus nisi a, imperdiet nulla. Donec elit orci, tempor at venenatis maximus, posuere pellentesque elit. Fusce ex dui, ornare nec mauris ut, tempus ultricies ex. Morbi fermentum tincidunt ultricies. Fusce mollis faucibus est in semper. Proin id ornare lorem. Aliquam quis tortor massa. Proin vulputate quam eget sapien maximus ultrices. Nunc suscipit vel augue vitae interdum. Sed ac sollicitudin nibh. Proin lacinia consequat felis quis posuere.

In malesuada massa nec purus tempor vulputate. Morbi ultricies mauris in quam maximus auctor. Cras sed mattis magna. Aenean sit amet libero ac risus accumsan venenatis consequat eget risus. Fusce bibendum, ex a vulputate facilisis, diam eros ornare ex, sit amet maximus neque enim vitae leo. Fusce vehicula libero ut accumsan pretium. Nullam finibus nec nunc in ornare. Nullam in feugiat neque.

Duis in nibh sed massa dictum interdum. Morbi laoreet vel lacus eget hendrerit. Fusce cursus nulla dolor, quis pharetra libero malesuada non. Sed in mauris ut augue ornare hendrerit. Phasellus quis nisi eget augue finibus tincidunt. Curabitur iaculis libero ut metus vestibulum consectetur. Duis pretium lacus sit amet libero vulputate maximus.
          </p>
        </div>

        <div id="experience" className="profile-section">
          <h3>Experience</h3>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium augue ut lectus fringilla porta. Donec suscipit magna sit amet tristique tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim pharetra enim sed lobortis. In sed ex justo. Aliquam semper sit amet magna dapibus blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent id imperdiet orci. Ut nulla metus, malesuada aliquam tortor sed, maximus vehicula eros. Morbi eleifend, velit non bibendum tincidunt, orci sem volutpat lorem, at vulputate lorem dolor id nulla. In nisi odio, sollicitudin quis varius non, mollis eget arcu. Mauris accumsan neque vitae tempus venenatis.

Vivamus blandit interdum velit, pellentesque sagittis leo congue sit amet. Etiam condimentum egestas vulputate. Phasellus vel odio ornare, venenatis felis sit amet, lacinia metus. Ut vitae auctor nulla, pulvinar pharetra neque. Integer sit amet magna pharetra, placerat elit et, dictum ipsum. Duis volutpat urna vitae ante cursus, eget fermentum nulla pulvinar. Nam id nibh ac risus ultrices posuere at sed est. Nulla eget elit at elit lacinia egestas. Morbi quis sodales velit, in hendrerit massa. Nulla eget augue iaculis, tincidunt nunc et, dapibus urna. Nullam venenatis euismod justo, id cursus ex varius fringilla.

Aenean ut sapien malesuada, faucibus nisi a, imperdiet nulla. Donec elit orci, tempor at venenatis maximus, posuere pellentesque elit. Fusce ex dui, ornare nec mauris ut, tempus ultricies ex. Morbi fermentum tincidunt ultricies. Fusce mollis faucibus est in semper. Proin id ornare lorem. Aliquam quis tortor massa. Proin vulputate quam eget sapien maximus ultrices. Nunc suscipit vel augue vitae interdum. Sed ac sollicitudin nibh. Proin lacinia consequat felis quis posuere.

In malesuada massa nec purus tempor vulputate. Morbi ultricies mauris in quam maximus auctor. Cras sed mattis magna. Aenean sit amet libero ac risus accumsan venenatis consequat eget risus. Fusce bibendum, ex a vulputate facilisis, diam eros ornare ex, sit amet maximus neque enim vitae leo. Fusce vehicula libero ut accumsan pretium. Nullam finibus nec nunc in ornare. Nullam in feugiat neque.

Duis in nibh sed massa dictum interdum. Morbi laoreet vel lacus eget hendrerit. Fusce cursus nulla dolor, quis pharetra libero malesuada non. Sed in mauris ut augue ornare hendrerit. Phasellus quis nisi eget augue finibus tincidunt. Curabitur iaculis libero ut metus vestibulum consectetur. Duis pretium lacus sit amet libero vulputate maximus.
          </p>
        </div>

        <div id="projects" className="profile-section">
          <h3>Projects</h3>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium augue ut lectus fringilla porta. Donec suscipit magna sit amet tristique tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim pharetra enim sed lobortis. In sed ex justo. Aliquam semper sit amet magna dapibus blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent id imperdiet orci. Ut nulla metus, malesuada aliquam tortor sed, maximus vehicula eros. Morbi eleifend, velit non bibendum tincidunt, orci sem volutpat lorem, at vulputate lorem dolor id nulla. In nisi odio, sollicitudin quis varius non, mollis eget arcu. Mauris accumsan neque vitae tempus venenatis.

Vivamus blandit interdum velit, pellentesque sagittis leo congue sit amet. Etiam condimentum egestas vulputate. Phasellus vel odio ornare, venenatis felis sit amet, lacinia metus. Ut vitae auctor nulla, pulvinar pharetra neque. Integer sit amet magna pharetra, placerat elit et, dictum ipsum. Duis volutpat urna vitae ante cursus, eget fermentum nulla pulvinar. Nam id nibh ac risus ultrices posuere at sed est. Nulla eget elit at elit lacinia egestas. Morbi quis sodales velit, in hendrerit massa. Nulla eget augue iaculis, tincidunt nunc et, dapibus urna. Nullam venenatis euismod justo, id cursus ex varius fringilla.

Aenean ut sapien malesuada, faucibus nisi a, imperdiet nulla. Donec elit orci, tempor at venenatis maximus, posuere pellentesque elit. Fusce ex dui, ornare nec mauris ut, tempus ultricies ex. Morbi fermentum tincidunt ultricies. Fusce mollis faucibus est in semper. Proin id ornare lorem. Aliquam quis tortor massa. Proin vulputate quam eget sapien maximus ultrices. Nunc suscipit vel augue vitae interdum. Sed ac sollicitudin nibh. Proin lacinia consequat felis quis posuere.

In malesuada massa nec purus tempor vulputate. Morbi ultricies mauris in quam maximus auctor. Cras sed mattis magna. Aenean sit amet libero ac risus accumsan venenatis consequat eget risus. Fusce bibendum, ex a vulputate facilisis, diam eros ornare ex, sit amet maximus neque enim vitae leo. Fusce vehicula libero ut accumsan pretium. Nullam finibus nec nunc in ornare. Nullam in feugiat neque.

Duis in nibh sed massa dictum interdum. Morbi laoreet vel lacus eget hendrerit. Fusce cursus nulla dolor, quis pharetra libero malesuada non. Sed in mauris ut augue ornare hendrerit. Phasellus quis nisi eget augue finibus tincidunt. Curabitur iaculis libero ut metus vestibulum consectetur. Duis pretium lacus sit amet libero vulputate maximus.
          </p>
        </div>
     </div>
  )
}

export default App;

import React from 'react';
import './NavBar.css';

function NavBar() {
    return(
        <div class="navbar">
            <div class="navbar-button-container">
                <div class="navbar-button" id="home-button">
                    <a class="navbar-link" href="#home">
                        <h4 class="navbar-button-text">Akul Joshi</h4>
                    </a>
                </div>
                <div class="navbar-button">  
                    <a class="navbar-link" href="#education">
                        <p class="navbar-button-text">Education</p>
                    </a>
                </div>
                <div class="navbar-button">
                    <a class="navbar-link" href="#experience">
                        <p class="navbar-button-text">Experience</p>
                    </a>
                </div>
                <div class="navbar-button">
                    <a class="navbar-link" href="#projects">
                        <p class="navbar-button-text">Projects</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
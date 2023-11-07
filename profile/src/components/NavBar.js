import React from 'react';
import './NavBar.css';

function NavBar() {
    return(
        <div class="navbar">
            <div class="navbar-button-container">
                    <a class="navbar-button" href="#home">
                        <h4 class="navbar-button-text">Akul Joshi</h4>
                    </a>
                    <a class="navbar-button" href="#education">
                        <p class="navbar-button-text">Education</p>
                    </a>
                <div>
                    <a class="navbar-button" href="#experience">
                        <p class="navbar-button-text">Experience</p>
                    </a>
                </div>
                <div>
                    <a class="navbar-button" href="#projects">
                        <p class="navbar-button-text">Projects</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
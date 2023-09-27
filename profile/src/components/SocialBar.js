import './SocialBar.css';
import linkedin_logo from '../static/linkedin-logo.png'
import github_logo from '../static/github-logo.png'

function SocialBar() {

    return (
        <div className="social-bar">
            <div className="test">
            <h3>Check out my socials!</h3>
            <a href="http://linkedin.com/in/akul-joshi" target="_blank" rel="noopener noreferrer"><img src={linkedin_logo} alt="LinkedIn" className="image-icon" /></a>
            <a href="https://github.com/akuljos" target="_blank" rel="noopener noreferrer"><img src={github_logo} alt="GitHub" className="image-icon" /></a>
            </div>
        </div>
    )
}

export default SocialBar;
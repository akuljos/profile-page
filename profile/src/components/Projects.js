import './Projects.css';
import Menu from './Menu.js';
import SocialBar from './SocialBar.js';

function Projects() {

    return (
        <div className="main-block">
            <Menu />
            <div className="content-block">
                <SocialBar />
            </div>
        </div>
    )
}

export default Projects;
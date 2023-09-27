import './Experience.css';
import Menu from './Menu.js';
import SocialBar from './SocialBar.js';

function Experience() {

    return (
        <div className="main-block">
            <Menu />
            <div className="content-block">
                <SocialBar />
            </div>
        </div>
    )
}

export default Experience;
import './Home.css';
import Menu from './Menu.js';
import SocialBar from './SocialBar.js';

function Home() {

    return (
        <div className="main-block">
            <Menu />
            <div className="content-block">
                <SocialBar />
            </div>
        </div>
    )
}

export default Home;
import './Menu.css'
import { useNavigate } from "react-router-dom";

function Menu() {
    let navigate = useNavigate(); 

    const routeChange = (path) =>{  
      navigate(path);
    }

  return (
    <div className="menu">
        <div>
            <input className="menu-button" type="button" value="Home" onClick={() => routeChange("/")} />
        </div>
        <div>
            <input className="menu-button" type="button" value="Experience" onClick={() => routeChange("/experience")} />
        </div>
        <div>
            <input className="menu-button" type="button" value="Projects" onClick={() => routeChange("/projects")} />
        </div>
        <div>
            <input className="menu-button" type="button" value="Contact" onClick={() => routeChange("/contact")} />
        </div>
    </div>
  );
}

export default Menu;
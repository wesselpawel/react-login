import React from "react";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";

const routes = [
    { path: "/", text: "Home", class: "header-home hvr-underline-from-left" },
    { path: "/Aktualnosci", text: "Aktualności", class: "header-item hvr-underline-from-left" },
    { path: "/Ogloszenia", text: "Ogłoszenia", class: "header-item hvr-underline-from-left" },
    { path: "/Zaloguj", text: "Zaloguj", class: "header-item hvr-underline-from-left" }
];

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentButton: " " };
      this.switchCurrent = this.switchCurrent.bind(this);
      
    }
        switchCurrent(){
            console.log(this.state)
        };
    render(){
    return(
        <div>
        <div className="header-wrapper">
        <img src={logo} alt=""/>
        <div className="header">
            <ul>
                
                {routes.map(route => (
                    <li 
                    className={route.class}
                    key={route.text}
                    currentButton={route.text}
                    onClick={this.switchCurrent}
                    >
                    <Link
                    to={route.path}
                    >
                        {route.text}
                    </Link>
                    </li>
                ))}
                
            </ul>
        </div>
        </div>
        <div className="mobile-header-logo">
               <img src={logo} alt=""/>
            </div>
        <div className="header-wrapper-mobile hide-menu">
            
        <ul className="mobile-header">
                
                {routes.map(route => (
                    <li 
                    className="mobile-items header-item hvr-underline-from-left"
                    key={route.text}
                    activeStyle={{Color:'gold'}}
                    exact
                    >
                    <Link
                    to={route.path}
                    >
                        {route.text}
                    </Link>
                    </li>
                ))}
                
            </ul>
            <div id="open" className="header-wrapper-open">MENU<i className="pulse fas fa-angle-down" id="arrow"></i>
            </div>
        </div>
        </div>
    );
}
}

export default Header;
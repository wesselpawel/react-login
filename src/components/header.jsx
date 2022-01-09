import React from "react";
import logo from "../images/logo2.png";
import { NavLink } from "react-router-dom";
import $ from 'jquery';

const routes = [
    { path: "/", text: "Home", class: "header-item hvr-underline-from-left" },
    { path: "/Aktualnosci", text: "Aktualności", class: "header-item hvr-underline-from-left" },
    { path: "/Ogloszenia", text: "Ogłoszenia", class: "header-item hvr-underline-from-left" },
    { path: "/Zaloguj", text: "Zaloguj", class: "header-item hvr-underline-from-left" }
];

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentButton: null };
      
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
                   // onClick={() => this.setState({ currentButton: route.text })}
                    >
                    <NavLink
                    to={route.path}
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        {route.text}
                    </NavLink>
                    </li>
                ))}
                {this.state.currentButton}
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
                    <NavLink
                    to={route.path}
                    >
                        {route.text}
                    </NavLink>
                    </li>
                ))}
                
            </ul>
            <div id="open" 
            onClick={() => open()} 
            >MENU<i className="pulse fas fa-angle-down" id="arrow"></i>
            </div>
        </div>
        </div>
    );
}
}

      function open() {
      $("#arrow").toggleClass("arrow-rotate");
      $("#arrow").removeClass("pulse");
      $(".header-wrapper-mobile").toggleClass("show-menu hide-menu");
    };


export default Header;
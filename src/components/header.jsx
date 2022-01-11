import React from "react";
import logo from "../images/logo2.png";
import { NavLink } from "react-router-dom";
import $ from 'jquery';

const routes = [
    
    { path: "/", text: "Home", class: "header-item hvr-underline-from-left", id: "", },
    { path: "/Aktualnosci", text: "Aktualności", class: "header-item hvr-underline-from-left", id: "", },
    { path: "/Ogloszenia", text: "Ogłoszenia", class: "header-item hvr-underline-from-left", id: "", },
];

class Header extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { currentPath: null };
     
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
                        currentPath={route.path}
                        onClick={route.id}
                        >
                        <NavLink
                        to={route.path}
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        >
                            {route.text}
                        </NavLink>
                        </li>
                        
                    
                ))}
                <li
                className="header-item-zaloguj hvr-underline-from-left"
                onClick={() => show_login()}
                >Zaloguj</li>
                
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
                    inactiveStyle={{Color:'gold'}}
                    exact
                    >
                    <NavLink
                    to={route.path}
                    >
                        {route.text}
                    </NavLink>
                    </li>
                ))}
                <li
                className="header-item hvr-underline-from-left"
                
                >Zaloguj</li>
            </ul>
            
            <div id="open" 
            onClick={() => open()} 
            >MENU<i className="pulse fas fa-angle-down" id="arrow"></i>
            </div>
        </div>
    </div>    
    );}}

    function open() {
        $("#arrow").toggleClass("arrow-rotate");
        $("#arrow").removeClass("pulse");
        $(".header-wrapper-mobile").toggleClass("show-menu hide-menu");
    };
    
    function show_login(){
        $('#login_circle').addClass('visible-flex');
        $('#login_circle').removeClass('invisible');
        $('#login_circle').addClass('appear');
        $('#login_circle').removeClass('dissapear');
    };
    

export default Header;
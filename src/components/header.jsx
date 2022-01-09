import React from "react";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";

const routes = [
    { path: "/", text: "Home" },
    { path: "/Aktualnosci", text: "Aktualności"},
    { path: "/Ogloszenia", text: "Ogłoszenia"},
    { path: "/Zaloguj", text: "Zaloguj"}
];

function Header() {
    return(
        <div>
        <div class="header-wrapper">
        <img src={logo} alt=""/>
        <div class="header">
            <ul>
                
                {routes.map(route => (
                    <li 
                    class="header-item hvr-underline-from-left"
                    key={route.text}
                    activeStyle={{color:"gold"}}
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
        <div class="mobile-header-logo">
               <img src={logo} alt=""/>
            </div>
        <div class="header-wrapper-mobile hide-menu">
            <ul class="mobile-header">
                <li class="mobile-items header-home hvr-underline-from-left"></li>
                <li class="mobile-items header-item hvr-underline-from-left"></li>
                <li class="mobile-items header-item hvr-underline-from-left"></li>
                <li class="mobile-items header-item hvr-underline-from-left"></li>
            </ul>
            <div id="open" class="header-wrapper-open">MENU<i class="pulse fas fa-angle-down" id="arrow"></i>
            </div>
        </div>
        </div>
    );
}

export default Header;
import React from "react";
import logo from "../images/logo2.png";
import {Link} from "react-router-dom";
function Header() {
    return(
        <div>
        <div class="header-wrapper">
        <img src={logo} alt=""/>
        <div class="header">
            <ul >
            <li class="header-home hvr-underline-from-left"><Link to="/">Home</Link></li>
            <li class="header-item hvr-underline-from-left"><Link to="/aktualnosci">Aktualności</Link></li>
            <li class="header-item hvr-underline-from-left"><Link to="/ogloszenia">Ogłoszenia</Link></li>
            <li class="header-item hvr-underline-from-left"><Link to="/zaloguj">Zaloguj</Link></li>
            </ul>
        </div>
        </div>
        <div class="mobile-header-logo">
               <img src={logo} alt=""/>
            </div>
        <div class="header-wrapper-mobile hide-menu">
            <ul class="mobile-header">
                <li class="mobile-items header-home hvr-underline-from-left"><Link to="/">Home</Link></li>
                <li class="mobile-items header-item hvr-underline-from-left"><Link to="/aktualnosci">Aktualności</Link></li>
                <li class="mobile-items header-item hvr-underline-from-left"><Link to="/ogloszenia">Ogłoszenia</Link></li>
                <li class="mobile-items header-item hvr-underline-from-left"><Link to="/zaloguj">Zaloguj</Link></li>
            </ul>
            <div id="open" class="header-wrapper-open">MENU<i class="pulse fas fa-angle-down" id="arrow"></i>
            </div>
        </div>
        </div>
    )
}

export default Header;
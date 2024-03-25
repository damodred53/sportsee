import React, { useState } from "react";
import LogoSportSee from "../../Assets/main_logo.svg";
import { useEffect } from "react";
import Service from "../../Services/Services.jsx";


const Header = () => {

    
    

    return (
        <nav className="header">
            <ul className="header_list">
                <li className=" header_list_subtitle  header_list_title ">
                    <img src={LogoSportSee} alt="logo de sport see"></img>
                    <h2 className="header_title">SportSee</h2>
                </li>
                <li className="header_list_title">Accueil</li>
                <li className="header_list_title">Profil</li>
                <li className="header_list_title">Réglages</li>
                <li className="header_list_title">Communauté</li>
            </ul>
        </nav>
    )
}

export default Header;
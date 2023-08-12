import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import Background from '../assets/Home-Hero-Image.jpg'

export default function Header(){
    return ( <div className="container">
            <div><img className="background" src={Background}/></div>
            <div className="header__content">
                <div className="header__login">
                    <Link className="login" to="/login">Zaloguj</Link>
                    <Link className="login" to="/register">Załóż konto</Link>
                </div>
                <div className="header__menu"></div>
                <div className="header__main"></div>
            </div>
        </div>
    )
}
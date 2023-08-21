import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import Decoration from '../assets/Decoration.svg';

export default function Login(){
    return ( <div className="container">
            <div className="login__header">
                <div className="header__login">
                    <Link className="login" to="/login">Zaloguj</Link>
                    <Link className="login" to="/register">Załóż konto</Link>
                </div>
                <div className="header__menu">
                    <ScrollLink className="scroll__link"
                                to="start"
                                smooth={true}
                                duration={500}
                    >Start
                    </ScrollLink>
                    <ScrollLink className="scroll__link"
                                to="idea"
                                smooth={true}
                                duration={500}
                    >O co chodzi?
                    </ScrollLink>
                    <ScrollLink className="scroll__link"
                                to="about"
                                smooth={true}
                                duration={500}
                    >O nas
                    </ScrollLink>
                    <ScrollLink className="scroll__link"
                                to="organizations"
                                smooth={true}
                                duration={500}
                    >Fundacje i organizacje
                    </ScrollLink>
                    <ScrollLink className="scroll__link"
                                to="contact"
                                smooth={true}
                                duration={500}
                    >Kontakt
                    </ScrollLink>
                </div>
            </div>
            <div className="login__content logout__content">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img alt="decoration" className="header__decoration" src={Decoration}/>
                <button className="logout__button">Strona główna</button>
            </div>
        </div>

    )}
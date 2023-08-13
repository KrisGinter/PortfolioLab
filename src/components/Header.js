import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import Background from '../assets/Home-Hero-Image.jpg'
import Decoration from '../assets/Decoration.svg'

export default function Header(){
    return ( <div className="container header__container">
            <div className="header__image"><img className="header__background" src={Background}/></div>
            <div className="header__content">
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
                <div className="header__main">
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="header__decoration" src={Decoration}/>
                    <div className="header__buttons">
                        <Link className="header__button" to="/login">Oddaj rzeczy</Link>
                        <Link className="header__button" to="/login">Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
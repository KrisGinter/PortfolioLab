import React from 'react';
import Decoration from '../assets/Decoration.svg'
import Icon1 from '../assets/Icon-1.svg'
import Icon2 from '../assets/Icon-2.svg'
import Icon3 from '../assets/Icon-3.svg'
import Icon4 from '../assets/Icon-4.svg'
import {Link} from "react-router-dom";

export default function Idea(){
    return (
        <div id="idea" className="container idea__container">
            <div className="idea__heading">
                <h1>Wystarczą 4 proste kroki</h1>
                <img className="header__decoration" src={Decoration}/>
            </div>
            <div className="idea__content">
                <div className="idea__box">
                    <img className="idea__icon" src={Icon1}/>
                    <p>Wybierz rzeczy</p>
                    <div className="idea__line"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="idea__box">
                    <img className="idea__icon" src={Icon2}/>
                    <p>Spakuj je</p>
                    <div className="idea__line"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="idea__box">
                    <img className="idea__icon" src={Icon3}/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <div className="idea__line"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="idea__box">
                    <img className="idea__icon" src={Icon4}/>
                    <p>Zamów kuriera</p>
                    <div className="idea__line"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="idea__button__container"><Link className="header__button idea__button" to="/login">Oddaj rzeczy</Link></div>

        </div>
    )
}
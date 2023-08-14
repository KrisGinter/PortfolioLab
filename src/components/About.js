import React from 'react';
import People from '../assets/People.jpg'
import Decoration from '../assets/Decoration.svg'

export default function About(){
    return (
        <div id="about" className="container about__container ">
            <div className="about__box">
                <h1>O nas</h1>
                <img alt="decoration" className="header__decoration" src={Decoration}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>
            </div>
            <div className="about__box">
                <img alt="people" className="about__image" src={People}></img>
            </div>
        </div>
    )
}
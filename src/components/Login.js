import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import Decoration from '../assets/Decoration.svg';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({email:'', password:''})

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
    }

    const handleExternalSubmit = (e) => {
        handleSubmit({
            preventDefault: () => {},
        });
    }

    const validateForm = () => {
        const newErrors = {};

        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };


        if (!email.trim() || !isValidEmail(email)) {
            newErrors.email = "Podany email jest nieprawidłowy!";
        }

        if (password.length < 7) {
            newErrors.password = "Podane hasło jest za krótkie!";
        }

        return newErrors;
    }

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
            <div className="login__content">
                <h1>Zaloguj się</h1>
                <img alt="decoration" className="header__decoration" src={Decoration}/>
                <form onSubmit={handleSubmit} className="login__form">
                    <label className="login__label">Email</label>
                    <input onChange={handleEmailChange} className="login__input" type="text"/>
                    <div className="error__container">{errors.email && <p className="error">{errors.email}</p>}</div>
                        <label className="login__label">Hasło</label>
                        <input onChange={handlePasswordChange} className="login__input" type="text"/>
                    <div className="error__container">{errors.password && <p className="error">{errors.password}</p>}</div>
                </form>
                <div className="login__buttons">
                    <button className="login__button">Załóż konto</button>
                    <button onClick={handleExternalSubmit} className="login__button login__button1">Zaloguj się</button>
                </div>
            </div>
        </div>

    )}

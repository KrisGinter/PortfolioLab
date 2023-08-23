import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import Decoration from "../assets/Decoration.svg";

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState({email:'', password:'',password2:'' })

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
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

        if (password2.length < 7 || password !== password2) {
            if (password2.length < 7) {
                newErrors.password2 = "Podane hasło jest za krótkie!";
            } else if (password !== password2) {
                newErrors.password2 = "Hasło nie zgadza się!";
            }

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
                <h1>Załóż konto</h1>
                <img alt="decoration" className="header__decoration" src={Decoration}/>
                <form onSubmit={handleSubmit} className="login__form">
                    <label className="login__label">Email</label>
                    <input onChange={handleEmailChange} className="login__input" type="text"/>
                    <div className="error__container">{errors.email && <p className="error">{errors.email}</p>}</div>
                    <label className="login__label">Hasło</label>
                    <input onChange={handlePasswordChange} className="login__input" type="text"/>
                    <div className="error__container">{errors.password && <p className="error">{errors.password}</p>}</div>
                    <label className="login__label">Powtórz hasło</label>
                    <input onChange={handlePassword2Change} className="login__input" type="text"/>
                    <div className="error__container">{errors.password2 && <p className="error">{errors.password2}</p>}</div>
                </form>
                <div className="login__buttons">
                    <button className="login__button">Zaloguj się</button>
                    <button onClick={handleExternalSubmit} className="login__button login__button1">Załóż konto</button>
                </div>
            </div>
        </div>

    )
}
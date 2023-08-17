import React, { useState } from 'react';
import Decoration from '../assets/Decoration.svg'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };


    return (
        <div className="container form__container">
            <div className="form__content">
            <div className="form__heading">
                <h1>Skontaktuj się z nami</h1>
                <img className="header__decoration" src={Decoration}/>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form__data">
                    <div className="form-group">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Krzysiek"
                            required
                        />
                    </div>
                        <div className="form-group">
                        <label htmlFor="email">Wpisz swój email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="abc@xyz.pl"
                            required
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            required
                        />
                    </div>
                    <button className="form__button" type="submit">Wyślij</button>
                </form>
            </div>
            </div>
            <div className="footer">
                <p>Copyright by Coders Lab</p>
                <div className="footer__icons">
                    <img className="footer__image" src={Facebook}></img>
                    <img className="footer__image" src={Instagram}></img>
                </div>

            </div>
        </div>
    )
}
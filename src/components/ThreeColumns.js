import React from 'react';
import Background from '../assets/3 Columns Background.png'

export default function ThreeColumns() {
    return (
        <section className="container three-columns__container">
            <div className="three-columns__box three-columns__box1">
                <h1>10</h1>
                <h2>ODDANYCH WORKÓW</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="three-columns__box">
                <h1>5</h1>
                <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="three-columns__box three-columns__box2">
                <h1>7</h1>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="three-columns__box"></div>
            <div className="three-columns__box"></div>
        </section>
    )
}

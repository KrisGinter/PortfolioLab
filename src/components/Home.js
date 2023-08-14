import React from 'react';
import Header from './Header';
import ThreeColumns from './ThreeColumns';
import Idea from './Idea'
import About from './About'

export default function Home(){
    return ( <>
            <Header/>
            <ThreeColumns/>
            <Idea/>
            <About/>
        </>
    )
}
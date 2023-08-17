import React from 'react';
import Header from './Header';
import ThreeColumns from './ThreeColumns';
import Idea from './Idea'
import About from './About'
import Help from './Help'

export default function Home(){
    return ( <>
            <Header/>
            <ThreeColumns/>
            <Idea/>
            <About/>
            <Help itemsPerPage={4}/>
        </>
    )
}
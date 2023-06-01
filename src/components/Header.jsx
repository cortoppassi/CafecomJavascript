import React, { useState } from "react";
import Coding from "./Coding";
import { IoIosCafe, IoLogoJavascript } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css'
import './main.css';

export default function Header() {

    const home = () => {
        console.log('home')
    }

    const sobre = () => {
        console.log('Sobre')
    }

    const portfolio = () => {
        console.log('Portifolio')
    }

    return (
        <div>
            <header>
                <div id="logo" className="navbar visible">
                    <IoIosCafe /><h1>+</h1> <IoLogoJavascript/><h1>=</h1>
                    <Coding/>
                </div>
               
                <div>
                    <nav id="navbar">
                        <ul>
                            <li><a href="#home" onClick={home}>Home</a></li>
                            <li><a href="#sobre" onClick={sobre}>Sobre</a></li>
                            <li><a href="#portfolio" onClick={portfolio}>Portfolio</a></li>
                        </ul>
                    </nav>
                </div>
                
                <nav id="burguer">
                    <AiOutlineMenu />
                </nav>
            </header>
            <div className="container">
            
            </div>    
        </div>
    );
};

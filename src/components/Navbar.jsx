import React from "react";
import { createBrowserHistory } from "history";
import Coding from "./Coding";
import { IoIosCafe, IoLogoJavascript } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';
import './pages/Home.css';

export default function Navbar() {
    const history = createBrowserHistory();

    const handleItemClick = (route) => {
        history.push(route);
    };

    return (
        <div>
            <header>
                <div id="logo" className="navbar visible">
                    <IoIosCafe /><h1 id='coding'>+</h1> <IoLogoJavascript/><h1 id='coding'>=</h1>
                    <Coding/>
                </div>
               
                <div>
                    <nav id="navbar">
                        <ul>
                            <li><a href="#home" onClick={() => handleItemClick("/CafecomJavascript")}>Home</a></li>
                            <li><a href="#sobre" onClick={() => handleItemClick("/sobre")}>Sobre</a></li>
                            <li><a href="#portfolio" onClick={() => handleItemClick("/portfolio")}>Portfolio</a></li>
                        </ul>
                    </nav>
                </div>
                
                <nav id="burguer">
                    <AiOutlineMenu />
                </nav>
            </header>
        </div>
    );
};

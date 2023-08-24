import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import { AreaHeader } from './styled';



function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <AreaHeader>

            <div className="container">
                <div className="logo">
                    <img src="../../../LOGO.jpg"></img>
                </div>

                <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars />
                    
</div>
                    <ul>
                        <li><Link to="/">  Inicio</Link> </li>
                        <li><Link to="/config">  Configurações</Link> </li>
                        <li><Link to="/logout">  Logout</Link> </li>
                        <li><Link to="/test">  Test</Link> </li>
                    </ul>
                </nav>

            </div>
        </AreaHeader>

    );
}


export default Header;
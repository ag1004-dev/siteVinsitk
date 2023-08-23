import React from "react";
import {Link} from 'react-router-dom';


import { AreaHeader } from './styled';



function Header() {

    return (
        <AreaHeader>

            <div className="container">
                <div className="logo">
                    <img src="../../../LOGO.jpg"></img>
                </div>

                <nav>
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
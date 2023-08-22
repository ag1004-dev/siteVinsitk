import React from "react";
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
                        <li> Configurações </li>
                        <li> Sair </li>
                        <li> Configurações </li>

                    </ul>
                </nav>

            </div>
        </AreaHeader>

    );
}


export default Header;
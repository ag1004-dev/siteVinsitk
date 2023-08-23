import react from 'react';

import { AreaLogin } from './styled';

import { BrowserRouter, Link } from 'react-router-dom';

import {BtnDefaultIcons, BtnDefault} from '../../components/Styled';

import FacebookIcon from '@mui/icons-material/Facebook';

import GoogleIcon from '@mui/icons-material/Google';

export default () => {

        return (

            <BrowserRouter>
           <AreaLogin>
     
        <img src="../../../LOGO.jpg"></img>
          <h1> Faça login em sua conta</h1>


            <BtnDefaultIcons>
                <FacebookIcon />
                <div className='center'></div>
                Fazer login com o facebook
            </BtnDefaultIcons>
            <BtnDefaultIcons>
                <GoogleIcon />
                <div className='center'></div>
                Fazer login com o google
            </BtnDefaultIcons>
          

<p> OU</p>

<form>
    <div className="form--input">
        <label>E-mail</label>
        <input type="email"/>
        </div>

        <div className="form--input">
        <label>Senha</label>
        <input type="password"/>
        </div>


            <BtnDefault>Entrar</BtnDefault>

            <div className='footerLogin'>
                Não tem uma conta ?
                <Link to="/registrar"> Registre-se</Link>

                </div>

</form>


           </AreaLogin>

           </BrowserRouter>
        );

}
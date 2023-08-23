import react from 'react';

import { AreaLogin } from './styled';

import {BtnDefaultIcons, BtnDefault} from '../../components/Styled';

import FacebookIcon from '@mui/icons-material/Facebook';

import GoogleIcon from '@mui/icons-material/Google';

export default () => {

        return (
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

</form>


           </AreaLogin>
        );

}
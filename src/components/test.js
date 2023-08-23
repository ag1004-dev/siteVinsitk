import React, { useState } from 'react'; // Importe 'useState' para gerenciar o estado
import { ContainerPage, TitlePage } from './Main';

const Page = () => {

    const [valor, setValor] = useState(0); //
   
    const [user, setUser] = useState({
        id:1 ,
        name: 'Murilo Justino',
        photo:'https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2016/04/Praias-Genova.jpg'
    });


    

function funcAumentar() {
        setValor(valor + 1); // Atualize o valor usando o estado
    }

    function funcDiminuir() {
        setValor(valor - 1); // Atualize o valor usando o estado
    }

    return (
        <ContainerPage>
            <TitlePage>Pagina de Controle</TitlePage>
            <div> Quantidade de produtos no carrinho: <b>{valor}</b> </div>
            <button onClick={funcAumentar}>Aumentar Valor</button>
            <button onClick={funcDiminuir}>Diminuir Valor</button>
  
  
  <hr/>

  Nome do usuário: <b>{user.name} </b><br/>
  <img src={user.photo } />

          </ContainerPage>
    );
};

export default Page;
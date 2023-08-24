import react from 'react';

import {ContainerPage,TitlePage}  from '../../components/Main'

const Page = () => {
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

}

function Page(){

}

export default Page;